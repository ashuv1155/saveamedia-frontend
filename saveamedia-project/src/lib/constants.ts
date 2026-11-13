/**
 * SaveAMedia Application Constants, Configuration & SEO Entities
 */

export const APP_CONFIG = {
  name: 'SaveAMedia',
  legalName: 'SaveAMedia Technologies Inc.',
  tagline: 'Instagram Reel Downloader & Media Extractor',
  description:
    'Download Instagram Reels, videos, and audio in seconds. Free, high-speed, 1080p Full HD video preview, MP3 audio extraction, client-side privacy sanitization, and zero login required.',
  canonicalDomain: 'https://saveamedia.com',
  defaultTimeoutMs: 20000,
  maxUrlLength: 512,
  supportEmail: 'support@saveamedia.com',
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '128450',
    bestRating: '5',
    worstRating: '1',
  },
  operatingSystems: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'ChromeOS'],
  supportedFormats: ['MP4 (1080p Full HD)', 'MP4 (720p HD)', 'MP4 (480p SD)', 'MP3 (320kbps Audio)'],
};

export const PROCESSING_MESSAGES = [
  'Validating your Instagram link...',
  'Stripping tracking parameters for privacy...',
  'Querying public media distribution nodes...',
  'Discovering highest bitrate 1080p streams...',
  'Preparing download options...',
] as const;

export const TRUST_INDICATORS = [
  {
    id: 'no-login',
    title: 'Zero Login Required',
    description: 'We never request your Instagram username, password, 2FA codes, or browser cookies.',
    icon: 'ShieldCheck',
  },
  {
    id: 'client-sanitization',
    title: 'Client-Side Privacy Sanitization',
    description: 'Tracking parameters (?igsh=, ?utm_source=) are automatically removed in your browser before extraction.',
    icon: 'Lock',
  },
  {
    id: 'hd-preview',
    title: 'Instant 1080p Video Preview',
    description: 'Preview the full video and audio directly in your browser before saving to your device.',
    icon: 'PlayCircle',
  },
  {
    id: 'mobile-optimized',
    title: 'Cross-Platform Compatibility',
    description: 'Seamless operation on iPhone (Safari), Android (Chrome), Windows, macOS, and Linux.',
    icon: 'Smartphone',
  },
] as const;

export const FEATURES_LIST = [
  {
    id: 'url-workflow',
    title: 'One-Click URL Workflow',
    description: 'Simply paste any public Instagram Reel link. No software installation, no browser configurations required.',
    icon: 'Sparkles',
  },
  {
    id: 'fast-processing',
    title: 'Sub-Second Extraction',
    description: 'High-speed edge gateway queries public CDN nodes to discover master video streams in under 800ms.',
    icon: 'Zap',
  },
  {
    id: 'video-preview',
    title: 'Built-in In-Browser Video Player',
    description: 'Stream and inspect the extracted Reel inside the player to verify audio synchronization and visual clarity.',
    icon: 'PlayCircle',
  },
  {
    id: 'audio-extraction',
    title: 'Clean MP3 Audio Extraction',
    description: 'Extract trending sounds, original background music, and voiceovers as standalone 320kbps MP3 files.',
    icon: 'Music',
  },
  {
    id: 'no-watermark',
    title: 'Zero Watermark Overlay',
    description: 'Downloads the pure master stream without adding third-party logos, watermarks, or compression artifacts.',
    icon: 'CheckCircle',
  },
  {
    id: 'bookmarklet',
    title: 'Zero-Install Browser Bookmarklet',
    description: 'Drag our lightweight JavaScript bookmarklet to your browser bar for instant one-click downloads from desktop.',
    icon: 'Bookmark',
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Copy the Instagram Reel URL',
    description:
      'Open the Instagram app or website, locate the public Reel you wish to save, tap the Share icon (paper airplane), and select "Copy Link".',
    icon: 'Copy',
  },
  {
    step: 2,
    title: 'Paste the URL into SaveAMedia',
    description:
      'Paste the copied link into our downloader field above. SaveAMedia cleans tracking parameters and verifies public availability.',
    icon: 'ClipboardPaste',
  },
  {
    step: 3,
    title: 'Preview and Download in HD',
    description:
      'Watch the video in the player to confirm quality, choose your format (1080p Full HD, 720p, or MP3 audio), and save to your device.',
    icon: 'Download',
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How do I download an Instagram Reel?',
    answer:
      'To download an Instagram Reel: (1) Open Instagram, navigate to the public Reel, tap Share, and select "Copy link"; (2) Open SaveAMedia.com in your web browser and paste the link into the URL input card; (3) Click "Download Reel"; (4) Once extracted, preview the video in our player and tap your preferred format (1080p Full HD MP4, 720p HD, or MP3 audio) to save the file directly to your device storage or camera roll.',
  },
  {
    id: 'faq-2',
    question: 'Is SaveAMedia 100% free with no hidden fees or subscriptions?',
    answer:
      'Yes. SaveAMedia is completely free to use for personal, authorized media archiving. There are no subscriptions, registration requirements, credit cards, or daily link quotas. We maintain server infrastructure through discreet, non-intrusive sponsor badges that never interfere with download buttons.',
  },
  {
    id: 'faq-3',
    question: 'Can I download Instagram Reels on iPhone and save directly to Camera Roll?',
    answer:
      'Yes. On any iPhone running iOS 13 or newer, Apple Safari features a native Download Manager. When you tap "Download 1080p", Safari saves the MP4 file to your "Files" app under "Downloads". To transfer it to your Photos app, open Files > Downloads, tap the downloaded video, tap the Share icon, and choose "Save Video". The Reel will appear immediately in your Camera Roll.',
  },
  {
    id: 'faq-4',
    question: 'How do I download Instagram Reels on Android phones?',
    answer:
      'On Android (Samsung Galaxy, Google Pixel, OnePlus, Xiaomi, etc.) using Google Chrome or Samsung Internet, simply paste the Reel link into SaveAMedia and tap Download. The MP4 video file downloads directly to your device storage in the "Download" folder and is instantly visible in Google Photos, Samsung Gallery, or your default media player.',
  },
  {
    id: 'faq-5',
    question: 'Does SaveAMedia add a watermark to downloaded videos?',
    answer:
      'No. SaveAMedia never injects any watermarks, logos, or overlay branding onto your downloaded videos. You receive the exact original high-definition master video stream as delivered by Instagram public content delivery networks.',
  },
  {
    id: 'faq-6',
    question: 'Can I extract and download only the audio or music from a Reel?',
    answer:
      'Yes. SaveAMedia automatically splits the audio stream from the video container and provides a dedicated "Audio Only (MP3)" download option at up to 320 kbps. This is ideal for saving trending sound bites, background scores, podcasts, and speeches.',
  },
  {
    id: 'faq-7',
    question: 'Do I need an Instagram account or login to use SaveAMedia?',
    answer:
      'No. You do not need an Instagram account, nor do you ever need to enter your username, password, two-factor authentication, or cookies. SaveAMedia operates entirely on public URL structures without requiring any user authentication.',
  },
  {
    id: 'faq-8',
    question: 'Can I download private Instagram Reels or Stories?',
    answer:
      'No. SaveAMedia strictly respects creator privacy and copyright standards. Videos from private profiles, close-friends stories, and restricted accounts are encrypted behind user session tokens and cannot be accessed. We only support publicly accessible content that you have rights or permission to download.',
  },
  {
    id: 'faq-9',
    question: 'Why did my Reel download fail or show "Unavailable"?',
    answer:
      'Extraction failures typically happen for four reasons: (1) The Reel was posted by a private account; (2) The Reel was deleted or removed by the author; (3) The URL copied was incomplete or corrupted; or (4) Instagram public nodes are undergoing momentary rate limits. If server extraction is temporarily delayed, SaveAMedia automatically suggests our client-side Bookmarklet fallback.',
  },
  {
    id: 'faq-10',
    question: 'What video quality and resolutions does SaveAMedia support?',
    answer:
      'SaveAMedia discovers all available video renditions provided by the content delivery network, including 1080p Full HD (1080×1920 vertical format at up to 60fps), 720p HD (720×1280), and 480p SD. If the creator uploaded in full 1080p, you can download the uncompressed 1080p master file.',
  },
  {
    id: 'faq-11',
    question: 'What is the SaveAMedia Browser Bookmarklet?',
    answer:
      'The SaveAMedia Bookmarklet is a lightweight, zero-install JavaScript utility that you drag to your browser bookmarks bar. When viewing any Instagram Reel on desktop, clicking the bookmarklet instantly opens SaveAMedia with the Reel URL pre-loaded and extracted, eliminating the need to copy and paste links manually.',
  },
  {
    id: 'faq-12',
    question: 'How does SaveAMedia protect user privacy?',
    answer:
      'SaveAMedia implements client-side URL sanitation. When you paste an Instagram link containing tracking parameters (such as ?igsh=, ?utm_source=, or session identifiers), our code strips these parameters entirely within your browser before the request touches any server. We never log IP addresses with personal accounts.',
  },
  {
    id: 'faq-13',
    question: 'Is it legal to download Instagram Reels?',
    answer:
      'Downloading publicly available Instagram Reels for personal offline viewing, research, or archival under Fair Use principles (17 U.S.C. § 107) is generally permissible. However, re-uploading, republishing, or commercially monetizing someone else’s creative content without explicit authorization violates copyright law. Always credit original creators.',
  },
  {
    id: 'faq-14',
    question: 'Can I download Reels on PC, Mac, or Chromebook?',
    answer:
      'Yes. SaveAMedia is fully web-based and runs seamlessly on Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Brave, and Opera across Windows 11/10, macOS, Linux, and ChromeOS. Downloaded videos are saved directly to your default browser downloads folder in MP4 format.',
  },
  {
    id: 'faq-15',
    question: 'Why is in-browser video preview important?',
    answer:
      'Unlike blind download sites that force you to download files before seeing what they are, SaveAMedia embeds a native HTML5 video preview player. This allows you to verify video fidelity, check audio synchronization, and confirm that the video is the exact content you desired before using your device data.',
  },
  {
    id: 'faq-16',
    question: 'What makes SaveAMedia better than other downloaders?',
    answer:
      'SaveAMedia offers: (1) Zero intrusive pop-up ads or fake download buttons; (2) Client-side privacy stripping of Instagram tracking parameters; (3) Multi-server gateway failover with bookmarklet backup; (4) Clean 1080p HD stream discovery with no watermark overlays; and (5) A fast, modern dark/light UI optimized for mobile and desktop.',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/download-tools', label: 'Download Tools' },
] as const;

export const SEO_PAGES_NAV = [
  { href: '/instagram-reel-downloader', label: 'Reel Downloader' },
  { href: '/instagram-audio-downloader', label: 'Audio & MP3 Extractor' },
  { href: '/instagram-video-downloader-without-watermark', label: 'No Watermark HD' },
  { href: '/instagram-reel-downloader-1080p', label: '1080p Full HD' },
  { href: '/save-instagram-reels-to-camera-roll', label: 'Save to Camera Roll' },
  { href: '/how-to-download-instagram-reels', label: 'Download Guide' },
  { href: '/instagram-downloader-for-iphone', label: 'For iPhone' },
  { href: '/instagram-downloader-for-android', label: 'For Android' },
  { href: '/instagram-reel-downloader-for-pc', label: 'For PC / Mac' },
] as const;

export const LEGAL_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/dmca', label: 'DMCA Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/contact', label: 'Contact Support' },
] as const;

/**
 * Machine-Readable Comparison Benchmark Matrix
 * Designed for Perplexity, SearchGPT, and Google AI Overviews ingestion
 */
export const COMPARISON_MATRIX = [
  {
    feature: 'No Login Required',
    saveAMedia: true,
    mobileApps: false,
    screenRecording: true,
    otherWebsites: 'Varies',
  },
  {
    feature: 'Zero Watermark Overlay',
    saveAMedia: true,
    mobileApps: 'Often Watermarked',
    screenRecording: 'Captures UI overlays',
    otherWebsites: 'Varies',
  },
  {
    feature: '1080p Full HD Quality',
    saveAMedia: true,
    mobileApps: 'Often compressed',
    screenRecording: 'Lossy screen grab',
    otherWebsites: 'Usually 720p max',
  },
  {
    feature: 'Audio Only (MP3 320kbps)',
    saveAMedia: true,
    mobileApps: false,
    screenRecording: 'Requires audio splitter',
    otherWebsites: 'Rarely offered',
  },
  {
    feature: 'Client-Side Privacy Stripping',
    saveAMedia: true,
    mobileApps: false,
    screenRecording: 'N/A',
    otherWebsites: false,
  },
  {
    feature: 'Zero Software Installation',
    saveAMedia: true,
    mobileApps: false,
    screenRecording: true,
    otherWebsites: true,
  },
  {
    feature: 'In-Browser Video Preview Player',
    saveAMedia: true,
    mobileApps: 'Varies',
    screenRecording: false,
    otherWebsites: false,
  },
] as const;
