'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Academy', href: '/academy' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold tracking-[0.01em] text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400/20 to-violet-500/15 text-cyan-300 ring-1 ring-cyan-300/20">Z</span>
          <span className="text-white">Zyglo Tech</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/demo" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:opacity-90">
            Book Free Demo
          </Link>
        </div>

        <button className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/90 p-3 text-slate-200 transition hover:bg-slate-800 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 p-5 md:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-cyan-500/10">
                {item.label}
              </Link>
            ))}
            <Link href="/demo" className="block rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-sm font-semibold text-slate-950 text-center transition hover:opacity-95">
              Book Free Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
