import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import OurWork from '../pages/OurWork'
import Gallery from '../pages/Gallery'
import Areas from '../pages/Areas'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
import RequestQuote from '../pages/RequestQuote'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-quote" element={<RequestQuote />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
