import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services, serviceIcons } from '../../data/services'
import SectionHeading from '../common/SectionHeading'

const accentStyles = {
  blue: 'text-accent-blue',
  gold: 'text-accent-gold',
  sage: 'text-accent-sage',
}

export default function ServicesPreview() {
  const previewServices = services.slice(0, 5)

  return (
    <section
      className="bg-cream py-20 sm:py-24 lg:py-32"
      aria-label="Services preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="What We Offer"
            heading="Cleaning services designed around your needs."
            subheading="From regular home cleaning to specialist jobs, every service is carried out with care, attention to detail and a professional finish."
            align="left"
          />

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-2 border-b border-charcoal/20 pb-2 text-sm font-medium text-charcoal transition-colors duration-300 hover:border-charcoal hover:text-charcoal"
          >
            View all services
            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-12">
          {previewServices.map((service, index) => {
            const Icon = serviceIcons[service.icon]
            const accent = accentStyles[service.accent] || accentStyles.blue
            const number = String(index + 1).padStart(2, '0')

            const isFeatured = index === 0
            const isLarge = index >= 3

            const gridClass = isFeatured
              ? 'lg:col-span-6'
              : isLarge
                ? 'lg:col-span-6'
                : 'lg:col-span-3'

            return (
              <Link
                key={service.id}
                to="/services"
                className={`group relative flex h-full min-h-[500px] flex-col overflow-hidden border border-charcoal/10 bg-white transition-all duration-500 hover:border-charcoal/20 ${gridClass}`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-stone ${isFeatured || isLarge
                      ? 'aspect-[16/10]'
                      : 'aspect-[4/3]'
                    }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    loading="lazy"
                  />

                  {/* Soft image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.16em] text-white">
                    <span>{number}</span>
                    <span className="h-px w-6 bg-white/70" />
                    <span className="uppercase">Service</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                  {/* Icon + small category */}
                  <div className={`mb-5 flex items-center gap-2 ${accent}`}>
                    {Icon && (
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase">
                      Reset2Shine
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display font-medium leading-[1.08] tracking-[-0.02em] text-charcoal ${isFeatured || isLarge
                        ? 'text-2xl sm:text-[1.7rem]'
                        : 'text-xl'
                      }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-charcoal/60">
                    {service.shortDescription}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                      <span className="text-xs font-sans font-medium text-charcoal/45">
                        {service.price}
                        {service.priceNote && (
                          <span className="ml-1 text-charcoal/30">
                            · {service.priceNote}
                          </span>
                        )}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center border border-charcoal/15 text-charcoal transition-all duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-white">
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}