import { videoContest02May2026 } from './events/2026-05-02-video-contest';
import { bingoNight16May2026 } from './events/2026-05-16-bingo-night';
import { bingoNight23May2026 } from './events/2026-05-23-bingo-night';
import { chapterOneClosure30June2026 } from './events/2026-06-30-chapter-one-closure';
import { chapterTwoWatchParty31July2026 } from './events/2026-07-31-chapter-two-watch-party';
import { chapterTwoPublicLaunch15August2026 } from './events/2026-08-15-chapter-two-public-launch';
import type { PavillionEvent } from './types';

export const pavillionEvents: PavillionEvent[] = [
  chapterTwoPublicLaunch15August2026,
  chapterTwoWatchParty31July2026,
  chapterOneClosure30June2026,
  videoContest02May2026,
  bingoNight16May2026,
  bingoNight23May2026,
].sort((a, b) => b.date.localeCompare(a.date));

export const getPavillionEventBySlug = (slug: string) => {
  return pavillionEvents.find((event) => event.slug === slug);
};

export const getPavillionEventsByMonth = () => {
  return pavillionEvents.reduce<Record<string, PavillionEvent[]>>((groups, event) => {
    if (!groups[event.monthGroup]) {
      groups[event.monthGroup] = [];
    }

    groups[event.monthGroup].push(event);
    return groups;
  }, {});
};
