import { Phone, MessageSquare, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import {
  businessPhone,
  businessPhoneLink,
  createWhatsAppUrl,
} from "../../data/contact";

export default function ContactMethods() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a
        href={businessPhoneLink}
        className="bg-white rounded-2xl p-6 border border-charcoal/8 hover:border-brand-purple/40 transition-all duration-200 shadow-sm flex flex-col items-center text-center group"
      >
        <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Phone size={22} />
        </div>
        <h3 className="font-display font-medium text-lg text-charcoal mb-1">
          Call Us
        </h3>
        <p className="font-sans text-xs text-charcoal/60 mb-3">
          {businessPhone}
        </p>
        <span className="btn-secondary py-1.5 px-3 text-xs mt-auto">
          Call Now
        </span>
      </a>

      <a
        href={createWhatsAppUrl()}
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
        className="bg-white rounded-2xl p-6 border border-charcoal/8 hover:border-brand-yellow/40 transition-all duration-200 shadow-sm flex flex-col items-center text-center group"
      >
        <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
