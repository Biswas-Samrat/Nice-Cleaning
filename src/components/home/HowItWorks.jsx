import { Phone, ClipboardList, MessageSquare, CheckCircle } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Get in Touch',
    description: "Contact Reset2Shine by phone, WhatsApp or the quote form. Let us know what you need and we'll help from there.",
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Discuss Your Requirements',
    description: 'Tell us about your home, the service you need and any specific requirements or questions you have.',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Enjoy a Clean Home',
    description: 'Reset2Shine takes care of everything. Come home to a fresh, clean and cared-for space.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-16 sm:py-20 lg:py-24" aria-label="How it works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Simple Process"
            heading="Getting Started is Easy"
            subheading="Reset2Shine makes the process as smooth and straightforward as possible."
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-8 left-1/6 right-1/6 h-px bg-white/10" aria-hidden="true" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
                    <Icon size={24} className="text-accent-blue" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-gold text-charcoal text-[10px] font-bold font-sans flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-medium text-white text-lg mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
