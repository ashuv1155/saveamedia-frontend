import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DeviceClass } from '@/types/downloader';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Copies text to the user's system clipboard with robust fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers or insecure contexts
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const successful = document.execCommand('copy');
    textarea.remove();
    return successful;
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    return false;
  }
}

export interface DownloadResult {
  method: 'blob' | 'direct_window' | 'failed';
  error?: string;
}

/**
 * Handles cross-origin safe video downloading.
 * Attempts blob fetching with CORS; if remote CDN rejects CORS (e.g., Meta/Instagram CDN headers),
 * gracefully opens the direct media stream in a new tab with clear save guidance.
 */
export async function triggerFileDownload(
  mediaUrl: string,
  preferredFileName = 'instagram_reel.mp4'
): Promise<DownloadResult> {
  if (typeof window === 'undefined') {
    return { method: 'failed', error: 'Window context missing' };
  }

  // If already a blob URL or same-origin asset
  if (mediaUrl.startsWith('blob:') || mediaUrl.startsWith('data:') || mediaUrl.startsWith('/')) {
    const link = document.createElement('a');
    link.href = mediaUrl;
    link.download = preferredFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    return { method: 'blob' };
  }

  try {
    // Attempt blob fetch with AbortController timeout (3 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(mediaUrl, {
      method: 'GET',
      mode: 'cors',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = preferredFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
      return { method: 'blob' };
    }
  } catch (err) {
    // CORS or network error on remote CDN is normal for Instagram media URLs
    console.info('Direct blob download not permitted by CDN CORS; falling back to direct media window.', err);
  }

  // Graceful fallback: Open direct video stream in new tab with download attribute hint
  try {
    const link = document.createElement('a');
    link.href = mediaUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = preferredFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    return { method: 'direct_window' };
  } catch (e) {
    window.open(mediaUrl, '_blank', 'noopener,noreferrer');
    return { method: 'direct_window' };
  }
}

/**
 * Robust device detection combining feature detection, screen width, and user agent hints
 */
export function detectDeviceClass(): DeviceClass {
  if (typeof window === 'undefined') return 'unknown';

  const ua = navigator.userAgent || '';
  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as unknown as { msMaxTouchPoints?: number }).msMaxTouchPoints! > 0;

  // Check iOS
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }

  // Check Android
  if (/Android/i.test(ua)) {
    return 'android';
  }

  // If touch screen and narrow viewport
  if (isTouchDevice && window.innerWidth < 768) {
    return 'android'; // generic mobile fallback
  }

  return 'desktop';
}

/**
 * Format duration in seconds to mm:ss
 */
export function formatDuration(seconds?: number): string {
  if (!seconds || seconds <= 0) return '0:15';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
