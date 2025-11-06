import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
