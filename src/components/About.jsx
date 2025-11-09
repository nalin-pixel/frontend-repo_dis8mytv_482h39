import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, LineChart, Palette } from 'lucide-react';

const skills = [
  { label: 'AI', icon: Brain, color: 'from-cyan-400 to-blue-500' },
  { label: 'Data', icon: LineChart, color: 'from-purple-400 to-fuchsia-500' },
  { label: 'Design', icon: Palette, color: 'from-pink-400 to-purple-500' },
  { label: 'Code', icon: Code, color: 'from-emerald-400 to-cyan-500' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-[#07040f] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-white/80"
        >
          I build data-driven products that look beautiful and think intelligently. With a foundation across analytics, machine learning, and full‑stack development, I translate complex problems into meaningful, interactive experiences.
        </motion.p>

        {/* Interactive rotating spheres */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-md"
            >
              <div className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white shadow-lg shadow-cyan-500/20 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105`}>
                <Icon className="h-10 w-10" />
              </div>
              <div className="mt-4 text-center text-lg font-semibold">{label}</div>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl transition-opacity group-hover:opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
