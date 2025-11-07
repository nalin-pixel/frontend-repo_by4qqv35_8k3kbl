import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent"
          >
            AI & Silicon News — Curated, realtime, beautiful.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-4 text-lg sm:text-xl text-gray-700/90 dark:text-gray-200/90 max-w-xl"
          >
            Stay ahead with a high-signal feed of breakthroughs across models, chips, research, and products — designed to feel premium, fast, and alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#feed"
              className="rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition"
            >
              Explore Latest
            </a>
            <a
              href="#highlights"
              className="rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-white px-5 py-3 text-sm font-semibold hover:bg-gray-50/80 dark:hover:bg-white/10 transition"
            >
              Weekly Highlights
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/0 dark:from-black/70 dark:via-black/30 dark:to-black/0" />
    </section>
  );
}
