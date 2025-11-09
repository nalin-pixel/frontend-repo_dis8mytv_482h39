import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Predictive Analytics Dashboard',
    tags: ['Python', 'Dash', 'Forecasting'],
    description: 'End-to-end data pipelines with interactive forecasting and anomaly detection.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Realtime ML Inference API',
    tags: ['FastAPI', 'MLOps', 'Docker'],
    description: 'Low-latency model serving with A/B testing and monitoring.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Web Experience',
    tags: ['Three.js', 'React', 'Design'],
    description: 'Immersive interactive visuals with physics‑driven micro‑interactions.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Generative UI System',
    tags: ['Next.js', 'LLMs', 'Figma'],
    description: 'Design‑to‑code pipeline with components generated from prompts.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-[#05030a] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/60" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
