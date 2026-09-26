import AnnouncementBar from '../components/layout/AnnouncementBar'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MobileContactBar from '../components/layout/MobileContactBar'
import BackToTopButton from '../components/common/BackToTopButton'
import Breadcrumb from '../components/common/Breadcrumb'
import QuoteForm from '../components/contact/QuoteForm'
import ContactCard from '../components/contact/ContactCard'
import { ShieldCheck, Clock, ThumbsUp, MapPin } from 'lucide-react'
import { areas } from '../data/areas'

export default function RequestQuote() {
  return (
    <>
      <title>Request a Quote | Reset2Shine Cleaning Harlow</title>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream py-14 sm:py-16 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: 'Request a Quote' }]} />
            <div className="mt-6 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 font-sans">
                Free & No Obligation
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-charcoal mb-4 leading-tight">
                Request a Cleaning Quote
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed">
                Tell Reset2Shine what you need cleaned and we'll be in touch to confirm availability and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Form & Sidebar */}
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8">
                <QuoteForm />
              </div>

              <div className="lg:col-span-4 space-y-6">
                {/* Why Choose Us Card */}
                <div className="bg-white rounded-2xl border border-charcoal/8 p-6 space-y-4 shadow-sm">
                  <h3 className="font-display font-medium text-lg text-charcoal mb-2">
                    Why Customers Choose Reset2Shine
                  </h3>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-sage/10 text-accent-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ThumbsUp size={16} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-xs text-charcoal">100% Recommended</p>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">14 Facebook recommendations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-skyblue-100 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={16} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-xs text-charcoal">Fast Response</p>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">Reply via your chosen contact method</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-gold/10 text-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-xs text-charcoal">Personal Care</p>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">Respectful, friendly and non-judgemental cleaning</p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Info */}
                <ContactCard />

                {/* Service Areas Summary */}
                <div className="bg-white rounded-2xl border border-charcoal/8 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-accent-blue" />
                    <h3 className="font-display font-medium text-base text-charcoal">
                      Serving Harlow & Nearby
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {areas.map(a => (
                      <span key={a.id} className="text-xs bg-cream px-2.5 py-1 rounded-md text-charcoal/70 font-sans border border-charcoal/6">
                        {a.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
