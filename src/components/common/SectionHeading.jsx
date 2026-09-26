export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.18em] uppercase ${light ? 'text-skyblue-200' : 'text-accent-blue'
            }`}
        >
          <span className="h-px w-5 bg-current opacity-60" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[3rem] leading-[1.05] font-medium tracking-[-0.03em] ${light ? 'text-white' : 'text-charcoal'
          }`}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={`mt-5 max-w-2xl font-sans text-base sm:text-lg leading-8 ${align === 'center' ? 'mx-auto' : ''
            } ${light ? 'text-white/70' : 'text-charcoal-light'}`}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}