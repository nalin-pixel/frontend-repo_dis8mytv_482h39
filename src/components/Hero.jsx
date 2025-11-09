import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const sceneRef = useRef(null);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[radial-gradient(100%_100%_at_50%_0%,rgba(64,0,128,0.35),rgba(0,0,0,0)_60%),linear-gradient(180deg,#05030a, #05030a)] text-white">
      {/* 3D Spline Scene */}
      <div ref={sceneRef} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for neon vibe (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-600/30 via-fuchsia-400/20 to-cyan-400/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Quantum
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            Data Analyst • Data Scientist • ML Engineer • Web Developer • Web Designer
          </p>
          <p className="mt-3 text-base text-white/70">
            I craft intelligent, interactive experiences at the intersection of data and design.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#about"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10"
            >
              About Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 flex flex-col items-center text-white/60"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="mt-1 h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
