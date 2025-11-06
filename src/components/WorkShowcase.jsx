const projects = [
  {
    title: 'Meta Morph',
    tag: 'Interactive 3D',
    description: 'A playful 3D landing with physics-based interactions and rich motion design.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse UI',
    tag: 'Design System',
    description: 'A modular component library with tokens, themes, and delightful micro-interactions.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nova Lab',
    tag: 'Brand + Site',
    description: 'Minimal brand system paired with a fast, immersive marketing site.',
    image: 'https://images.unsplash.com/photo-1705727210721-961cc64a6895?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhJTIwTGFifGVufDB8MHx8fDE3NjI0MjgzMzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-2 text-black/60 dark:text-white/60 max-w-xl">A mix of branded sites, interactive experiments, and production UI systems shipped for startups and creators.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">All projects</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 hover:shadow-xl transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">{p.tag}</div>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
