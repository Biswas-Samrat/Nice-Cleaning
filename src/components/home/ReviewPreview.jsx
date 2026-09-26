import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'
import { reviews, reviewSummary } from '../../data/reviews'
import ReviewCard from '../reviews/ReviewCard'
import SectionHeading from '../common/SectionHeading'

export default function ReviewPreview() {
  const [showAll, setShowAll] = useState(false)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3)

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionHeading
              eyebrow="What Our Customers Say"
              heading="Real Reviews from Real Customers"
              align="left"
            />
            {/* Summary badge */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1.5 bg-[#4267B2]/10 text-[#4267B2] px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans">
                <Facebook size={14} />
                Reviews from Facebook
              </div>
              <span className="text-sm font-semibold text-charcoal/70 font-sans">
                {reviewSummary.recommendPercent}% recommend · {reviewSummary.total} Facebook reviews
              </span>
            </div>
          </div>

          <a
            href="https://www.facebook.com/Reset2ShineCleaning"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs flex-shrink-0 self-start sm:self-auto"
          >
            Visit Official Facebook Page
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Toggle Show All / Show Less button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {reviews.length > 3 && (
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="btn-secondary text-xs font-sans flex items-center gap-1.5"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={15} /></>
              ) : (
                <>Show All Customer Reviews ({reviews.length}) <ChevronDown size={15} /></>
              )}
            </button>
          )}

          <Link to="/request-quote" className="btn-primary text-xs flex items-center gap-1.5">
            Request a Quote
          </Link>
          <a
            href="https://wa.me/447715533186?text=Hi%20Abi%2C%20I%27d%20like%20to%20enquire%20about%20a%20cleaning%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs flex items-center gap-1.5"
          >
            <MessageSquare size={14} />
            WhatsApp Abi
          </a>
        </div>
      </div>
    </section>
  )
}
