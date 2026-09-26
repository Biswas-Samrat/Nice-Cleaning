import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { serviceIcons } from '../../data/services'

export default function ServiceDetail({ service, isReversed }) {
  const Icon = serviceIcons[service.icon]

  return (
    <div
      id={service.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isReversed ? 'lg:flex lg:flex-row-reverse' : ''
      }`}
    >
      <div className={isReversed ? 'lg:order-2' : ''}>
        <div className="rounded-2xl overflow-hidden shadow-sm border border-charcoal/8 relative group">
          <img
            src={service.image}
            alt={`${service.title} - Reset2Shine Cleaning`}
            className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <div className="w-10 h-10 rounded-xl bg-skyblue-100 text-accent-blue flex items-center justify-center mb-4">
          {Icon && <Icon size={20} />}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal mb-4">
          {service.title}
        </h2>
        <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {service.suitableFor && service.suitableFor.length > 0 && (
            <div>
              <h3 className="font-sans font-semibold text-charcoal text-xs uppercase tracking-wider mb-3">
                Suitable For
              </h3>
              <ul className="space-y-2">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-charcoal/70 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h3 className="font-sans font-semibold text-charcoal text-xs uppercase tracking-wider mb-3">
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {service.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-charcoal/70 font-sans">
                    <Check size={14} className="text-accent-sage flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link to="/request-quote" className="btn-primary">
            Request a Quote <ArrowRight size={16} />
          </Link>
          <span className="font-sans font-semibold text-charcoal text-sm bg-white px-3 py-1.5 rounded-lg border border-charcoal/10">
            {service.price} {service.priceNote ? `(${service.priceNote})` : ''}
          </span>
        </div>
      </div>
    </div>
  )
}
