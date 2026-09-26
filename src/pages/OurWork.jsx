import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react'
import AnnouncementBar from '../components/layout/AnnouncementBar'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileContactBar from '../components/layout/MobileContactBar'
import BackToTopButton from '../components/common/BackToTopButton'
import Breadcrumb from '../components/common/Breadcrumb'
import SectionHeading from '../components/common/SectionHeading'
import WorkGrid from '../components/work/WorkGrid'

export default function OurWork() {
  return (
    <>
      <title>Our Work | Before & After Transformations | Reset2Shine Cleaning</title>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="bg-cream py-14 sm:py-16 lg:py-20 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: 'Our Work' }]} />
            <div className="mt-6 max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 font-sans">
                Our Work
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal mb-4 leading-tight">
                See The Difference
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed mb-8">
                Take a look at some of the cleaning transformations from Reset2Shine Cleaning. Drag the slider to compare each space before and after.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/request-quote" className="btn-primary">
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/447715533186?text=Hi%20Abi%2C%20I%27ve%20seen%20your%20before%20and%20after%20work%20and%20would%20like%20to%20enquire."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  WhatsApp Abi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro & Before & After Grid */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <SectionHeading
                eyebrow="Before & After"
                heading="From Everyday Mess to Fresh & Spotless"
                subheading="Every clean is about the details. Explore our before and after work and see how a careful, professional clean can transform a space."
              />
            </div>

            <WorkGrid />
          </div>
        </section>

        {/* Trust / Explanation */}
        <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-skyblue-100 text-accent-blue flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue font-sans mb-2">
              Thoughtful Cleaning
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              Every Detail Matters
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed max-w-2xl mx-auto">
              Reset2Shine focuses on careful, professional cleaning that leaves your space feeling fresh, cared for and ready to enjoy.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-skyblue-100 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue font-sans mb-2">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-4">
              Ready to Make Your Space Shine?
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed max-w-xl mx-auto mb-8">
              Tell Reset2Shine what you need cleaned and get in touch today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-quote" className="btn-primary">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/447715533186?text=Hi%20Abi%2C%20I%27d%20like%20to%20enquire%20about%20a%20clean."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare size={16} />
                WhatsApp Abi
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  )
}
