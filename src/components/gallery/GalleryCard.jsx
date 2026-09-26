export default function GalleryCard({ item, onClick }) {
  return (
    <button
      onClick={() => onClick(item)}
      className="group block w-full rounded-xl overflow-hidden relative focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
      aria-label={`View ${item.title}`}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <span className="bg-white/95 text-charcoal text-xs font-semibold font-sans px-2.5 py-1 rounded-full">
            {item.category}
          </span>
          <span className="bg-charcoal/80 text-white text-xs font-sans px-2 py-1 rounded-full">
            {item.title}
          </span>
        </div>
      </div>
    </button>
  )
}
