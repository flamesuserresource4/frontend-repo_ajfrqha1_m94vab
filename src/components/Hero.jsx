import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80 dark:from-neutral-950/40 dark:via-neutral-950/10 dark:to-neutral-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-6 pt-40 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs md:text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Now booking projects for Q4
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
          Building playful, modern experiences for the web.
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-black/70 dark:text-white/70">
          I craft interactive portfolios, product sites, and creative tools with a focus on motion, clarity, and joy.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="px-5 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90 transition">See work</a>
          <a href="#contact" className="px-5 py-3 rounded-full border border-black/10 dark:border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur font-medium hover:bg-white hover:dark:bg-neutral-800 transition">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
