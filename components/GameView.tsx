
import React, { useState } from 'react';
import { Game } from '../types';

// Define interface for GameView props
interface GameViewProps {
  game: Game;
  onClose: () => void;
}

const GameView: React.FC<GameViewProps> = ({ game, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    // Cast to HTMLIFrameElement for better type safety with Fullscreen API
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      if (!isFullScreen) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col">
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            title="Back to menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h2 className="text-xl font-bold text-slate-100 font-gaming">{game.title}</h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest">{game.category} Game</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleFullScreen}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-lg text-sm font-semibold transition-all border border-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Fullscreen
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/40 transition-all"
          >
            Close Game
          </button>
        </div>
      </div>

      <div className="flex-grow bg-slate-900 relative">
        <iframe
          id="game-iframe"
          src={game.iframeUrl}
          title={game.title}
          className="w-full h-full border-none"
          allowFullScreen
          allow="autoplay; fullscreen; pointer-lock"
        />
      </div>

      <div className="bg-slate-900 border-t border-slate-800 p-4 text-center">
        <p className="text-slate-500 text-sm">
          Playing <span className="text-blue-400 font-semibold">{game.title}</span>. Enjoy your gaming session!
        </p>
      </div>
    </div>
  );
};

export default GameView;