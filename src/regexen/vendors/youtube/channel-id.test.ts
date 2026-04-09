import { describe, expect, it } from 'vitest';
import {
  invalidYoutubeChannelId,
  validYoutubeChannelId,
} from '../../../fixtures/vendors/youtube/channel-id.ts';
import { youtubeChannelId } from './channel-id.ts';

describe('youtubeChannelId', () => {
  it.each(Object.entries(validYoutubeChannelId))('%s: %s', (_, value) => {
    expect(youtubeChannelId.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidYoutubeChannelId))('%s: %s', (_, value) => {
    expect(youtubeChannelId.test(value)).toBe(false);
  });
});
