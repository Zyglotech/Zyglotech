import { PageShell } from '@/components/PageShell';

export default function AboutPage() {
  return (
    <PageShell
      title="About Zyglo Tech Enterprise"
      description="We build premium AI, ERP, SaaS, and academy experiences from Chennai with a focus on automation, trust, and modern design."
      cta={{ label: 'Book a Demo', href: '/demo' }}
    />
  );
}
