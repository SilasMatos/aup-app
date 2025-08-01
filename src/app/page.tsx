// import Navbar from '../components/layout/navbar'
import HeroSection from '../components/hero-section'
import SolutionsSection from '../components/solutions-section'
import AboutSection from '../components/about-section'
import TeamSection from '../components/team-section'
import TestimonialsSection from '../components/testimonials-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#f3f3f3]">
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
