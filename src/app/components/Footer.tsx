import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #ffffff 0%, #d0eef8 100%)' }}>
      {/* Wave top decoration — matches brochure cover waves */}
      <div className="relative overflow-hidden" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M0,20 C200,50 500,0 800,30 C1050,55 1300,10 1440,25 L1440,60 L0,60 Z" fill="#A5D63A" opacity="0.6"/>
          <path d="M0,35 C250,10 600,55 900,30 C1100,15 1300,45 1440,38 L1440,60 L0,60 Z" fill="#29ABE2" opacity="0.45"/>
          <path d="M0,45 C300,20 700,60 1000,40 C1200,25 1380,50 1440,45 L1440,60 L0,60 Z" fill="#A5D63A" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Hisahi Plastochem" className="w-14 h-14 object-contain flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg leading-none" style={{ color: '#C41230' }}>Hisahi Plastochem</span>
                <span className="text-xs font-medium tracking-wide" style={{ color: '#000000' }}>PACKAGING THAT PERFORMS</span>
              </div>
            </div>
            <p className="text-sm mb-4" style={{ color: '#3a5a5a' }}>
              High-quality rigid plastic packaging solutions designed for industrial excellence.
            </p>
            <div className="text-xs" style={{ color: '#3a6060' }}>
              <p className="font-semibold mb-0.5" style={{ color: '#1a4d1a' }}>Founded by</p>
              <p>Chetan Sharma <span style={{ color: '#7DC242' }}>·</span> Pradeep Matolia</p>
              <p className="text-xs mt-0.5" style={{ color: '#6a9090' }}>Founder &amp; Co-Founder</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#1a4d1a' }}>Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/infrastructure', label: 'Infrastructure' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm transition-colors" style={{ color: '#1a5c5c' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7DC242')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#1a5c5c')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#1a4d1a' }}>Contact Us</h3>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#7DC242' }} />
                <span className="text-sm" style={{ color: '#1a3a3a' }}>
                  Plot No-16, Phase-II, Government Industrial Estate,<br/>
                  Piparia, Silvassa – 396230
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#7DC242' }} />
                <span className="text-sm" style={{ color: '#1a3a3a' }}>+91 91377 31012</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#7DC242' }} />
                <span className="text-sm" style={{ color: '#1a3a3a' }}>hisahi.plastochem@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" style={{ color: '#29ABE2' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7DC242')}
                onMouseLeave={e => (e.currentTarget.style.color = '#29ABE2')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" style={{ color: '#29ABE2' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7DC242')}
                onMouseLeave={e => (e.currentTarget.style.color = '#29ABE2')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" style={{ color: '#29ABE2' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7DC242')}
                onMouseLeave={e => (e.currentTarget.style.color = '#29ABE2')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 text-sm text-center" style={{ borderTop: '1px solid rgba(46,170,46,0.25)', color: '#3a6060' }}>
          <p>&copy; {new Date().getFullYear()} Hisahi Plastochem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
