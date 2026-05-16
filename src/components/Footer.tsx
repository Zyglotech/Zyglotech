import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Academy', href: '/academy' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-6 py-20 text-slate-300 backdrop-blur-3xl sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="relative h-12 w-12 overflow-hidden rounded-3xl bg-slate-900/90 ring-1 ring-cyan-300/20">
              <Image src="/zyglo-logo.svg" alt="Zyglo logo" fill className="object-contain" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Zyglo Tech Enterprise</p>
              <p className="text-sm text-slate-400">Enterprise AI, automation & SaaS systems.</p>
            </div>
          </div>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            A premium technology partner delivering AI-driven products, workflows and learning ecosystems for ambitious companies.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Email</p>
              <p className="mt-3 text-sm text-slate-300">hello@zyglo.tech</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Phone</p>
              <p className="mt-3 text-sm text-slate-300">+91 90000 00000</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Explore</p>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href as any} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <div className="mt-5 flex items-center gap-3 text-slate-300">
              <Link href="https://twitter.com" aria-label="Twitter" className="transition hover:text-white"><Twitter className="h-5 w-5" /></Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin className="h-5 w-5" /></Link>
              <Link href="mailto:hello@zyglo.tech" aria-label="Email" className="transition hover:text-white"><Mail className="h-5 w-5" /></Link>
            </div>
            <div className="mt-6 rounded-[1.75rem] bg-slate-900/85 p-4 text-sm text-slate-400">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Chennai, India</p>
              <p className="mt-3 flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp-first conversions available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        <p>Copyright © 2026 Zyglo Tech Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
}
