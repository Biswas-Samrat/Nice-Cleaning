import { Star, ThumbsUp, MapPin, Shield } from 'lucide-react'

const trustItems = [
  { icon: Star, label: '100% Recommended', sub: '14 Facebook reviews' },
  { icon: ThumbsUp, label: 'Friendly & Professional', sub: 'Warm, reliable service' },
  { icon: Shield, label: 'Respectful & Reliable', sub: 'Caring for your home' },
  { icon: MapPin, label: 'Serving Harlow & Surrounding Areas', sub: 'Local, personal service' },
]

export default function TrustStrip() {
  return (
    <section className="bg-charcoal py-8 sm:py-10" aria-label="Trust and social proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-accent-gold" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-white text-sm leading-tight">{item.label}</p>
                  <p className="font-sans text-white/50 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
