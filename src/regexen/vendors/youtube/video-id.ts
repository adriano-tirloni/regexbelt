/**
 * Matches a YouTube video URL and captures the 11-character video ID
 *
 * Supports youtu.be short links and youtube.com/watch URLs with localized subdomains
 *
 * ___Does not enforce beginning and end of string (matches within longer text)___
 * @example ✅ 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
 * @example ✅ 'https://youtu.be/dQw4w9WgXcQ'
 * @example ✅ 'http://de.youtube.com/watch?v=dQw4w9WgXcQ'
 * @example ❌ 'https://example.com'
 * @example ❌ 'https://youtube.com/channel/UCxxxxxx'
 */
export const youtubeVideoId =
  /https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#!)v=)([\w-]{11})/i;
