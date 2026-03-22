import { MapPin } from 'lucide-react';
import { FadeUp, StaggerList, StaggerItem } from '../components/FadeUp';
import { CountUp } from '../components/CountUp';


function WaveDown({ fill: _fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
      <defs>
        <linearGradient id="wgd" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#29ABE2" />
          <stop offset="100%" stopColor="#7DC242" />
        </linearGradient>
      </defs>
      <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="url(#wgd)" />
    </svg>
  );
}
function WaveUp({ fill: _fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
      <defs>
        <linearGradient id="wgu" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7DC242" />
          <stop offset="100%" stopColor="#29ABE2" />
        </linearGradient>
      </defs>
      <path d="M0,24 C360,0 1080,48 1440,24 L1440,0 L0,0 Z" fill="url(#wgu)" />
    </svg>
  );
}

export function AboutPage() {
  const values = [
    {
      title: 'Quality First',
      description: 'Unwavering commitment to delivering premium quality products that meet and exceed global standards.',
      accent: '#7DC242',
      gradientFrom: '#7DC242', gradientTo: '#29ABE2',
      shadow: 'rgba(125,194,66,0.25)',
      ring: 'rgba(125,194,66,0.12)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="18,4 22,13 32,13 24,20 27,30 18,24 9,30 12,20 4,13 14,13"/>
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Understanding and exceeding customer expectations through personalized packaging solutions.',
      accent: '#29ABE2',
      gradientFrom: '#7DC242', gradientTo: '#29ABE2',
      shadow: 'rgba(125,194,66,0.25)',
      ring: 'rgba(125,194,66,0.12)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13" cy="12" r="4"/>
          <circle cx="23" cy="12" r="4"/>
          <path d="M4 30c0-5 4-8 9-8"/>
          <path d="M32 30c0-5-4-8-9-8"/>
          <path d="M13 22c2-1 4-1 5 0 5 2 8 5 8 8H10c0-3 1-6 3-8z"/>
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement and adoption of the latest blow moulding technologies.',
      accent: '#29ABE2',
      gradientFrom: '#7DC242', gradientTo: '#29ABE2',
      shadow: 'rgba(125,194,66,0.25)',
      ring: 'rgba(125,194,66,0.12)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 4a10 10 0 0 1 6 18v2H12v-2A10 10 0 0 1 18 4z"/>
          <line x1="14" y1="28" x2="22" y2="28"/>
          <line x1="15" y1="32" x2="21" y2="32"/>
          <line x1="18" y1="4" x2="18" y2="1"/>
          <line x1="28" y1="14" x2="31" y2="14"/>
          <line x1="8" y1="14" x2="5" y2="14"/>
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description: 'Sustainable growth driven by eco-conscious manufacturing and responsible practices.',
      accent: '#7DC242',
      gradientFrom: '#7DC242', gradientTo: '#29ABE2',
      shadow: 'rgba(125,194,66,0.25)',
      ring: 'rgba(125,194,66,0.12)',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 32V18"/>
          <path d="M18 18C18 18 10 16 8 8c6 0 10 4 10 10z"/>
          <path d="M18 18C18 18 26 14 28 6c-6 1-10 6-10 12z"/>
          <path d="M12 32h12"/>
        </svg>
      ),
    },
  ];


  const certTags = ['HDPE Containers', 'Blow Moulding', 'Induction Sealing', '100% Leak Tested'];

  return (
    <div className="min-h-screen" style={{ background: '#EBF5FC' }}>

      {/* ── HEADER ── */}
      <div className="text-white pt-14 pb-0 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #29ABE2 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow-xl">
              <img src="/logo.png" alt="Hisahi Plastochem" style={{ width: 72, height: 72, objectFit: 'contain' }} />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">About Hisahi Plastrochem</h1>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto">
            Leading manufacturer of high-quality rigid plastic packaging solutions
          </p>
          <p className="mt-2 text-white/70 text-sm tracking-widest uppercase">Silvassa · Est. 2010</p>
        </div>
        <WaveDown fill="#EBF5FC" />
      </div>

      {/* ── OUR STORY ── */}
      <div className="bg-white py-16" style={{ borderBottom: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#29ABE2' }}>Who We Are</p>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a4d1a' }}>Our Story</h2>
              <div className="space-y-4 leading-relaxed" style={{ color: '#3a5a5a' }}>
                <p>
                  Hisahi Plastrochem stands as a beacon of excellence in the plastic packaging
                  industry. Located in Silvassa, our state-of-the-art manufacturing facility
                  combines advanced blow moulding technology with skilled craftsmanship to
                  deliver superior quality HDPE containers.
                </p>
                <p>
                  With a focus on precision engineering and quality control, we have established
                  ourselves as a trusted partner for businesses across multiple industries —
                  from agro chemicals and lubricating oils to edible oils and personal care.
                </p>
                <p>
                  Every container we produce is 100% leak-tested and induction-seal ready,
                  ensuring our customers receive packaging that performs.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {certTags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: '#e8f5e8', color: '#1a6c1a', border: '1px solid #b0ddb0' }}>
                    ✓ {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: '#e8f5f9', color: '#006080', border: '1px solid #b0dde8' }}>
                  GST · 26AAGFH2059E1ZM
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: '#e8f5f9', color: '#006080', border: '1px solid #b0dde8' }}>
                  PAN · AAGFH2059E
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #d0eef8', boxShadow: '0 8px 32px rgba(41,171,226,0.18)' }}>
                <img
                  src="/factory.jpeg"
                  alt="Hisahi Plastrochem facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <div className="py-0" style={{ background: '#EBF5FC' }}>
        <WaveUp fill="#ffffff" />
        <div className="py-12" style={{ background: '#EBF5FC' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-10">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#29ABE2' }}>What Drives Us</p>
                <h2 className="text-3xl font-bold" style={{ color: '#1a4d1a' }}>Mission &amp; Vision</h2>
              </div>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <FadeUp>
                <div className="relative rounded-3xl max-w-3xl mx-auto text-center px-10 py-14 bg-white h-full" style={{ boxShadow: '0 12px 48px rgba(125,194,66,0.15), 0 2px 8px rgba(41,171,226,0.1)', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #7DC242, #29ABE2) border-box', border: '2px solid transparent' }}>
                  <div className="flex justify-center mb-2">
                    <span className="font-serif select-none" style={{ color: '#7DC242', opacity: 0.2, fontSize: '8rem', lineHeight: 0.8 }}>"</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#7DC242' }}>Our Mission</p>
                  <blockquote className="text-xl md:text-2xl font-bold italic mb-6 leading-snug" style={{ color: '#1a4d1a' }}>
                    To be best at satisfying customer needs with innovative and tailored packaging products.
                  </blockquote>
                  <div className="mx-auto mb-6 w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7DC242, #29ABE2)' }} />
                  <p className="text-base leading-relaxed" style={{ color: '#3a6060' }}>
                    We strive to understand our customers' unique requirements and deliver customized solutions that exceed expectations through continuous innovation and unwavering quality standards.
                  </p>
                </div>
              </FadeUp>
              {/* Vision */}
              <FadeUp delay={0.15}>
                <div className="relative rounded-3xl max-w-3xl mx-auto text-center px-10 py-14 bg-white h-full" style={{ boxShadow: '0 12px 48px rgba(41,171,226,0.15), 0 2px 8px rgba(125,194,66,0.1)', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #29ABE2, #7DC242) border-box', border: '2px solid transparent' }}>
                  <div className="flex justify-center mb-2">
                    <span className="font-serif select-none" style={{ color: '#29ABE2', opacity: 0.2, fontSize: '8rem', lineHeight: 0.8 }}>"</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#29ABE2' }}>Our Vision</p>
                  <blockquote className="text-xl md:text-2xl font-bold italic mb-6 leading-snug" style={{ color: '#1a4d1a' }}>
                    To become India's most trusted and innovative plastic packaging solutions provider.
                  </blockquote>
                  <div className="mx-auto mb-6 w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #29ABE2, #7DC242)' }} />
                  <p className="text-base leading-relaxed" style={{ color: '#3a6060' }}>
                    We envision a future where Hisahi Plastrochem is synonymous with excellence, reliability, and environmental responsibility in the packaging industry.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
        <WaveDown fill="#ffffff" />
      </div>

      {/* ── CORE VALUES ── */}
      <div className="bg-white py-16" style={{ borderBottom: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#29ABE2' }}>What We Stand For</p>
              <h2 className="text-3xl font-bold" style={{ color: '#1a4d1a' }}>Our Core Values</h2>
            </div>
          </FadeUp>
          <StaggerList className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {values.map((value) => (
              <StaggerItem key={value.title} className="h-full">
                <div className="flex flex-col items-center text-center group bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: `1px solid ${value.accent}30` }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${value.gradientFrom}, ${value.gradientTo})`,
                      boxShadow: `0 0 0 6px ${value.ring}, 0 8px 24px ${value.shadow}`,
                    }}
                  >
                    {value.icon}
                  </div>
                  <div className="w-10 h-0.5 mb-4" style={{ background: 'linear-gradient(90deg, #7DC242, #29ABE2)' }} />
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#1a4d1a' }}>{value.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#3a5a5a' }}>{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="py-14 relative" style={{ background: '#E3F2FA' }}>
        {/* subtle network dot background */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="30%" r="3" fill="#7DC242"/><circle cx="30%" cy="70%" r="3" fill="#29ABE2"/>
          <circle cx="50%" cy="20%" r="3" fill="#7DC242"/><circle cx="70%" cy="60%" r="3" fill="#29ABE2"/>
          <circle cx="90%" cy="35%" r="3" fill="#7DC242"/>
          <line x1="10%" y1="30%" x2="30%" y2="70%" stroke="#7DC242" strokeWidth="1"/>
          <line x1="30%" y1="70%" x2="50%" y2="20%" stroke="#29ABE2" strokeWidth="1"/>
          <line x1="50%" y1="20%" x2="70%" y2="60%" stroke="#7DC242" strokeWidth="1"/>
          <line x1="70%" y1="60%" x2="90%" y2="35%" stroke="#29ABE2" strokeWidth="1"/>
        </svg>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { to: 15, suffix: '+', label: 'Years of Excellence' },
              { to: 300, suffix: '+', label: 'Happy Clients' },
              { to: 22, suffix: '+', label: 'Product Variants' },
              { to: 70, suffix: ' MT', label: 'Monthly Capacity' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-2xl px-6 py-8 text-center flex flex-col items-center bg-white" style={{ border: '1px solid #d0eef8', boxShadow: '0 4px 16px rgba(41,171,226,0.08)' }}>
                  <div className="text-5xl font-black mb-2 tracking-tight leading-none" style={{ color: '#7DC242' }}>
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <svg width="60" height="10" viewBox="0 0 60 10" className="mb-3 opacity-60">
                    <path d="M0,5 C10,0 15,10 25,5 C35,0 40,10 50,5 C55,2 58,4 60,5" fill="none" stroke="#7DC242" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#3a5a5a' }}>{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      {/* ── OUR JOURNEY ── */}
      <div style={{ background: '#EBF5FC', borderTop: '2px solid #d0eef8' }}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#29ABE2' }}>Since 2010</p>
                <h2 className="text-3xl font-bold" style={{ color: '#1a4d1a' }}>Our Journey</h2>
                <div className="mt-3 mx-auto w-16 h-0.5" style={{ background: 'linear-gradient(90deg, #7DC242, #29ABE2)' }} />
              </div>
            </FadeUp>
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  year: '2010', title: 'Foundation', description: 'Established Hisahi Plastochem with a vision to revolutionize plastic packaging in India.',
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="16" width="28" height="16" rx="1"/>
                      <path d="M2 32h32"/>
                      <path d="M12 32V22h12v10"/>
                      <path d="M18 4L4 16h28L18 4z"/>
                      <rect x="15" y="22" width="6" height="10"/>
                    </svg>
                  )
                },
                {
                  year: '2015', title: 'Expansion', description: 'Expanded facility and added advanced blow moulding machines to meet growing demand.',
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4,28 12,18 20,22 32,8"/>
                      <polyline points="24,8 32,8 32,16"/>
                      <circle cx="8" cy="28" r="2.5" fill="white" stroke="none"/>
                      <circle cx="20" cy="22" r="2.5" fill="white" stroke="none"/>
                      <circle cx="12" cy="18" r="2.5" fill="white" stroke="none"/>
                    </svg>
                  )
                },
                {
                  year: '2020', title: 'Modernization', description: 'Implemented automated quality control and 100% leak-testing systems across production.',
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="18" r="5"/>
                      <path d="M18 4v4M18 28v4M4 18h4M28 18h4"/>
                      <path d="M8.2 8.2l2.8 2.8M25 25l2.8 2.8M8.2 27.8l2.8-2.8M25 11l2.8-2.8"/>
                    </svg>
                  )
                },
                {
                  year: '2025', title: 'Industry Leader', description: 'Recognized as a leading manufacturer in rigid plastic packaging across India.',
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="18,4 22,14 33,14 24,21 27,32 18,25 9,32 12,21 3,14 14,14"/>
                    </svg>
                  )
                },
              ].map((item) => (
                <StaggerItem key={item.year}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Circle icon */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, #7DC242, #29ABE2)',
                        boxShadow: '0 0 0 6px rgba(125,194,66,0.12), 0 8px 24px rgba(125,194,66,0.25)',
                      }}
                    >
                      {item.icon}
                    </div>
                    {/* Year badge */}
                    <span className="text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: '#e8f5e8', color: '#1a6c1a', border: '1px solid #b0ddb0' }}>
                      {item.year}
                    </span>
                    {/* Divider */}
                    <div className="w-10 h-0.5 mb-4" style={{ background: 'linear-gradient(90deg, #7DC242, #29ABE2)' }} />
                    <h3 className="font-bold text-lg mb-3" style={{ color: '#1a4d1a' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#3a5a5a' }}>{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </div>

      {/* ── LOCATION ── */}
      <div className="bg-white py-16" style={{ borderTop: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-8">

              <h2 className="text-3xl font-bold mb-2" style={{ color: '#1a4d1a' }}>Our Location</h2>
              <p style={{ color: '#3a6060' }}>Strategically located in Silvassa, India</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-2xl overflow-hidden max-w-2xl mx-auto" style={{ border: '2px solid #d0eef8', boxShadow: '0 8px 32px rgba(41,171,226,0.15)' }}>
              <iframe
                title="Hisahi Plastrochem Location"
                src="https://maps.google.com/maps?q=Plot+No-16+Phase-II+Government+Industrial+Estate+Piparia+Silvassa+Dadra+and+Nagar+Haveli+396230&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="px-6 py-4 flex items-start gap-3" style={{ background: '#E3F2FA' }}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#7DC242' }} />
                <div>
                  <p className="font-semibold" style={{ color: '#1a4d1a' }}>Hisahi Plastrochem</p>
                  <p className="text-sm" style={{ color: '#3a6060' }}>
                    Plot No-16, Phase-II, Govt. Industrial Estate, Piparia, Silvassa – 396230, U.T. of Dadra &amp; Nagar Haveli
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

    </div>
  );
}
