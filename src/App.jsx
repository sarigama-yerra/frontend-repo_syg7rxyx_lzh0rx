import Hero from './components/Hero';
import Who from './components/Who';
import What from './components/What';
import How from './components/How';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white">
      {/* global background gradient */}
      <div className="fixed inset-0 -z-[1] bg-[radial-gradient(circle_at_20%_-10%,rgba(139,125,255,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(190,191,255,0.18),transparent_40%)]" />

      <Hero />
      <Who />
      <What />
      <How />
      <Integrations />
      <Pricing />
      <FAQ />
      <Contact />

      <footer className="py-10 border-t border-white/10 text-center text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>
        © {new Date().getFullYear()} NIMIRA — Automazioni per la sanità privata
      </footer>
    </div>
  );
}

export default App;
