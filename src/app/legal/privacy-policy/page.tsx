import { PageShell } from '@/components/PageShell';

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="Read how Zyglo Tech Enterprise collects, uses, and protects your data in our web and product experiences." 
      cta={{ label: 'Contact Support', href: '/contact' }}
    />
  );
}
