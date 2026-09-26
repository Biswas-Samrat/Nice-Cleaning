import { Phone, MessageSquare, MapPin, Facebook } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="bg-white rounded-2xl border border-charcoal/8 p-6 sm:p-8 space-y-6 shadow-sm">
      <h3 className="font-display text-2xl font-medium text-charcoal">
        Direct Contact Info
      </h3>
      <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
        Feel free to call, send a message on WhatsApp, or connect with Sparkle &
        Clean on Facebook.
      </p>

      <div className="space-y-4 pt-2">
        <a
          href="tel:+447715533186"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors duration-150 group"
        >
          <div className="w-10 h-10 rounded-lg bg-skyblue-100 text-accent-blue flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-xs text-charcoal/50 font-sans font-medium uppercase tracking-wider">
              Phone
            </p>
            <p className="text-sm font-semibold text-charcoal font-sans">
              +44 7715 533186
            </p>
          </div>
        </a>

        <a
          href="https://wa.me/447715533186?text=Hi%20Sparkle%20%26%20Clean%2C%20I%27d%20like%20to%20enquire%20about%20a%20cleaning%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors duration-150 group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <MessageSquare size={18} />
          </div>
          <div>
            <p className="text-xs text-charcoal/50 font-sans font-medium uppercase tracking-wider">
              WhatsApp
            </p>
            <p className="text-sm font-semibold text-charcoal font-sans">
              +44 7715 533186
            </p>
          </div>
        </a>

        <div className="flex items-center gap-3 p-3 rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-accent-sage/10 text-accent-sage flex items-center justify-center flex-shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-xs text-charcoal/50 font-sans font-medium uppercase tracking-wider">
              Location
            </p>
            <p className="text-sm font-semibold text-charcoal font-sans">
              Armagh, United Kingdom
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-[#4267B2]/10 text-[#4267B2] flex items-center justify-center flex-shrink-0">
            <Facebook size={18} />
          </div>
          <div>
            <p className="text-xs text-charcoal/50 font-sans font-medium uppercase tracking-wider">
              Facebook Page
            </p>
            <p className="text-sm font-semibold text-charcoal font-sans">
              Sparkle & Clean
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-charcoal/6 text-xs text-charcoal/50 font-sans leading-relaxed">
        Serving Armagh and nearby communities across the local area.
      </div>
    </div>
  );
}
