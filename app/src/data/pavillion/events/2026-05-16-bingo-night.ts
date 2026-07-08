import type { PavillionEvent } from '../types';
import { pavillionMedia } from '../media.generated';

const bingoCaptions = [
  'Bingo Night Winners - Map 1 to Map 3',
  'Bingo Night Winners - Map 4',
];

export const bingoNight16May2026: PavillionEvent = {
  slug: '2026-05-16-bingo-night',
  title: 'Bingo Night',
  category: 'Event',
  date: '2026-05-16',
  dateLabel: '16 May 2026',
  monthGroup: 'May 2026',
  updatedBy: 'Bibimbapqp',
  shortDescription: '25+ players, four maps, solo and team rounds, and a memorable final challenge.',
  description:
    'Hosted by Bibimbapqp, Ploofyz Bingo Night brought more than 25 players together for two hours of competition, teamwork, and community fun.',
  news: {
    intro: [
      'Ploofyz Bingo Night took place on 16 May 2026 from 9:30 PM to 11:30 PM, bringing more than 25 players together for a lively night of bingo, teamwork, and friendly competition.',
      'The event moved through four maps, each with its own difficulty. A solo opening round gave everyone a chance to settle in before the team matches raised the energy and the final impossible round put everyone to the test.',
      'Thank you to everyone who joined and stayed active throughout the event. The enthusiasm, teamwork, and fun moments made the night a memorable part of the Ploofyz archive.',
    ],
    stats: [
      { value: '25+', label: 'Players joined' },
      { value: '4', label: 'Maps played' },
      { value: '2 hrs', label: 'Event duration' },
    ],
    highlights: [
      'Four maps ranging from easy to an impossible final challenge.',
      'A solo opening round followed by competitive team matches.',
      'Strong participation and plenty of active community moments from start to finish.',
    ],
    thankYou: [
      'Thank you to every player who joined the event and helped make the night active, chaotic, and fun.',
      'Thank you to Bibimbapqp for hosting and guiding everyone through all four maps.',
    ],
    closing:
      'Congratulations to all of the Bingo Night winners, and thank you to everyone who helped turn the event into a Ploofyz memory worth keeping.',
  },
  article: '',
  images: pavillionMedia.bingo16may.map((src, index) => ({
    src,
    alt: `Ploofyz Bingo Night on 16 May 2026, event image ${index + 1}`,
    caption: bingoCaptions[index] ?? '',
  })),
};

