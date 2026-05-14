import Link from 'next/link';

interface PageShellProps {
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

export function PageShell({ title, description, cta }: PageShellProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-10 shadow-panel backdrop-blur-xl">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Zyglo Tech Enterprise</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          {cta ? (
            <Link href={cta.href} className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
