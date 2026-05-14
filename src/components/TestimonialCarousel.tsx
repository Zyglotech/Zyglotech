'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Zyglo helped us launch a WhatsApp funnel that doubled inbound leads in 6 weeks.',
    author: 'Priya, Restaurant Chain',
    role: 'Operations Head',
  },
  {
    quote: 'The ERP platform transformed our clinic workflow and improved patient follow-up by 85%.',
    author: 'Ramesh, Healthcare Founder',
    role: 'Founder & CEO',
  },
  {
    quote: 'I completed the AI bootcamp and secured a product role in three months.',
    author: 'Ananya, Student',
    role: 'AI Learner',
  },
];

export function TestimonialCarousel() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <motion.div
          key={item.author}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-panel backdrop-blur-xl"
        >
          <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
          <div className="mt-8">
            <p className="font-semibold text-white">{item.author}</p>
            <p className="mt-2 text-sm text-slate-400">{item.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
