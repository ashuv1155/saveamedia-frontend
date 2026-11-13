import { Metadata } from 'next';
import { APP_CONFIG, FAQ_ITEMS } from './constants';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = '',
  keywords = [],
  ogImage = '/images/saveamedia-og.png',
  noIndex = false,
}: SeoProps): Metadata {
  const fullUrl = `${APP_CONFIG.canonicalDomain}${canonicalPath}`;
  const fullTitle = `${title} | ${APP_CONFIG.name}`;

  const defaultKeywords = [
    // Core Seed Keywords
    'Instagram Reel Downloader',
    'Download Instagram Reels',
    'Instagram Video Downloader',
    'Instagram Reel Saver',
    'Save Instagram Reels',
    'Reels Downloader Online',
    'IG Reel Download',
    'Insta Reel Download',
    'Instagram Reel Video Download',
    // Quality & Format Keywords
    'Instagram Reel to MP4',
    'Download Instagram Reels 1080p',
    'Instagram Reel Download HD',
    'Instagram Audio Downloader',
    'Extract Audio from Instagram Reel',
    'Instagram Reel to MP3',
    'Instagram Reel Without Watermark',
    'Download Clean Instagram Reels',
    'Save Reel 4K 60FPS',
    // Device & Platform Keywords
    'Download Instagram Reels iPhone Safari',
    'Download Instagram Reels Android Chrome',
    'Save Instagram Reels to Camera Roll',
    'Save Instagram Reels to Gallery',
    'Instagram Reel Downloader PC Mac',
    'Instagram Reel Downloader Online Free',
    // Intent & Long-tail Keywords
    'How to Download Instagram Reels',
    'Fastest Instagram Reel Downloader 2026',
    'Free Instagram Video Saver No Login',
    'Instagram Reel Link Downloader',
    'Save Public Instagram Reels',
  ];

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    authors: [{ name: APP_CONFIG.name, url: APP_CONFIG.canonicalDomain }],
    creator: APP_CONFIG.name,
    publisher: APP_CONFIG.name,
    applicationName: APP_CONFIG.name,
    metadataBase: new URL(APP_CONFIG.canonicalDomain),
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': fullUrl,
        'x-default': fullUrl,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: APP_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${APP_CONFIG.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@SaveAMedia',
      site: '@SaveAMedia',
    },
    category: 'technology',
    classification: 'Multimedia Downloader & Web Utility',
  };
}

/**
 * Generates the unified Master Multi-Entity JSON-LD Schema Graph
 * Combines WebSite, Organization, WebApplication, AggregateRating, FAQPage, and HowTo
 * Specially formatted for Google AI Overviews, Perplexity, SearchGPT, and Schema.org validators.
 */
export function generateFullGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebSite Entity with SearchAction
      {
        '@type': 'WebSite',
        '@id': `${APP_CONFIG.canonicalDomain}/#website`,
        url: APP_CONFIG.canonicalDomain,
        name: APP_CONFIG.name,
        alternateName: ['SaveAMedia Downloader', 'SaveAMedia.com', 'Save A Media'],
        description: APP_CONFIG.description,
        publisher: {
          '@id': `${APP_CONFIG.canonicalDomain}/#organization`,
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${APP_CONFIG.canonicalDomain}/?url={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },

      // 2. Organization Entity (E-E-A-T Publisher & Brand Entity)
      {
        '@type': 'Organization',
        '@id': `${APP_CONFIG.canonicalDomain}/#organization`,
        name: APP_CONFIG.name,
        legalName: APP_CONFIG.legalName,
        url: APP_CONFIG.canonicalDomain,
        logo: {
          '@type': 'ImageObject',
          '@id': `${APP_CONFIG.canonicalDomain}/#logo`,
          url: `${APP_CONFIG.canonicalDomain}/images/saveamedia-icon.png`,
          contentUrl: `${APP_CONFIG.canonicalDomain}/images/saveamedia-icon.png`,
          caption: 'SaveAMedia Official Brand Emblem',
          width: 512,
          height: 512,
        },
        image: {
          '@id': `${APP_CONFIG.canonicalDomain}/#logo`,
        },
        email: APP_CONFIG.supportEmail,
        description:
          'SaveAMedia is an independent high-performance multimedia utility provider specializing in privacy-preserving link extraction, video renditions, and audio tools.',
        sameAs: [
          'https://twitter.com/SaveAMedia',
          'https://github.com/SaveAMedia',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+1-800-555-0199',
            contactType: 'customer support',
            email: APP_CONFIG.supportEmail,
            availableLanguage: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
          },
        ],
      },

      // 3. WebApplication / SoftwareApplication Entity
      {
        '@type': 'WebApplication',
        '@id': `${APP_CONFIG.canonicalDomain}/#software`,
        name: `${APP_CONFIG.name} - Instagram Reel Downloader`,
        url: APP_CONFIG.canonicalDomain,
        applicationCategory: 'MultimediaApplication',
        applicationSubCategory: 'Video Downloader & Audio Converter',
        operatingSystem: 'All (iOS, Android, Windows, macOS, Linux, ChromeOS)',
        browserRequirements: 'Requires modern web browser with HTML5 and JavaScript support (Safari, Chrome, Firefox, Edge)',
        softwareVersion: '2.4.0',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: APP_CONFIG.aggregateRating.ratingValue,
          ratingCount: APP_CONFIG.aggregateRating.reviewCount,
          bestRating: APP_CONFIG.aggregateRating.bestRating,
          worstRating: APP_CONFIG.aggregateRating.worstRating,
        },
        featureList: [
          'Sub-second public Instagram Reel extraction',
          'Client-side tracking parameter sanitation (?igsh= removal)',
          'In-browser 1080p Full HD video preview player',
          'Lossless 320kbps MP3 audio splitting',
          'Zero watermark or logo overlay',
          'Zero account registration or login required',
          'Zero-install desktop browser bookmarklet alternative',
          'Native iOS Safari Files & Android Chrome Gallery integration',
        ],
        description: APP_CONFIG.description,
      },

      // 4. HowTo Entity (Direct Answer for SearchGPT & Google Featured Snippet)
      {
        '@type': 'HowTo',
        '@id': `${APP_CONFIG.canonicalDomain}/#howto`,
        name: 'How to Download Instagram Reels in HD 1080p (3-Step Guide)',
        description:
          'Step-by-step tutorial on how to safely download public Instagram Reels on iPhone, Android, PC, and Mac without installing apps or logging into accounts.',
        totalTime: 'PT30S',
        tool: [
          {
            '@type': 'HowToTool',
            name: 'Web Browser (Safari, Chrome, Firefox, Edge)',
          },
          {
            '@type': 'HowToTool',
            name: 'SaveAMedia Web Downloader (https://saveamedia.com)',
          },
        ],
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Public Instagram Reel URL link',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Copy Public Reel Link from Instagram',
            text: 'Open Instagram on mobile or desktop, find the public Reel, tap the Share icon, and select "Copy Link".',
            url: `${APP_CONFIG.canonicalDomain}/#step-1`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Paste Link into SaveAMedia Downloader',
            text: 'Visit SaveAMedia.com in your browser, paste the URL into the input card, and tap "Download Reel". SaveAMedia cleans tracking queries automatically.',
            url: `${APP_CONFIG.canonicalDomain}/#step-2`,
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Preview Video & Save in 1080p or MP3',
            text: 'Watch the video in the preview player to verify audio and resolution, then click "Download 1080p" to save the MP4 directly to your device storage or camera roll.',
            url: `${APP_CONFIG.canonicalDomain}/#step-3`,
          },
        ],
      },

      // 5. FAQPage Entity (Direct Answering Knowledge Base for AI Retrieval)
      {
        '@type': 'FAQPage',
        '@id': `${APP_CONFIG.canonicalDomain}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

/**
 * Generates Schema.org JSON-LD for subpage FAQPage
 */
export function generateFaqSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org JSON-LD for subpage HowTo
 */
export function generateHowToSchema(title?: string, description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title || 'How to Download Instagram Reels Online in 3 Steps',
    description:
      description ||
      'Learn how to download publicly accessible Instagram Reels on iPhone, Android, or PC in seconds with zero watermark.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Copy the Instagram Reel URL',
        text: 'Open the Instagram app or website, locate the public Reel you wish to save, tap Share, and select "Copy Link".',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Paste into SaveAMedia',
        text: 'Navigate to SaveAMedia.com, paste the copied link into the URL input field, and tap "Download Reel".',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Preview and Download',
        text: 'Watch the preview video to verify quality, select 1080p, 720p, or MP3 format, and download the media to your device.',
      },
    ],
  };
}

/**
 * Generates Schema.org BreadcrumbList
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${APP_CONFIG.canonicalDomain}${item.url}`,
    })),
  };
}
