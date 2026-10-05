import { useRef, useState } from 'react'

export default function ImageComparison({
  before,
  after,
  beforeAlt,
  afterAlt,
}) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [beforeError, setBeforeError] = useState(false)
  const [afterError, setAfterError] = useState(false)

  const updateSlider = (clientX) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    if (!rect.width) return
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    setPosition(clampedPercentage)
  }

  const handlePointerDown = (event) => {
    if (!event.isPrimary) return
    event.preventDefault()
    setDragging(true)
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      // Ignore unsupported pointer capture
    }
    updateSlider(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (!dragging || !event.isPrimary) return
    event.preventDefault()
    updateSlider(event.clientX)
  }

  const handlePointerUp = (event) => {
    if (!event.isPrimary) return
    event.preventDefault()
    setDragging(false)
    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    } catch {
      // Ignore unsupported pointer capture
    }
  }

  const handlePointerCancel = (event) => {
    setDragging(false)
    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    } catch {
      // Ignore unsupported pointer capture
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-72 sm:h-80 md:h-80 lg:h-[300px] overflow-hidden rounded-[1.4rem] bg-[#f5e4e7] select-none touch-none ${
        dragging ? 'cursor-ew-resize' : 'cursor-ew-resize'
      }`}
      style={{
        touchAction: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onLostPointerCapture={() => setDragging(false)}
    >
      {/* AFTER IMAGE OR FALLBACK */}
      {afterError ? (
        <div className="absolute inset-0 bg-cream flex flex-col items-center justify-center p-4 text-center">
          <span className="text-xs font-semibold text-brand-purple uppercase tracking-wider font-sans mb-1">After Clean</span>
          <span className="text-xs text-charcoal/50 font-sans">Transformation photo coming soon</span>
        </div>
      ) : (
        <img
          src={after}
          alt={afterAlt}
          draggable={false}
          onError={() => setAfterError(true)}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
      )}

      {/* BEFORE IMAGE OR FALLBACK */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        {beforeError ? (
          <div className="h-full w-full bg-brand-teal-light flex flex-col items-center justify-center p-4 text-center">
            <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider font-sans mb-1">Before Clean</span>
            <span className="text-xs text-charcoal/50 font-sans">Before photo coming soon</span>
          </div>
        ) : (
          <img
            src={before}
            alt={beforeAlt}
            draggable={false}
            onError={() => setBeforeError(true)}
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          />
        )}
      </div>

      {/* BEFORE LABEL */}
      <div className="pointer-events-none absolute left-4 top-4 z-20">
        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Before
        </span>
      </div>

      {/* AFTER LABEL */}
      <div className="pointer-events-none absolute right-4 top-4 z-20">
        <span className="rounded-full border border-white/40 bg-white/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#a85f6d] backdrop-blur-md">
          After
        </span>
      </div>

      {/* SLIDER DIVIDER */}
      <div
        className="pointer-events-none absolute inset-y-0 z-30 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)]"
        style={{
          left: `${position}%`,
        }}
      />

      {/* SLIDER HANDLE */}
      <div
        className="pointer-events-none absolute top-1/2 z-40 flex h-11 w-11 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#c47784] shadow-[0_6px_25px_rgba(0,0,0,0.25)]"
        style={{
          left: `${position}%`,
        }}
      >
        <div className="flex items-center text-white">
          <span className="text-lg leading-none">‹</span>
          <span className="mx-1 h-4 sm:h-5 w-px bg-white/70" />
          <span className="text-lg leading-none">›</span>
        </div>
      </div>

      {/* DRAG INSTRUCTION */}
      {!dragging && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
          <div className="rounded-full bg-black/30 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
            Drag to compare
          </div>
        </div>
      )}
    </div>
  )
}
