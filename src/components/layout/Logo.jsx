export default function Logo({ size = 'md' }) {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  }[size] || 'h-10 sm:h-12'

  return (
    <img
      src="/text%20loog%20new.png"
      alt="Reset2Shine Cleaning"
      className={`${heightClass} w-auto max-w-full object-contain`}
    />
  )
}
