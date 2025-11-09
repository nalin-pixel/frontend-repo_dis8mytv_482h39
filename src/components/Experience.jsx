import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Lead ML Engineer',
    desc: 'Scaled generative AI systems and built real‑time analytics pipelines.',
  },
  {
    year: '2022',
    title: 'Senior Data Scientist',
    desc: 'Deployed forecasting models, uplift measurement and causal inference.',
  },
  {
    year: '2020',
    title: 'Full‑stack Developer',
    desc: 'Designed and shipped 3D web experiences with robust APIs and CI/CD.',
  },
  {
    year: '2018',
    title: 'Data Analyst',
    desc: 'Delivered interactive dashboards and automated reporting pipelines.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full scroll-mt-20 bg-[#07040f] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Experience & Skills
        </motion.h2>

        <div className="relative mt-10">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-purple-400/60" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="relative ml-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="absolute -left-8 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="text-sm text-white/60">{item.year}</div>
                <div className="mt-1 text-lg font-semibold">{item.title}</div>
                <p className="mt-2 text-white/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
