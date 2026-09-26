import { Link } from 'react-router-dom'
import { Check, Info } from 'lucide-react'

const accentMap = {
  blue: {
    dot: 'bg-accent-blue',
    badge: 'bg-skyblue-100 text-accent-blue border-skyblue-200',
    border: 'border-accent-blue/25',
    header: 'bg-skyblue-100',
    check: 'text-accent-blue',
  },
  gold: {
    dot: 'bg-accent-gold',
    badge: 'bg-accent-gold/10 text-accent-gold border-accent-gold/20',
    border: 'border-accent-gold/25',
    header: 'bg-accent-gold/8',
    check: 'text-accent-gold',
  },
  sage: {
    dot: 'bg-accent-sage',
    badge: 'bg-accent-sage/10 text-accent-sage border-accent-sage/20',
    border: 'border-accent-sage/25',
    header: 'bg-accent-sage/8',
    check: 'text-accent-sage',
  },
}

export default function PricingCard({ item }) {
  const colors = accentMap[item.accent] || accentMap.blue
  const isAssessment = item.price === 'View First'

  return (
    <div className={`bg-white rounded-xl border ${colors.border} flex flex-col overflow-hidden shadow-sm`}>
      {/* Header */}
      <div className={`${colors.header} px-6 pt-6 pb-5`}>
        <div className={`w-2.5 h-2.5 rounded-full ${colors.dot} mb-4`} aria-hidden="true" />
        <h3 className="font-display font-medium text-charcoal text-xl mb-2">{item.title}</h3>
        <div className="flex items-baseline gap-2">
          <span className={`font-display font-semibold text-charcoal ${isAssessment ? 'text-2xl' : 'text-4xl'}`}>
            {item.price}
          </span>
          <span className="font-sans text-sm text-charcoal/50">{item.unit}</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex-1 flex flex-col">
        <p className="font-sans text-sm text-charcoal/65 mb-5 leading-relaxed">{item.description}</p>

        <ul className="space-y-2.5 flex-1">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check size={14} className={colors.check} />
              <span className="font-sans text-sm text-charcoal/70">{feature}</span>
            </li>
          ))}
        </ul>

        {item.note && (
          <div className="mt-5 flex items-start gap-2 bg-charcoal/4 rounded-lg px-3 py-3">
            <Info size={13} className="text-charcoal/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-xs text-charcoal/60 leading-relaxed">{item.note}</p>
          </div>
        )}

        <div className="mt-5 pt-5 border-t border-charcoal/6">
          <Link to="/request-quote" className="btn-primary w-full justify-center text-sm py-2.5">
            {item.cta}
          </Link>
          {item.ctaNote && (
            <p className="text-center text-xs text-charcoal/40 font-sans mt-2">{item.ctaNote}</p>
          )}
        </div>
      </div>
    </div>
  )
}
