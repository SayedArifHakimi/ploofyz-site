export type PavillionEventCategory =
  | 'Event'
  | 'Appreciation'
  | 'Occasion'
  | 'Celebration'
  | 'Announcement';

export type PavillionEventImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type PavillionTikTokVideo = {
  title: string;
  url: string;
};

export type PavillionEvent = {
  slug: string;
  title: string;
  category: PavillionEventCategory;
  date: string; // YYYY-MM-DD
  dateLabel: string;
  monthGroup: string;
  updatedBy: string;
  shortDescription: string;
  description: string;
  tiktokVideos?: PavillionTikTokVideo[];
  images: PavillionEventImage[];
  article: string;
};