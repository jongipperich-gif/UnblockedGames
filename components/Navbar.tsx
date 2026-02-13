import React from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, searchQuery, onSearchChange }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onHomeClick}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-gaming font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            NOVAARCADE
          </h1>
        </div>

        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search for games..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-slate-200 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-2.5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="hidden md:flex items-center gap-6 font-medium text-slate-400">
          <button onClick={onHomeClick} className="hover:text-blue-400 transition-colors">Games</button>
          <a href="#" className="hover:text-blue-400 transition-colors">Discord</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;