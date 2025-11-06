export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something inspiring</h2>
        <p className="mt-3 text-black/70 dark:text-white/70">Available for freelance and collaborations. Share a bit about your project and timeline.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-10 grid grid-cols-1 gap-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-black/60 dark:text-white/60">Name</label>
              <input className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-2 outline-none focus:ring-2 ring-black/10 dark:ring-white/10" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-black/60 dark:text-white/60">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-2 outline-none focus:ring-2 ring-black/10 dark:ring-white/10" placeholder="you@domain.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-black/60 dark:text-white/60">Project details</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-2 outline-none focus:ring-2 ring-black/10 dark:ring-white/10" placeholder="Tell me about your idea..." />
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90 transition">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
