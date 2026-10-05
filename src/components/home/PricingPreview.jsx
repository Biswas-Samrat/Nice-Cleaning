import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { pricingContent } from "../../data/pricing";
import SectionHeading from "../common/SectionHeading";

export default function PricingPreview() {
  return (
    <section
      className="bg-brand-teal-light py-16 sm:py-20 lg:py-24"
      aria-label="Personalised quotes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Personalised Quotes"
            heading={pricingContent.heading}
            subheading={pricingContent.description}
          />
          <p className="font-sans text-sm text-charcoal/65 mt-5 mb-8">
            {pricingContent.note}
          </p>
          <Link
            to="/request-quote"
            className="btn-primary py-3.5 px-8 inline-flex items-center gap-2"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
