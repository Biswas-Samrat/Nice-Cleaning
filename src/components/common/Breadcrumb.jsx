import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link to="/" className="flex items-center text-charcoal/50 hover:text-charcoal text-sm transition-colors duration-150">
            <Home size={14} className="mr-1" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-charcoal/30" />
            {item.href && i < items.length - 1 ? (
              <Link to={item.href} className="text-sm text-charcoal/50 hover:text-charcoal transition-colors duration-150">
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-charcoal font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
