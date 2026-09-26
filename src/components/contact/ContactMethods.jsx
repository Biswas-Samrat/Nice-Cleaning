import { Phone, MessageSquare, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactMethods() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a
        href="tel:+447715533186"
        className="bg-white rounded-2xl p-6 border border-charcoal/8 hover:border-accent-blue/40 transition-all duration-200 shadow-sm flex flex-col items-center text-center group"
      >
        <div className="w-12 h-12 rounded-xl bg-skyblue-100 text-accent-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Phone size={22} />
        </div>
        <h3 className="font-display font-medium text-lg text-charcoal mb-1">
          Call Us
        </h3>
        <p className="font-sans text-xs text-charcoal/60 mb-3">
          +44 7715 533186
        </p>
        <span className="btn-secondary py-1.5 px-3 text-xs mt-auto">
          Call Now
        </span>
      </a>

      <a
        href="https://wa.me/447715533186?text=Hi%20Sparkle%20%26%20Clean%2C%20I%27d%20like%20to%20enquire%20about%20a%20cleaning%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-2xl p-6 border border-charcoal/8 hover:border-[#25D366]/40 transition-all duration-200 shadow-sm flex flex-col items-center text-center group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <MessageSquare size={22} />
        </div>
        <h3 className="font-display font-medium text-lg text-charcoal mb-1">
          WhatsApp Us
        </h3>
        <p className="font-sans text-xs text-charcoal/60 mb-3">
          Quick direct chat
        </p>
        <span className="btn-whatsapp py-1.5 px-3 text-xs mt-auto">
          Message Now
        </span>
      </a>

      <Link
        to="/request-quote"
        className="bg-white rounded-2xl p-6 border border-charcoal/8 hover:border-accent-gold/40 transition-all duration-200 shadow-sm flex flex-col items-center text-center group"
      >
        <div className="w-12 h-12 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <FileText size={22} />
        </div>
        <h3 className="font-display font-medium text-lg text-charcoal mb-1">
          Request a Quote
        </h3>
        <p className="font-sans text-xs text-charcoal/60 mb-3">
          Detailed online form
        </p>
        <span className="btn-primary py-1.5 px-3 text-xs mt-auto">
          Get Quote
        </span>
      </Link>
    </div>
  );
}
