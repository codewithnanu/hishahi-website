import { Link } from 'react-router';

const rawMaterialRows = [
  { sr: 1, type: 'HDPE – Marlex HHM-5502BN',    supplier: 'Overseas Polymer',           localImported: 'Imported', duty: 'As applicable' },
  { sr: 2, type: 'HDPE – Reliance – 54 GB 012', supplier: 'Reliance Industries Limited', localImported: 'Local',    duty: 'As applicable' },
  { sr: 3, type: 'HDPE – Reliance – B56003',     supplier: 'Reliance Industries Limited', localImported: 'Local',    duty: 'As applicable' },
  { sr: 4, type: 'HDPE–Reliance–I 50 Ma180',     supplier: 'Reliance Industries Limited', localImported: 'Local',    duty: 'As applicable' },
  { sr: 5, type: 'HDPE–GAIL–B52 A 003A',         supplier: 'Gail India Limited',          localImported: 'Local',    duty: 'As applicable' },
  { sr: 6, type: 'LDPE – Reliance - 16 MA 400',  supplier: 'Reliance Industries Limited', localImported: 'Local',    duty: 'As applicable' },
  { sr: 7, type: 'PP – SRM 120',                 supplier: 'Reliance Industries Limited', localImported: 'Local',    duty: 'As applicable' },
];

const machineRows = [
  { sr: 1,  desc: 'Blow Moulding Machine',      qty: 2, make: 'Jagmohan',        size: '1L',          viewStrip: 'YES', parison: '30 Point Ultra'  },
  { sr: 2,  desc: 'Blow Moulding Machine',      qty: 1, make: 'Jagmohan',        size: '3L',          viewStrip: 'YES', parison: '200 Point B&R'   },
  { sr: 3,  desc: 'Blow Moulding Machine',      qty: 1, make: 'Jagmohan',        size: '5L',          viewStrip: 'YES', parison: '200 Point B&R'   },
  { sr: 4,  desc: 'Blow Moulding Machine',      qty: 1, make: 'CMP',             size: '0.5L',        viewStrip: 'NO',  parison: '3 Point Ultra'   },
  { sr: 5,  desc: 'Blow Moulding Machine',      qty: 2, make: 'CMP',             size: '0.2L',        viewStrip: 'NO',  parison: '3 Point Ultra'   },
  { sr: 6,  desc: 'Injection Moulding Machine', qty: 2, make: 'Kapson Resources',size: '140 MT & 100 MT', viewStrip: '',parison: ''                },
  { sr: 7,  desc: 'Leak detectors',             qty: 3, make: 'Leacon',          size: '',            viewStrip: '',    parison: ''                },
  { sr: 8,  desc: 'Automatic Deflashing System',qty: 2, make: 'Modtech',         size: '',            viewStrip: '',    parison: ''                },
  { sr: 9,  desc: 'Trimmers',                   qty: 1, make: 'Modtech',         size: '',            viewStrip: '',    parison: ''                },
  { sr: 10, desc: 'Semi-Automatic Printer',     qty: 1, make: 'New Tech',        size: '',            viewStrip: '',    parison: ''                },
  { sr: 11, desc: 'Manual Printers',            qty: 1, make: 'S.K. Enterprises',size: '',            viewStrip: '',    parison: ''                },
];

const qualityProcess = [
  { step: '01', title: 'Raw Material Inspection',  description: 'Quality check of incoming HDPE/PP granules to ensure compliance' },
  { step: '02', title: 'Production Monitoring',    description: 'Continuous monitoring of blow moulding parameters' },
  { step: '03', title: 'Leak Testing',             description: '100% leak testing of every container before packaging' },
  { step: '04', title: 'Visual Inspection',        description: 'Thorough visual check for defects and surface finish' },
  { step: '05', title: 'Final Quality Check',      description: 'Comprehensive quality audit before dispatch' },
];

export function InfrastructurePage() {
  return (
    <div className="min-h-screen" style={{ background: '#EBF5FC' }}>

      {/* ── Header ── */}
      <div className="relative overflow-hidden text-white py-14" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #29ABE2 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="infraWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#29ABE2" />
                <stop offset="100%" stopColor="#7DC242" />
              </linearGradient>
            </defs>
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="url(#infraWave)"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Manufacturing Infrastructure</h1>
          <p className="text-base sm:text-xl text-white/90 max-w-3xl">
            State-of-the-art facility equipped with advanced technology for superior product quality
          </p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-white" style={{ borderBottom: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '70 MT',  label: 'Monthly Capacity',   sub: 'Raw material processing/month' },
              { value: '100%',   label: 'Leak Tested',        sub: 'Every product tested before dispatch' },
              { value: '11',     label: 'Machine Types',      sub: 'Advanced production equipment' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-4xl font-bold mb-1" style={{ color: '#7DC242' }}>{s.value}</div>
                <div className="font-semibold mb-1" style={{ color: '#1a3a1a' }}>{s.label}</div>
                <div className="text-sm" style={{ color: '#3a6060' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EXISTING MACHINE DETAILS table ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 uppercase" style={{ color: '#1a3a1a', borderBottom: '3px solid #7DC242' }}>
          Existing Machine Details
        </h2>

        <div className="bg-white rounded-xl overflow-hidden" style={{ border: '1px solid #d0eef8', boxShadow: '0 4px 16px rgba(41,171,226,0.12)' }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
                  {['Sr. No.', 'Description of Machine', 'Quantity', 'Make', 'Size / Capacity', 'View Strip Arrangement', 'Multipoint Parison Programmer'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-white font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {machineRows.map((row, i) => (
                  <tr key={row.sr} style={{ background: i % 2 === 0 ? '#ffffff' : '#E3F2FA', borderBottom: '1px solid #e0f0f8' }}>
                    <td className="px-4 py-3 font-medium text-center" style={{ color: '#1a3a1a' }}>{row.sr}</td>
                    <td className="px-4 py-3 font-medium" style={{ color: '#1a3a1a' }}>{row.desc}</td>
                    <td className="px-4 py-3 text-center" style={{ color: '#1a3a1a' }}>{row.qty}</td>
                    <td className="px-4 py-3" style={{ color: '#1a3a1a' }}>{row.make}</td>
                    <td className="px-4 py-3" style={{ color: '#1a3a1a' }}>{row.size}</td>
                    <td className="px-4 py-3 text-center">
                      {row.viewStrip ? (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={row.viewStrip === 'YES'
                            ? { background: '#e8f5e8', color: '#1a6c1a', border: '1px solid #b0ddb0' }
                            : { background: '#fef0f0', color: '#991c1c', border: '1px solid #fcc' }}>
                          {row.viewStrip}
                        </span>
                      ) : '—'}
                    </td>
                    <td className="px-4 py-3" style={{ color: '#3a6060' }}>{row.parison || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── SOURCES OF RAW MATERIAL table ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 uppercase" style={{ color: '#1a3a1a', borderBottom: '3px solid #7DC242' }}>
          Sources of Raw Material
        </h2>
        <div className="bg-white rounded-xl overflow-hidden" style={{ border: '1px solid #d0eef8', boxShadow: '0 4px 16px rgba(41,171,226,0.12)' }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
                  {['Sr. No', 'Type of Raw Material', 'Supplier', 'Local / Imported', 'Duty Structure'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-white font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rawMaterialRows.map((row, i) => (
                  <tr key={row.sr} style={{ background: i % 2 === 0 ? '#ffffff' : '#E3F2FA', borderBottom: '1px solid #e0f0f8' }}>
                    <td className="px-4 py-3 font-medium text-center" style={{ color: '#1a3a1a' }}>{row.sr}</td>
                    <td className="px-4 py-3 font-medium" style={{ color: '#1a3a1a' }}>{row.type}</td>
                    <td className="px-4 py-3" style={{ color: '#1a3a1a' }}>{row.supplier}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={row.localImported === 'Imported'
                          ? { background: '#fef3e2', color: '#92400e', border: '1px solid #fcd34d' }
                          : { background: '#e8f5e8', color: '#1a6c1a', border: '1px solid #b0ddb0' }}>
                        {row.localImported}
                      </span>
                    </td>
                    <td className="px-4 py-3" style={{ color: '#3a6060' }}>{row.duty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Green + teal wave divider (like brochure) ── */}
      <div className="relative h-24 overflow-hidden">
        <svg viewBox="0 0 1440 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M0,60 C300,20 700,90 1000,50 C1200,20 1350,70 1440,55 L1440,96 L0,96 Z" fill="#A5D63A" opacity="0.7"/>
          <path d="M0,75 C200,40 600,100 900,65 C1100,40 1300,80 1440,68 L1440,96 L0,96 Z" fill="#29ABE2" opacity="0.5"/>
        </svg>
      </div>

      {/* ── INFRASTRUCTURE:- section (sky blue like brochure) ── */}
      <div style={{ background: 'linear-gradient(180deg, #cce8f4 0%, #d8f0e0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold mb-6 uppercase" style={{ color: '#1a1a2e' }}>
            Infrastructure:-
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed" style={{ color: '#1a1a2e' }}>
            <div>
              <p className="mb-4">
                We have a state of the art setup for manufacturing best quality Plastic Containers. We have advanced machines equipped with <strong>200 Point B&R multi point parison programmers</strong> to maintain uniform thickness distribution for the containers.
              </p>
              <p className="mb-4">
                Machines are also equipped with view strip arrangements and auto deflashing systems. All the moulded products are passed through Leak detectors to make sure that all the containers bearing our brand name never leaks.
              </p>
              <p>
                We also have qualified industry leading talents to take care of our operations and showcase our products.
              </p>
            </div>
            <div>
              <p className="mb-4">
                We also have screen printing set up containing automatic and manual screen printers capable of <strong>five color printing</strong> over containers.
              </p>
              <p className="mb-6">
                Our present capacity is to convert <strong>70 MT of raw material (HDPE/PP granules) per month</strong>.
              </p>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(46,170,46,0.3)' }}>
                <p className="font-bold text-lg mb-1" style={{ color: '#1a6c1a' }}>Production Capacity</p>
                <p className="text-3xl font-bold mb-1" style={{ color: '#1a3a1a' }}>70 MT / Month</p>
                <p className="text-sm" style={{ color: '#3a6060' }}>Raw material (HDPE/PP granules) processing capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quality Control Process ── */}
      <div className="bg-white py-14" style={{ borderTop: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#1a4d1a' }}>Quality Control Process</h2>
            <p style={{ color: '#3a6060' }}>Our rigorous quality control ensures every product meets the highest standards</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {qualityProcess.map((p, i) => (
              <div key={p.step} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 text-white text-xl font-bold relative z-10"
                  style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
                  {p.step}
                </div>
                <h3 className="font-semibold mb-1 text-sm" style={{ color: '#1a3a1a' }}>{p.title}</h3>
                <p className="text-xs" style={{ color: '#3a6060' }}>{p.description}</p>
                {i < qualityProcess.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 z-0" style={{ background: 'rgba(46,170,46,0.25)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="relative overflow-hidden text-white py-14" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #29ABE2 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Visit Our Facility?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a tour of our state-of-the-art manufacturing facility in Silvassa
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-colors"
            style={{ background: 'rgba(255,255,255,0.25)', border: '2px solid rgba(255,255,255,0.7)' }}
          >
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
}
