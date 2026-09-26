import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Phone } from 'lucide-react'

export default function ServiceCTA() {
  return (
    <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-charcoal/8 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-blue font-sans mb-3 block">
            Reset2Shine Cleaning Harlow
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-4">
            Ready to Make Your Space Shine?
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you need a regular house clean, a one-off oven clean, or help preparing a property, get in touch with Reset2Shine Cleaning today.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link to="/request-quote" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/447715533186?text=Hi%20Abi%2C%20I%27d%20like%20to%20enquire%20about%20a%20cleaning%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={16} />
              WhatsApp Abi
            </a>
            <a href="tel:+447715533186" className="btn-secondary">
              <Phone size={16} />
              Call +44 7715 533186
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
