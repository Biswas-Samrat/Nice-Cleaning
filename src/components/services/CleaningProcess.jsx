import { PhoneCall, CalendarCheck, Sparkles, Home } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: '1. Get In Touch',
    description: 'Call, message on WhatsApp, or complete our quick online quote form with your cleaning details.',
  },
  {
    icon: CalendarCheck,
    title: '2. Agree Details',
    description: 'We discuss your specific needs, agree on convenient dates and timings, and confirm the price.',
  },
  {
    icon: Sparkles,
    title: '3. Professional Clean',
    description: 'Abi arrives promptly and carries out a detailed, attentive clean of your home or vehicle.',
  },
  {
    icon: Home,
    title: '4. Enjoy The Shine',
    description: 'Come home to a fresh, gleaming space that smells wonderful and lightens your daily load.',
  },
]

export default function CleaningProcess() {
  return (
    <section className="bg-skyblue-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 font-sans">
            Simple & Stress-Free
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal">
            How Our Cleaning Service Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal/65 mt-3">
            Four easy steps to a cleaner, fresher home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-accent-blue/15 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-skyblue-100 text-accent-blue flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-medium text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
