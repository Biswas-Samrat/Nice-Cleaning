import { Phone } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm">
        <p className="font-sans text-white/80">
          ✨ Professional cleaning services across Harlow & surrounding areas
        </p>
        <a
          href="tel:+447715533186"
          className="flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-colors duration-150 flex-shrink-0"
          aria-label="Call Reset2Shine Cleaning"
        >
          <Phone size={13} />
          <span className="hidden sm:inline">+44 7715 533186</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </div>
  )
}
