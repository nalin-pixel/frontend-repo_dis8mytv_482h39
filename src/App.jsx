import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Moon, Sun, Menu } from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-[#05030a] font-inter text-white">
      {/* Top Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/80">AQ</a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => setOpen((v) => !v)} className="sm:hidden rounded-md border border-white/10 bg-white/5 p-2 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="sm:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4 text-sm text-white/80">
              <a onClick={() => setOpen(false)} href="#about" className="rounded-md bg-white/5 px-3 py-2">About</a>
              <a onClick={() => setOpen(false)} href="#projects" className="rounded-md bg-white/5 px-3 py-2">Projects</a>
              <a onClick={() => setOpen(false)} href="#experience" className="rounded-md bg-white/5 px-3 py-2">Experience</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-md bg-white/5 px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/30 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Alex Quantum — Built with love for data and design.
      </footer>
    </div>
  );
};

export default App;
