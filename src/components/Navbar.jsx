import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-lg">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">MIMAC</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="hover:text-indigo-600 transition-colors">Work</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity">
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
