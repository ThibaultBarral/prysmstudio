import HeroSection from '@/app/components/HeroSection'
import StatsCounter from '@/app/components/StatsCounter'
import ServicesSection from '@/app/components/ServicesSection'
import AgencySection from '@/app/components/AgencySection'
import ExpertiseSection from '@/app/components/ExpertiseSection'
import ProcessSection from '@/app/components/ProcessSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import OffersSection from '@/app/components/OffersSection'
import FAQSection from '@/app/components/FAQSection'
import ContactSection from '@/app/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <ServicesSection />
      <AgencySection />
      <ExpertiseSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <OffersSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
