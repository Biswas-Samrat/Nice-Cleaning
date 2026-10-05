import { Star } from 'lucide-react'

export default function RatingStars({ rating = 5, size = 16, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'text-brand-yellow fill-brand-yellow' : 'text-charcoal/20'}
        />
      ))}
    </div>
  )
}
