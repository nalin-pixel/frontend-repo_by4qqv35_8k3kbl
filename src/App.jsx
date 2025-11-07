import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import NewsGrid from './components/NewsGrid';

function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['Models', 'Chips', 'Research', 'Policy'];

  // Demo content. In a full build this would be fetched from an API.
  const news = useMemo(
    () => [
      {
        id: '1',
        tag: 'Models',
        title: 'Open multimodal model reaches real-time speech + vision parity',
        time: '2m ago',
        source: 'ModelScope',
        url: 'https://example.com/a',
        summary:
          'A new open model demonstrates near real-time voice and vision grounding with chain-of-audio reasoning and improved safety alignment.',
      },
      {
        id: '2',
        tag: 'Chips',
        title: 'Next-gen 3nm AI accelerator promises 2.4x efficiency',
        time: '12m ago',
        source: 'Silicon Daily',
        url: 'https://example.com/b',
        summary:
          'A custom NPU with stacked SRAM and optical IO achieves major perf/W gains, enabling on-device frontier models for mobile and edge.',
      },
      {
        id: '3',
        tag: 'Research',
        title: 'Self-refine agents hit new benchmark on autonomous coding tasks',
        time: '19m ago',
        source: 'ArXiv',
        url: 'https://example.com/c',
        summary:
          'Paper introduces reflective memory with curriculum gradients, boosting long-horizon tool use by 17% on open benchmarks.',
      },
      {
        id: '4',
        tag: 'Policy',
        title: 'Global compute registry proposal gains traction among labs',
        time: '34m ago',
        source: 'Policy Watch',
        url: 'https://example.com/d',
        summary:
          'Major AI labs and cloud providers endorse a shared framework for transparency on training runs and frontier model capability thresholds.',
      },
      {
        id: '5',
        tag: 'Models',
        title: 'Lightweight speech-to-speech model runs offline on consumer GPUs',
        time: '58m ago',
        source: 'VoiceTech',
        url: 'https://example.com/e',
        summary:
          'New S2S architecture reduces latency with monotonic alignment and dynamic voice cloning for real-time assistants.',
      },
      {
        id: '6',
        tag: 'Chips',
        title: 'HBM4 roadmap unveiled with 1.2TB/s per stack throughput',
        time: '1h ago',
        source: 'SemiAnalytics',
        url: 'https://example.com/f',
        summary:
          'Vendors preview denser packaging and liquid-cooled modules designed for 1,000+ GPU training clusters.',
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      {
        id: 'h1',
        tag: 'Breakthrough',
        title: 'End-to-end speech agents reach natural latency on consumer hardware.',
        summary:
          'Experiments show robust barge-in, emotion control, and safety filters that preserve responsiveness even under packet loss.',
      },
      {
        id: 'h2',
        tag: 'Ecosystem',
        title: 'Open tool catalogs improve agent reliability across eval suites.',
        summary:
          'Shared adapters and deterministic execution layers reduce silent failures on long chains by 23% in community benchmarks.',
      },
      {
        id: 'h3',
        tag: 'Infra',
        title: 'Energy-aware schedulers cut training costs without hurting throughput.',
        summary:
          'Dynamic power capping and thermal-aware placement lower peak draw, enabling denser racks and greener large-scale runs.',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Subtle global background */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.08),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(236,72,153,0.06),transparent_60%),radial-gradient(40%_40%_at_20%_80%,rgba(251,191,36,0.06),transparent_60%)]" />

      <Navbar
        onSearch={setQuery}
        onCategoryChange={(c) => setCategory(c)}
        categories={categories}
        activeCategory={category}
      />

      <Hero />

      <main className="space-y-10">
        <Highlights items={highlights} />
        <NewsGrid items={news} query={query} category={category} />
      </main>

      <footer className="border-t border-gray-200/70 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} AINews — crafted for clarity and speed.</p>
          <div className="text-sm text-gray-600 dark:text-gray-400">Built with love for AI and silicon enthusiasts.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
