import { Link } from 'react-router-dom'
import { ArrowRight, Info, Check } from 'lucide-react'
import { pricingItems } from '../../data/pricing'
import SectionHeading from '../common/SectionHeading'

const accentMap = {
  blue: { dot: 'bg-accent-blue', border: 'border-accent-blue/20' },
  gold: { dot: 'bg-accent-gold', border: 'border-accent-gold/20' },
  sage: { dot: 'bg-accent-sage', border: 'border-accent-sage/20' },
}

export default function PricingPreview() {
  return (
    <section className="bg-skyblue-100 py-16 sm:py-20 lg:py-24" aria-label="Pricing preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <SectionHeading
            eyebrow="Transparent Pricing"
            heading="Clear, Simple Pricing"
            subheading="Reset2Shine believes in honest, straightforward pricing. No hidden fees or surprises — just clear information so you know what to expect."
          />
        </div>

        {/* 5 Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pricingItems.map((item) => {
            const colors = accentMap[item.accent] || accentMap.blue
            return (
              <div key={item.id} className={`bg-white rounded-2xl border ${colors.border} p-6 flex flex-col justify-between shadow-sm`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 font-sans">
                      {item.unit}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-charcoal text-xl mb-2">{item.title}</h3>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="font-display text-3xl font-semibold text-charcoal">{item.price}</span>
                  </div>
                  <p className="font-sans text-sm text-charcoal/65 leading-relaxed mb-4">{item.description}</p>
                </div>

                <div>
                  {item.features && (
                    <ul className="space-y-1.5 pt-3 border-t border-charcoal/6 mb-5">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-charcoal/70 font-sans">
                          <Check size={12} className="text-accent-sage flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link to="/request-quote" className="btn-primary w-full justify-center text-xs py-2.5">
                    Request a Quote
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Important note */}
        <div className="bg-white/80 border border-accent-blue/20 rounded-xl px-5 py-4 flex items-start gap-3 mb-8 shadow-sm">
          <Info size={18} className="text-accent-blue mt-0.5 flex-shrink-0" />
          <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
            <strong className="font-semibold text-charcoal">End-of-tenancy and move-in cleaning</strong> are priced individually following a property assessment. Every home is unique, and Reset2Shine will review the property before providing a personalized quote.
          </p>
        </div>

        <div className="text-center">
          <Link to="/request-quote" className="btn-primary py-3.5 px-8 inline-flex items-center gap-2">
            Request a Personalised Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
