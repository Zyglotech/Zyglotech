import { PageShell } from '@/components/PageShell';

export default function AcademyPage() {
  return (
    <PageShell
      title="Zyglo Academy"
      description="Upskill with AI courses, bootcamps, mentorship, certificates and career-ready learning paths." 
      cta={{ label: 'Browse Courses', href: '/academy/courses' }}
    />
  );
}
