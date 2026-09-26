import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function GalleryModal({ item, items, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!item) return null

  const currentIndex = items.findIndex(i => i.id === item.id)

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal-dark/95 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image */}
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.alt}
          className="w-full max-h-[75vh] object-contain rounded-xl"
        />
        <div className="mt-4 text-center">
          <h3 className="font-display text-white text-lg font-medium">{item.title}</h3>
          <p className="font-sans text-white/50 text-sm mt-1">
            {item.category} · {currentIndex + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  )
}
