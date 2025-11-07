import { useState } from 'react';
import { Search, Sparkles, Globe } from 'lucide-react';

export default function Navbar({ onSearch, onCategoryChange, categories = [], activeCategory }) {
  const [query, setQuery] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-violet-500/30">
              <Sparkles className="text-white" size={20} />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                AINews
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <Globe size={14} /> Live
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Latest AI & silicon breakthroughs</p>
            </div>
          </div>

          <form onSubmit={submit} className="flex-1 flex justify-end">
            <div className="relative w-full max-w-xs">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search AI news..."
                className="w-full rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500/50 text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>
          </form>
        </div>

        <nav className="flex items-center gap-2 pb-4 overflow-x-auto">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange?.(cat)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-all border ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black border-transparent'
                  : 'bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200/70 dark:border-white/10 hover:bg-gray-50/80 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
