
export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  iframeUrl: string;
  isFeatured?: boolean;
}

export type Category = 'All' | 'Action' | 'Puzzle' | 'Sports' | 'Retro' | 'Casual';
