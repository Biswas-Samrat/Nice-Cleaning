import { Phone } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-pink text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] sm:text-xs md:text-sm">
        <p className="font-sans text-white/90 tracking-[0.08em] uppercase">
          ✨ Professional cleaning services across Armagh & surrounding areas ✨
        </p>
        <a
          href="https://wa.me/447715533186?text=Hi%20Sparkle%20%26%20Clean%2C%20I%27d%20like%20to%20enquire%20about%20a%20cleaning%20service."
          className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-colors duration-150 flex-shrink-0"
          aria-label="Message Sparkle & Clean on WhatsApp"
        >
          <Phone size={13} />
          <span>Regular • Deep • One-Off Cleans</span>
        </a>
      </div>
    </div>
  )
}
