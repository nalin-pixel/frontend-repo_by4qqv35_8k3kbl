import { motion } from 'framer-motion';
import { Star, TrendingUp, Zap } from 'lucide-react';

export default function Highlights({ items = [] }) {
  return (
    <section id="highlights" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-violet-500/5 to-white/0 dark:from-black/0 dark:via-violet-500/10 dark:to-black/0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Weekly Highlights</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">A curated set of moments that defined the week in AI.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <TrendingUp size={18} /> Signal over noise
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Star size={14} className="text-yellow-500" />
                    {item.tag}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
                <Zap className="text-violet-500" />
              </div>
              <p className="mt-3 text-sm text-gray-700/90 dark:text-gray-300/90 line-clamp-4">
                {item.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
