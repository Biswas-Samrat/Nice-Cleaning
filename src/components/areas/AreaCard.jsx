import { MapPin } from 'lucide-react'

export default function AreaCard({ area }) {
  return (
    <div className={`group flex flex-col rounded-xl border p-5 transition-all duration-200 ${
      area.isMain
        ? 'bg-charcoal border-charcoal text-white'
        : 'bg-white border-charcoal/10 hover:border-accent-blue/30 hover:shadow-sm'
    }`}>
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
        area.isMain ? 'bg-white/15' : 'bg-skyblue-100'
      }`}>
        <MapPin size={16} className={area.isMain ? 'text-accent-blue' : 'text-accent-blue'} />
      </div>
      <h3 className={`font-display font-medium text-lg mb-2 ${area.isMain ? 'text-white' : 'text-charcoal'}`}>
        {area.name}
        {area.isMain && <span className="ml-2 text-xs text-white/60 font-sans font-normal">(Base)</span>}
      </h3>
      <p className={`font-sans text-sm leading-relaxed ${area.isMain ? 'text-white/65' : 'text-charcoal/60'}`}>
        {area.description}
      </p>
    </div>
  )
}
