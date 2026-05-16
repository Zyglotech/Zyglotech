'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Bolt, Cloud, Cpu, GraduationCap, Sparkles, TrendingUp, Globe, ShieldCheck, Users } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';

const trustBadges = [
  'Enterprise-ready',
  'AI-first architecture',
  'Chennai HQ',
  'Rapid go-live',
];

const featureCards = [
  { title: 'AI Chatbots', description: 'Conversational funnels for leads, support and automated workflows.', icon: Cloud },
  { title: 'ERP Platforms', description: 'Unified finance, inventory, CRM and billing in one secure dashboard.', icon: Cpu },
  { title: 'Automation Systems', description: 'End-to-end processes built for speed, intelligence and scale.', icon: Sparkles },
  { title: 'Corporate Training', description: 'Upskill teams with AI, product and automation learning paths.', icon: GraduationCap },
];

const ecosystem = [
  { title: 'Salesforce-grade automation', value: '82%', description: 'Boost sales velocity with WhatsApp-first lead capture.', icon: TrendingUp },
  { title: 'Enterprise analytics', value: '24/7', description: 'Real-time ERP dashboards with actionable operational insights.', icon: ShieldCheck },
  { title: 'Student outcomes', value: '1.2K+', description: 'Learners trained for AI careers with live mentorship.', icon: Users },
  { title: 'Global launchpad', value: '35+', description: 'SaaS products, bots and academy systems shipped worldwide.', icon: Globe },
];

const faqItems = [
  { question: 'Can Zyglo build a WhatsApp automation flow for my business?', answer: 'Yes. We design and deploy WhatsApp-first journeys for chatbots, bookings, lead capture and customer support.' },
  { question: 'How fast can the ERP platform go live?', answer: 'Our rapid-launch approach delivers MVP ERP setups within weeks, with enterprise-grade scalability built in.' },
  { question: 'Does Zyglo provide training for teams and students?', answer: 'Absolutely — we offer instructor-led AI courses, bootcamps, certifications and corporate workshops.' },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-12 pb-28 sm:pt-16">
        <div className="absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%)] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-[340px] bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_28%)] opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] xl:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Enterprise AI Platforms with measurable ROI
              </div>
              <div className="flex items-center gap-4 rounded-[2rem] border border-white/10 bg-slate-950/90 px-4 py-3 shadow-soft">
                <div className="relative h-12 w-12 overflow-hidden rounded-3xl bg-slate-900/80 ring-1 ring-white/10">
                  <Image src="/zyglo-logo.svg" alt="Zyglo logo" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Zyglo Tech Enterprise</p>
                  <p className="text-sm text-slate-400">Brand identity aligned with your world-class product</p>
                </div>
              </div>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Premium AI, ERP, automation and academy systems for world-class businesses.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Zyglo Tech designs high-performance digital products that unify customer journeys, operations, and learning into a single enterprise platform.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="/demo" className="btn-primary">
                  Book a strategy call
                </a>
                <a href="/services" className="btn-secondary">
                  Explore services
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:max-w-xl">
                {trustBadges.map((badge) => (
                  <div key={badge} className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-200 shadow-glow">
                    <p className="font-semibold text-white">{badge}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto max-w-xl">
              <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400/25 to-violet-500/0 blur-3xl" />
              <div className="absolute -right-16 top-32 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-300/0 blur-3xl" />
              <div className="glass-card overflow-hidden border-white/10">
                <div className="relative rounded-[2rem] bg-slate-950/95 p-6 shadow-panel">
                  <div className="flex items-center justify-between gap-4 rounded-[1.75rem] bg-slate-900/95 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">AI Operations</p>
                      <p className="mt-2 text-sm text-slate-300">Intelligent workflows driving execution.</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">Live</div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-slate-900/95 p-5">
                      <p className="text-sm text-slate-400">Automation uptime</p>
                      <p className="mt-3 text-3xl font-semibold text-white">99.9%</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-slate-900/95 p-5">
                      <p className="text-sm text-slate-400">Active pipelines</p>
                      <p className="mt-3 text-3xl font-semibold text-white">24/7</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] bg-gradient-to-br from-slate-900/95 to-slate-800/70 p-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>Realtime dashboard</span>
                      <span className="text-cyan-300">Updated now</span>
                    </div>
                    <div className="mt-6 h-40 overflow-hidden rounded-[1.5rem] bg-slate-950/95 p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-24 rounded-full bg-cyan-400/50" />
                        <div className="h-3 w-16 rounded-full bg-blue-400/40" />
                      </div>
                      <div className="mt-6 h-24 rounded-[1.5rem] bg-gradient-to-br from-cyan-400/10 to-violet-500/0 p-4">
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="mt-5 h-2 rounded-full bg-cyan-300/70" style={{ width: '54%' }} />
                        <div className="mt-3 h-2 rounded-full bg-violet-300/40" style={{ width: '32%' }} />
                        <div className="mt-3 h-2 rounded-full bg-cyan-200/40" style={{ width: '76%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {featureCards.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card border-white/10 p-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  <span>Discover</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">AI Solutions Ecosystem</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A premium product experience built for modern enterprise teams.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Multi-modal AI, automation, ERP and academy features combined into one platform designed to accelerate business outcomes.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {ecosystem.map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-200">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/0 blur-3xl" />
              <div className="glass-card overflow-hidden border-white/10 p-6">
                <div className="flex items-center justify-between gap-4 rounded-[1.75rem] bg-slate-900/95 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Product showcase</p>
                    <p className="mt-2 text-lg font-semibold text-white">Analytics command center</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs text-slate-300">Live</div>
                </div>
                <div className="mt-6 space-y-5">
                  <div className="rounded-[1.75rem] bg-slate-950/90 p-5">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>Revenue</span>
                      <span className="text-cyan-300">+24%</span>
                    </div>
                    <div className="mt-4 h-36 rounded-[1.5rem] bg-gradient-to-b from-cyan-400/10 to-transparent p-4">
                      <div className="h-2 w-full rounded-full bg-white/10" />
                      <div className="mt-4 h-2 w-5/6 rounded-full bg-cyan-300/70" />
                      <div className="mt-3 h-2 w-4/6 rounded-full bg-violet-300/50" />
                      <div className="mt-3 h-2 w-3/6 rounded-full bg-cyan-200/40" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-slate-950/90 p-5 text-slate-200">
                      <p className="text-sm text-slate-400">Chatbot engagement</p>
                      <p className="mt-3 text-xl font-semibold text-white">+48%</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-slate-950/90 p-5 text-slate-200">
                      <p className="text-sm text-slate-400">Deployment speed</p>
                      <p className="mt-3 text-xl font-semibold text-white">2x faster</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] xl:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Chatbot experience</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A fast, immersive WhatsApp and dashboard preview for modern sales motion.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Showcase your automation flow with real-time messages, quick replies, and AI conversation previews designed to convert leads instantly.
              </p>
            </div>
            <div className="glass-card overflow-hidden border-white/10 p-6">
              <div className="rounded-[1.75rem] bg-slate-950/95 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>WhatsApp automation demo</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">Live preview</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-200">
                    <p className="text-sm text-cyan-300">Zyglo Bot</p>
                    <p className="mt-3 text-base leading-7">Hello! I can help map your customer journey and automate follow-ups via WhatsApp.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-200">
                    <p className="text-sm text-slate-400">User</p>
                    <p className="mt-3 text-base leading-7 text-white">I want an automated quote flow for my real estate listings.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-200">
                    <p className="text-sm text-cyan-300">Zyglo Bot</p>
                    <p className="mt-3 text-base leading-7">Your flow is ready. I can send property previews, collect leads, and schedule walkthroughs instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="glass-card border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">ERP preview</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Enterprise dashboards with finance, inventory, and operations in one place.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                Designed for modern teams that need transparent metrics, faster approvals, and fewer manual handoffs.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-900/95 p-6">
                  <p className="text-sm text-slate-400">Inventory health</p>
                  <p className="mt-3 text-3xl font-semibold text-white">94%</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-900/95 p-6">
                  <p className="text-sm text-slate-400">Invoice accuracy</p>
                  <p className="mt-3 text-3xl font-semibold text-white">99.2%</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-panel backdrop-blur-xl">
              <div className="absolute -left-10 top-14 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="rounded-[1.75rem] bg-slate-900/95 p-6">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Revenue dashboard</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em]">Analytics</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="h-48 rounded-[1.75rem] bg-gradient-to-br from-cyan-300/10 to-violet-500/0 p-4">
                    <div className="h-2 rounded-full bg-white/10" />
                    <div className="mt-5 h-2 w-5/6 rounded-full bg-cyan-400/70" />
                    <div className="mt-3 h-2 w-4/6 rounded-full bg-violet-400/50" />
                    <div className="mt-3 h-2 w-3/6 rounded-full bg-cyan-200/40" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-slate-950/90 p-4 text-slate-300">
                      <p className="text-sm">Open orders</p>
                      <p className="mt-3 text-xl font-semibold text-white">38</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-950/90 p-4 text-slate-300">
                      <p className="text-sm">Active customers</p>
                      <p className="mt-3 text-xl font-semibold text-white">520</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Workflow design</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Automation workflows created for enterprise velocity.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                From discovery to deployment, our launch-ready approach delivers speed, clarity, and measurable outcomes.
              </p>
            </div>
            <div className="grid gap-4">
              {['Discovery & strategy', 'Prototype and automation build', 'Integration & testing', 'Launch and scaling'].map((step, index) => (
                <div key={step} className="group rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/20">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Our team crafts every phase with precision so your AI platform launches confidently.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Founder story</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Chennai founders building the next AI SaaS platform.
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-panel backdrop-blur-xl">
              <p className="text-base leading-8 text-slate-300">Zyglo Tech Enterprise was founded by Vignesh and Gokul Raaj SS to bring AI automation, enterprise-grade SaaS, and training under one trusted platform for businesses in India and overseas.</p>
              <div className="mt-10 grid gap-5">
                <div className="rounded-3xl bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Vignesh</p>
                  <p className="mt-3 text-lg font-semibold text-white">CEO</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Building business-ready AI products with clarity, speed, and execution.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Gokul Raaj SS</p>
                  <p className="mt-3 text-lg font-semibold text-white">CTO</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Leading product engineering for scalable automation and AI systems.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 p-8 shadow-panel">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Mission</p>
                <p className="mt-4 text-2xl font-semibold text-white">Make enterprise AI accessible, premium, and scalable.</p>
              </div>
              <div className="rounded-[2rem] bg-slate-950/90 p-8 shadow-panel">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Vision</p>
                <p className="mt-4 text-2xl font-semibold text-white">Empower businesses and learners with intelligent automation that feels effortless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Trusted by Chennai businesses and global learners.
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] xl:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Pricing preview</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Flexible premium plans for startups, growth teams, and enterprise implementations.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Starter', price: '₹49K', description: 'AI bot launch for early growth.' },
                { title: 'Growth', price: '₹99K', description: 'WhatsApp automation and ERP kickoff.' },
                { title: 'Pro', price: 'Custom', description: 'Enterprise automation, LMS, and analytics.' },
              ].map((plan) => (
                <div key={plan.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-slate-200 shadow-glow">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{plan.title}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{plan.price}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">FAQs</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Questions that enterprise leaders ask first.
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 transition hover:border-cyan-400/25">
                  <summary className="cursor-pointer text-lg font-semibold text-white">{item.question}</summary>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/90 px-6 py-16 shadow-panel backdrop-blur-xl sm:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Ready to build smarter?</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Launch AI, ERP, and academy experiences with confidence.</h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="/demo" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95">Book Demo</a>
            <a href="https://wa.me/919000000000" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-300">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
