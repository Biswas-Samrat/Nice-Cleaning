import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import OurWork from '../pages/OurWork'
import Gallery from '../pages/Gallery'
import Areas from '../pages/Areas'
import RequestQuote from '../pages/RequestQuote'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/request-quote" element={<RequestQuote />} />
      {/* Fallback redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
