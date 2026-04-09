/** Valid YouTube channel URLs */
export const validYoutubeChannelId = {
  /** Standard with www */
  standard: 'https://www.youtube.com/channel/UC1234567890abcdefghijkl',
  /** Without www */
  noWww: 'https://youtube.com/channel/UC1234567890abcdefghijkl',
  /** HTTP */
  http: 'http://www.youtube.com/channel/UC1234567890abcdefghijkl',
  /** With hyphens and underscores */
  withSpecialChars: 'https://www.youtube.com/channel/UC-_abcdefghijklmnopqrst',
};

/** Invalid YouTube channel URLs */
export const invalidYoutubeChannelId = {
  /** Not a YouTube URL */
  notYoutube: 'https://example.com',
  /** User URL format */
  userUrl: 'https://youtube.com/user/somename',
  /** Short channel ID */
  shortId: 'https://youtube.com/channel/UC123',
  /** Missing UC prefix */
  noUcPrefix: 'https://youtube.com/channel/XX1234567890abcdefghijkl',
};
