import { AnalyticsEvent } from '@/types/downloader';

type Listener = (event: AnalyticsEvent) => void;
const listeners: Listener[] = [];

/**
 * Privacy-first event tracker for SaveAMedia
 * Does NOT collect passwords, session cookies, personal identifiers, or IP addresses.
 */
export function trackEvent(
  eventName: AnalyticsEvent['eventName'],
  properties?: Record<string, string | number | boolean | undefined>
): void {
  const event: AnalyticsEvent = {
    eventName,
    properties,
    timestamp: Date.now(),
  };

  // In development, log to console for debugging
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug(`[Analytics Tracked]: ${eventName}`, properties);
  }

  // Notify registered listeners (e.g., Google Analytics, Plausible, PostHog, or custom CF worker)
  listeners.forEach((listener) => {
    try {
      listener(event);
    } catch (e) {
      console.warn('Analytics listener error:', e);
    }
  });

  // If window.dataLayer exists (Google Tag Manager / GA4)
  if (typeof window !== 'undefined' && Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      ...properties,
    });
  }
}

/**
 * Register an external analytics provider listener
 */
export function registerAnalyticsListener(listener: Listener): () => void {
  listeners.push(listener);
  return () => {
    const idx = listeners.indexOf(listener);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}
