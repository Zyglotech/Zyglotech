import { PageShell } from '@/components/PageShell';

export default function DemoPage() {
  return (
    <PageShell
      title="Book Your AI Demo"
      description="Schedule a free demo to see how AI chatbots, WhatsApp automation, and ERP systems can transform your organization." 
      cta={{ label: 'Schedule Demo', href: '/contact' }}
    />
  );
}
