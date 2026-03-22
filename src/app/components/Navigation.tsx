import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white sticky top-0 z-50"
      style={{ borderBottom: '3px solid #7DC242', boxShadow: '0 2px 12px rgba(46,170,46,0.15)' }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Hisahi Plastochem" className="w-12 h-12 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg leading-none" style={{ color: '#C41230' }}>Hisahi Plastochem</span>
              <span className="text-xs font-medium tracking-wide" style={{ color: '#000000' }}>PACKAGING THAT PERFORMS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/infrastructure', label: 'Infrastructure' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-medium transition-colors hover:underline"
                style={{ color: '#1a3a1a' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7DC242')}
                onMouseLeave={e => (e.currentTarget.style.color = '#1a3a1a')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen
              ? <X className="w-6 h-6" style={{ color: '#1a3a1a' }} />
              : <Menu className="w-6 h-6" style={{ color: '#1a3a1a' }} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid #d0eef8' }}>
            <div className="flex flex-col gap-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/infrastructure', label: 'Infrastructure' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-medium"
                  style={{ color: '#1a3a1a' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
