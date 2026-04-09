/**
 * Matches a YouTube channel URL and captures the 22-character channel ID
 *
 * Channel URLs use the /channel/UC prefix followed by a 22-character ID
 *
 * ___Does not enforce beginning and end of string___
 * @example ✅ 'https://www.youtube.com/channel/UC1234567890abcdefghijkl'
 * @example ✅ 'http://youtube.com/channel/UC1234567890abcdefghijkl'
 * @example ❌ 'https://youtube.com/user/somename'
 * @example ❌ 'https://example.com'
 */
export const youtubeChannelId = /https?:\/\/(?:www\.)?youtube\.com\/channel\/UC[-_a-zA-Z0-9]{22}/i;
