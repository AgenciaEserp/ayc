import { HeroSection } from "@/components/hero-section"
import { WhyRegisterSection } from "@/components/why-register-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyRegisterSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
