import type { PavillionEvent } from '../types';
import { pavillionMedia } from '../media.generated';

export const bingoNight23May2026: PavillionEvent = {
  slug: '2026-05-23-bingo-night',
  title: 'Bingo Night',
  category: 'Event',
  date: '2026-05-23',
  dateLabel: '23 May 2026',
  monthGroup: 'May 2026',
  updatedBy: 'Bibimbapqp',
  shortDescription: '28 players, four maps, team rounds, prizes, and plenty of fun!',
  description:
    'Hosted by Bibimbapqp, our second Ploofyz Bingo Night brought 28 players together for a fun evening of bingo, teamwork, prizes, and friendly chaos.',
  news: {
    intro: [
      'Hello, Bibimbapqp here! Thank you to everyone who joined Ploofyz Bingo Night on 23 May. Seeing so many players stay active from the first round until the end made me very happy as the host.',
      'We played across four maps with different difficulties. The night started with one solo round, followed by three randomized team rounds. The games became louder, more competitive, and more chaotic—in the best way!',
      'We also received lots of positive feedback. Players enjoyed the maps, teamwork, rewards, and the fun atmosphere. I am glad we could make another happy memory together.',
    ],
    stats: [
      { value: '28', label: 'Unique players' },
      { value: '54', label: 'Winner entries' },
      { value: '108', label: 'Event keys given out' },
    ],
    highlights: [
      'Four maps with different difficulty levels.',
      'One solo round and three randomized team rounds.',
      'Every player received three keys in the final round.',
      'Strong support, active players, and many fun moments from start to finish.',
    ],
    thankYou: [
      'Thank you to all admins for helping the event run well.',
      'Thank you to Ploofnix, our VIP guest, for joining the event.',
      'Thank you to Kio and Ryz for helping maintain the event and supporting me throughout the night.',
      'A special thank you to Ryz for taking these amazing pictures.',
      'Most importantly, thank you to every participant who played actively from the beginning until the end. Your energy made the event fun!',
    ],
    improvements: [
      'Share event announcements and reminders earlier.',
      'Give clearer instructions, especially for new players.',
      'Improve lag management and optimize the maps.',
      'Add more interactive minigames and side activities.',
      'Keep giving fun rewards and recognition to players.',
    ],
    closing:
      'Not every moment was perfect, but that is how we learn. Thank you for the support, the kind feedback, and all the laughs. I hope to see everyone again at the next Ploofyz event!',
  },
  article: '',
  images: pavillionMedia.bingo23may.map((src, index) => ({
    src,
    alt: `Ploofyz Bingo Night on 23 May 2026, photo ${index + 1} captured by Ryz`,
  })),
};
