import { z } from 'zod';

/**
 * Regex patterns for Instagram content
 */
const INSTAGRAM_HOSTNAME_REGEX = /^(www\.)?(instagram\.com|instagr\.am|ddinstagram\.com)$/i;

// Match reel, reels, p (post), tv (IGTV) shortcodes
const REEL_PATH_REGEX = /^\/(?:reel|reels|p|tv)\/([a-zA-Z0-9_-]+)/i;

export interface CleanedUrlResult {
  isValid: boolean;
  cleanedUrl?: string;
  shortcode?: string;
  errorMessage?: string;
}

/**
 * Strips tracking parameters and extracts clean canonical Reel URL
 */
export function parseAndCleanInstagramUrl(rawInput: string): CleanedUrlResult {
  const trimmed = rawInput.trim();

  if (!trimmed) {
    return {
      isValid: false,
      errorMessage: 'Please enter or paste an Instagram Reel URL.',
    };
  }

  // Prepend https:// if user pasted without protocol
  let urlToParse = trimmed;
  if (!/^https?:\/\//i.test(urlToParse)) {
    urlToParse = `https://${urlToParse}`;
  }

  try {
    const parsed = new URL(urlToParse);

    // Validate hostname
    if (!INSTAGRAM_HOSTNAME_REGEX.test(parsed.hostname)) {
      return {
        isValid: false,
        errorMessage: 'Invalid domain. Please provide a valid link from instagram.com.',
      };
    }

    // Check path for reel or post identifier
    const match = parsed.pathname.match(REEL_PATH_REGEX);
    if (!match || !match[1]) {
      // Check if it was a profile, explore, or other unsupported path
      const pathSegments = parsed.pathname.split('/').filter(Boolean);
      if (
        pathSegments.length === 1 ||
        parsed.pathname === '/' ||
        parsed.pathname.startsWith('/explore') ||
        parsed.pathname.startsWith('/direct')
      ) {
        return {
          isValid: false,
          errorMessage: 'This link points to an Instagram feed or profile, not a Reel.',
        };
      }

      return {
        isValid: false,
        errorMessage: 'Could not find a valid Reel ID. Supported formats: instagram.com/reel/CODE or instagram.com/p/CODE.',
      };
    }

    const shortcode = match[1];
    const cleanedUrl = `https://www.instagram.com/reel/${shortcode}/`;

    return {
      isValid: true,
      cleanedUrl,
      shortcode,
    };
  } catch {
    return {
      isValid: false,
      errorMessage: 'The provided text is not a valid URL structure.',
    };
  }
}

/**
 * Zod schema for URL input validation
 */
export const instagramUrlSchema = z
  .string()
  .min(1, { message: 'URL cannot be empty.' })
  .max(1024, { message: 'URL is too long.' })
  .refine(
    (val) => {
      const res = parseAndCleanInstagramUrl(val);
      return res.isValid;
    },
    (val) => {
      const res = parseAndCleanInstagramUrl(val);
      return { message: res.errorMessage || 'Invalid Instagram Reel URL.' };
    }
  );

export type InstagramUrlFormValues = {
  url: string;
};
