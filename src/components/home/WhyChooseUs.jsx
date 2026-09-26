import { Search, Clock, Heart, Home } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const values = [
  {
    icon: Search,
    title: 'Attention to Detail',
    description: 'Every corner matters. Reset2Shine focuses on the details that make a genuine difference to how your home feels.',
    accent: 'bg-skyblue-100 text-accent-blue',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'Consistent, dependable and on time. You can count on Reset2Shine to show up and deliver every visit.',
    accent: 'bg-accent-gold/10 text-accent-gold',
  },
  {
    icon: Heart,
    title: 'Friendly Approach',
    description: 'Warm, professional and non-judgmental. Abi treats every home with care and every customer with respect.',
    accent: 'bg-accent-sage/10 text-accent-sage',
  },
  {
    icon: Home,
    title: 'Respect for Your Home',
    description: 'Your home is personal. Reset2Shine takes good care of your belongings and your space at all times.',
    accent: 'bg-skyblue-100 text-accent-blue',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24" aria-label="Why choose Reset2Shine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80"
                alt="Professional cleaning service in action"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-skyblue-100 -z-10" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-accent-gold/15 -z-10" aria-hidden="true" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 font-sans">
              Why Reset2Shine
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              More Than Just a Clean
            </h2>
            <p className="font-sans text-base text-charcoal/65 leading-relaxed mb-8">
              Every home is different. Reset2Shine focuses on the details that make your space feel genuinely fresh, cared for and comfortable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg ${value.accent} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-charcoal text-sm mb-1">{value.title}</h3>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
