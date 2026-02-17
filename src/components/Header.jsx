import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Experience & Education', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

// Profile photo: add your image to public/profile.jpg (or .png) to display here
const PROFILE_IMAGE_PATH = '/profile.jpg'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileImageError, setProfileImageError] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="https://www.linkedin.com/in/wickw/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-900 font-semibold text-lg hover:text-indigo-600 transition-colors"
          aria-label="Wick Wijesekera on LinkedIn"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200 ring-2 ring-slate-100">
            {!profileImageError ? (
              <img
                src={PROFILE_IMAGE_PATH}
                alt=""
                className="h-full w-full object-cover"
                onError={() => setProfileImageError(true)}
              />
            ) : (
              <span className="text-sm font-semibold text-slate-500">WW</span>
            )}
          </span>
          Wick Wijesekera
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              {isHome ? (
                <a
                  href={href}
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={href}
                  onClick={handleNavClick}
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <ul className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  {isHome ? (
                    <a
                      href={href}
                      onClick={handleNavClick}
                      className="block py-2 text-slate-600 hover:text-indigo-600"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={href}
                      onClick={handleNavClick}
                      className="block py-2 text-slate-600 hover:text-indigo-600"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
