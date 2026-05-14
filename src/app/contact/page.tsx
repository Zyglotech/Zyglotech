import { PageShell } from '@/components/PageShell';

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Zyglo Tech"
      description="Talk to our Chennai team about AI chatbots, ERP systems, academy programs, and digital transformation." 
      cta={{ label: 'Book a Free Consultation', href: '/demo' }}
    />
  );
}
