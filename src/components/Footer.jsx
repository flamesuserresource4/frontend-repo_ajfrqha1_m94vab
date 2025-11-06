export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} MIMAC — All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-indigo-600">Twitter</a>
          <a href="#" className="hover:text-indigo-600">Dribbble</a>
          <a href="#" className="hover:text-indigo-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
