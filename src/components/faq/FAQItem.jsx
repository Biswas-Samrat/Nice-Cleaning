import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl border border-charcoal/8 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-charcoal/2 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple/30"
      >
        <span className="font-sans font-medium text-charcoal text-sm sm:text-base pr-4 leading-snug">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-charcoal/40 flex-shrink-0 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 sm:px-6 pb-5 border-t border-charcoal/5">
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
