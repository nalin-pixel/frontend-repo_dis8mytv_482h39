import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 900);
  };

  return (
    <section id="contact" className="relative w-full scroll-mt-20 bg-[#05030a] py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Get In Touch
        </motion.h2>
        <p className="mt-3 text-white/75">Open to collaborations, freelance work, and full‑time opportunities.</p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
        >
          <input
            required
            placeholder="Name"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
          />
          <textarea
            required
            placeholder="Message"
            rows={5}
            className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-white/70">{status}</p>}
          </div>
        </motion.form>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="mailto:hello@alexquantum.dev" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
