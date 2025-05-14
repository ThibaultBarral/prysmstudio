import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import AgencySection from '@/app/components/AgencySection'
import ExpertiseSection from '@/app/components/ExpertiseSection'
import ProcessSection from '@/app/components/ProcessSection'
import ContactSection from '@/app/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AgencySection />
      <ExpertiseSection />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}
