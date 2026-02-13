
import { Game } from './types';

export const CATEGORIES = ['All', 'Action', 'Puzzle', 'Sports', 'Retro', 'Casual'];

// Adding explicit Game[] type for better TypeScript inference
export const GAMES_DATA: Game[] = [
  {
    id: 'pacman',
    title: 'Pac-Man Classic',
    description: 'The legendary arcade game where you eat dots and avoid ghosts.',
    category: 'Retro',
    thumbnail: 'https://picsum.photos/seed/pacman/400/225',
    iframeUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    isFeatured: true
  },
  {
    id: 'snake',
    title: 'Google Snake',
    description: 'Navigate your snake to eat apples and grow longer without hitting walls.',
    category: 'Casual',
    thumbnail: 'https://picsum.photos/seed/snake/400/225',
    iframeUrl: 'https://www.google.com/logos/2010/snake10-i.html',
    isFeatured: true
  },
  {
    id: '2048',
    title: '2048',
    description: 'Slide tiles and merge numbers to reach the elusive 2048 tile.',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/seed/2048/400/225',
    iframeUrl: 'https://play2048.co/',
    isFeatured: false
  },
  {
    id: 'tetris',
    title: 'Tetris Web',
    description: 'Stack blocks and clear lines in this timeless puzzle masterpiece.',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/seed/tetris/400/225',
    iframeUrl: 'https://tetris.com/play-tetris',
    isFeatured: true
  },
  {
    id: 'flappy',
    title: 'Flappy Bird Clone',
    description: 'Test your reflexes by navigating through pipes.',
    category: 'Action',
    thumbnail: 'https://picsum.photos/seed/flappy/400/225',
    iframeUrl: 'https://flappybird.io/',
    isFeatured: false
  },
  {
    id: 'slope',
    title: 'Slope Game',
    description: 'Fast-paced ball rolling game that tests your speed and precision.',
    category: 'Action',
    thumbnail: 'https://picsum.photos/seed/slope/400/225',
    iframeUrl: 'https://krunker.io/',
    isFeatured: true
  },
  {
    id: 'retro-racing',
    title: 'Drift Hunters',
    description: 'High-speed drifting simulator with customizable cars.',
    category: 'Sports',
    thumbnail: 'https://picsum.photos/seed/racing/400/225',
    iframeUrl: 'https://v6p9d9t4.ssl.hwcdn.net/html/1453258/index.html',
    isFeatured: false
  },
  {
    id: 'solitaire',
    title: 'Classic Solitaire',
    description: 'The standard card game for relaxing and clearing your mind.',
    category: 'Casual',
    thumbnail: 'https://picsum.photos/seed/solitaire/400/225',
    iframeUrl: 'https://www.google.com/logos/2011/solitaire.html',
    isFeatured: false
  }
];