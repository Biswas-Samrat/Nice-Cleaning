import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Phone, MapPin, Facebook } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/areas', label: 'Areas We Cover' },
  { to: '/request-quote', label: 'Request a Quote' },
]

const serviceLinks = [
  { to: '/services#house-cleaning', label: 'House Cleaning' },
  { to: '/services#oven-cleaning', label: 'Oven Cleaning' },
  { to: '/services#car-cleaning', label: 'Car Cleaning' },
  { to: '/services#end-of-tenancy', label: 'End of Tenancy' },
  { to: '/services#move-in-cleaning', label: 'Move In Cleaning' },
]

const areas = ['Harlow', 'North Weald', 'Sawbridgeworth', "Bishop's Stortford", 'Epping', 'Ware', 'Hertford']

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed font-sans max-w-xs">
              Friendly, professional cleaning services for homes across Harlow and surrounding areas. Reliable, personal and caring.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-sm text-white/60">
              <MapPin size={14} className="text-accent-blue flex-shrink-0" />
              <span>Harlow, United Kingdom</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <Phone size={14} className="text-accent-blue flex-shrink-0" />
              <a href="tel:+447715533186" className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                +44 7715 533186
              </a>
            </div>
            {/* Social */}
            <div className="mt-5">
              <a
                href="https://www.facebook.com/Reset2ShineCleaning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reset2Shine Cleaning on Facebook"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Facebook size={16} className="text-[#4267B2]" />
                Reset2Shine Cleaning
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors duration-150 font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors duration-150 font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas & Contact */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Areas We Cover</h3>
            <ul className="space-y-1.5">
              {areas.map((area) => (
                <li key={area}>
                  <Link to="/areas" className="text-sm text-white/60 hover:text-white transition-colors duration-150 font-sans">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <a
                href="https://wa.me/447715533186?text=Hi%20Abi%2C%20I%27d%20like%20to%20enquire%20about%20a%20cleaning%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-2 text-xs"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="tel:+447715533186" className="flex items-center justify-center gap-1.5 w-full py-2 px-4 border border-white/20 rounded-lg text-xs font-sans font-medium text-white/70 hover:text-white hover:border-white/40 transition-colors duration-150">
                <Phone size={13} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-sans">
          <p>© 2026 Reset2Shine Cleaning. All rights reserved.</p>
          <p>Professional cleaning services in Harlow, Essex & Hertfordshire</p>
        </div>
      </div>
    </footer>
  )
}
