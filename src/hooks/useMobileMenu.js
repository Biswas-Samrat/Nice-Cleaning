import { useState, useEffect, useCallback } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  // Close on scroll
  useEffect(() => {
    if (!isOpen) return
    const handleScroll = () => close()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen, close])

  return { isOpen, open, close, toggle }
}
