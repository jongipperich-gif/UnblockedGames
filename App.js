
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar.js';
import GameCard from './components/GameCard.js';
import GameView from './components/GameView.js';
import { GAMES_DATA, CATEGORIES } from './constants.js';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredGames = useMemo(() => {
    return GAMES_DATA.filter(g => g.isFeatured).slice(0, 3);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pb-12">
      <Navbar 
        onHomeClick={() => {
          setSelectedGame(null);
          setActiveCategory('All');
          setSearchQuery('');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {!selectedGame && (
          <>
            {/* Hero Section / Featured */}
            {!searchQuery && activeCategory === 'All' && (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-gaming font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    Featured Games
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredGames.map(game => (
                    <div 
                      key={`featured-${game.id}`}
                      className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
                      onClick={() => setSelectedGame(game)}
                    >
                      <img 
                        src={game.thumbnail} 
                        alt={game.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block">TRENDING</span>
                        <h3 className="text-2xl font-bold text-white mb-1">{game.title}</h3>
                        <p className="text-slate-300 text-sm line-clamp-1">{game.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Category Filter */}
            <section className="mb-8 overflow-x-auto">
              <div className="flex items-center gap-3 py-2 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            {/* Game Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-gaming font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                  {activeCategory === 'All' ? 'All Games' : `${activeCategory} Games`}
                  <span className="text-sm font-normal text-slate-500 ml-2 font-sans">({filteredGames.length} found)</span>
                </h2>
              </div>
              
              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard 
                      key={game.id} 
                      game={game} 
                      onClick={setSelectedGame} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-slate-900/50 rounded-3xl border border-dashed border-slate-700">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400">No games found</h3>
                  <p className="text-slate-500 mt-2">Try a different category or search term.</p>
                </div>
              )}
            </section>
          </>
        )}

        {selectedGame && (
          <GameView game={selectedGame} onClose={() => setSelectedGame(null)} />
        )}
      </main>

      <footer className="mt-12 border-t border-slate-800 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-gaming font-bold text-slate-100 uppercase tracking-widest text-sm">NOVAARCADE</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NovaArcade. For educational and entertainment purposes only.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
