import { useMemo } from 'react';
import { ExternalLink, Cpu, Atom, FlaskConical, Satellite } from 'lucide-react';

const pillByTag = {
  Models: 'from-violet-500 to-fuchsia-500',
  Chips: 'from-amber-400 to-orange-500',
  Research: 'from-sky-500 to-cyan-500',
  Policy: 'from-emerald-500 to-teal-500',
};

const iconByTag = {
  Models: Atom,
  Chips: Cpu,
  Research: FlaskConical,
  Policy: Satellite,
};

export default function NewsGrid({ items = [], query = '', category = 'All' }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((n) => {
      const inCat = category === 'All' || n.tag === category;
      const inText = !q || n.title.toLowerCase().includes(q) || n.source.toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [items, query, category]);

  return (
    <section id="feed" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((n) => {
          const Icon = iconByTag[n.tag] ?? Atom;
          return (
            <article
              key={n.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 hover:shadow-xl hover:shadow-violet-500/10 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Icon size={14} className="text-gray-600 dark:text-gray-300" />
                      {n.tag}
                    </span>
                    <span>•</span>
                    <span>{n.time}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white leading-snug group-hover:underline decoration-2 underline-offset-4">
                    {n.title}
                  </h3>
                </div>
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${pillByTag[n.tag] ?? 'from-gray-200 to-gray-300'} opacity-80`} />
              </div>

              <p className="mt-3 text-sm text-gray-700/90 dark:text-gray-300/90 line-clamp-3">
                {n.summary}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">{n.source}</span>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400"
                >
                  Read more <ExternalLink size={16} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
