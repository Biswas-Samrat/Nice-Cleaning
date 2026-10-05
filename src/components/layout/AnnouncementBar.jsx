import { Phone } from "lucide-react";
import { createWhatsAppUrl } from "../../data/contact";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-purple text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] sm:text-xs md:text-sm">
        <p className="font-sans text-white/90 tracking-[0.08em] uppercase">
          Less Chores. More Life. Serving Newport, Gwent & nearby.
        </p>
        <a
          href={createWhatsAppUrl(
            "Hi Nice Cleaning, I'd like to enquire about a cleaning service.",
          )}
          className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-colors duration-150 flex-shrink-0"
          aria-label="Message Nice Cleaning on WhatsApp"
        >
          <Phone size={13} />
          <span>House Cleans • Deep Cleans • End of Tenancy Cleans</span>
        </a>
      </div>
    </div>
  );
}
