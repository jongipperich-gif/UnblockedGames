
import React from 'react';

const GameCard = ({ game, onClick }) => {
  return (
    <div 
      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:ring-2 hover:ring-blue-500"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {game.isFeatured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Featured
          </div>
        )}
      </div>
      <div className="p-4 bg-gradient-to-t from-slate-900 to-slate-800">
        <div className="text-xs font-semibold text-blue-400 mb-1 uppercase tracking-widest">{game.category}</div>
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors truncate">{game.title}</h3>
        <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default GameCard;
