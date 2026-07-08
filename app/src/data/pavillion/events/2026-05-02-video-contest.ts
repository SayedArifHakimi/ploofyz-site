import type { PavillionEvent } from '../types';
import { pavillionMedia } from '../media.generated';

const videoContestCaptions = [
  'Video Contest Winners - First Place',
  'Video Contest Winners - Second Place',
];

export const videoContest02May2026: PavillionEvent = {
  slug: '2026-05-02-video-contest',
  title: 'Video Contest',
  category: 'Event',
  date: '2026-05-02',
  dateLabel: '02 May 2026',
  monthGroup: 'May 2026',
  updatedBy: 'Bibim',
  shortDescription: 'Winners archive for Ploofyz Video Contest.',
  article: 'The Ploofyz Video Contest brought out the best creativity from our community. Every submission showed effort, personality, and love for the server, making it difficult to choose the winners. Congratulations to all selected creators, and thank you to everyone who joined. Your videos helped capture the spirit of Ploofyz, and we cannot wait to see more from you in future events!',
  description: 'Congratulations to all Ploofyz Video Contest winners!',
  tiktokVideos: [
    {
      title: 'Video Contest - First Place',
      url: 'https://www.tiktok.com/@akwatir/video/7633029297489431829?is_from_webapp=1&sender_device=pc&web_id=7637925563063125524',
    },
    {
      title: 'Video Contest - Second Place',
      url: 'https://www.tiktok.com/@4ryx120px/video/7631651218586225928?is_from_webapp=1&sender_device=pc&web_id=7637925563063125524',
    },
    {
      title: 'Video Contest - Third Place',
      url: 'https://www.tiktok.com/@ichxla/video/7634953316048424213?is_from_webapp=1&sender_device=pc&web_id=7637925563063125524',
    },
  ],
  images: pavillionMedia.video02may.map((src, index) => ({
    src,
    alt: `Ploofyz Video Contest winners image ${index + 1}`,
    caption: videoContestCaptions[index] ?? '',
  })),
};
