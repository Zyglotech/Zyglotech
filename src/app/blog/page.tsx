import { PageShell } from '@/components/PageShell';

export default function BlogPage() {
  return (
    <PageShell
      title="Blog & Insights"
      description="AI news, product strategy, automation tutorials, and growth content for startups and enterprise teams." 
      cta={{ label: 'Read Latest', href: '/blog' }}
    />
  );
}
