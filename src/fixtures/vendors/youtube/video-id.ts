/** Valid YouTube video URLs */
export const validYoutubeVideoId = {
  /** Standard watch URL */
  standard: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  /** Short URL */
  shortUrl: 'https://youtu.be/dQw4w9WgXcQ',
  /** HTTP */
  http: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
  /** Localized subdomain */
  localized: 'https://de.youtube.com/watch?v=dQw4w9WgXcQ',
  /** Without www */
  noWww: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
  /** Hash-bang style */
  hashBang: 'https://youtube.com/watch#!v=dQw4w9WgXcQ',
};

/** Invalid YouTube video URLs */
export const invalidYoutubeVideoId = {
  /** Not a YouTube URL */
  notYoutube: 'https://example.com',
  /** Channel URL */
  channelUrl: 'https://youtube.com/channel/UCxxxxxxxxxxxxxxxxxxxxxx',
  /** Missing video ID */
  noVideoId: 'https://youtube.com/watch?v=',
  /** Short ID */
  shortId: 'https://youtube.com/watch?v=abc',
};
