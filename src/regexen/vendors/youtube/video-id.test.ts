import { describe, expect, it } from 'vitest';
import {
  invalidYoutubeVideoId,
  validYoutubeVideoId,
} from '../../../fixtures/vendors/youtube/video-id.ts';
import { youtubeVideoId } from './video-id.ts';

describe('youtubeVideoId', () => {
  it.each(Object.entries(validYoutubeVideoId))('%s: %s', (_, value) => {
    expect(youtubeVideoId.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidYoutubeVideoId))('%s: %s', (_, value) => {
    expect(youtubeVideoId.test(value)).toBe(false);
  });
});
