

// import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Showcase from './components/Showcase';
import References from './components/References';
import WhatsAppBubble from './components/WhatsAppBubble';
import Certifications from './components/Certifications';


function App() {
  return (
    <div className="bg-darkBg min-h-screen">
      <Navbar />
      <main>
        {/* <Hero /> */}
        <About />
          <Showcase />
        <Skills />
        <Certifications />
        <Projects />
        <References />
        <Contact />
      
      </main>
      
      {/* Footer simple */}
      <footer className="py-10 text-center text-gray-600 border-t border-gray-900 font-mono text-sm">
        <p>© 2026 HOUNGBENOU Nouwassè Frejus | Tous drroits réservés</p>
      </footer>
      <WhatsAppBubble />
    </div>
  );
}

export default App;