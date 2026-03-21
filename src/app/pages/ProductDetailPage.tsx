import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';

const WA_NUMBER = '919137731012';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#eef8d8' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a4d1a' }}>Product not found</h2>
          <Link to="/products" className="hover:underline" style={{ color: '#7DC242' }}>Back to Products</Link>
        </div>
      </div>
    );
  }

  const lastColLabel = product.specLastColLabel ?? 'Plug / Inner';
  const waMsg = encodeURIComponent(`Hello! I would like to place an order for *${product.name}*. Please share pricing and availability details.`);

  return (
    <div className="min-h-screen" style={{ background: '#EBF5FC' }}>

      {/* Breadcrumb */}
      <div className="bg-white" style={{ borderBottom: '2px solid #a8c878' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: '#3a6060' }}>
            <Link to="/" className="hover:underline" style={{ color: '#7DC242' }}>Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline" style={{ color: '#7DC242' }}>Products</Link>
            <span>/</span>
            <span style={{ color: '#1a3a1a' }}>{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mb-6 font-medium transition-colors"
          style={{ color: '#7DC242' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left — Floating Image */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl overflow-hidden w-full"
              style={{ border: '2px solid #a8c878', boxShadow: '0 8px 40px rgba(46,170,46,0.22)' }}
            >
              <div className="aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              animate={{ scaleX: [1, 0.75, 1], opacity: [0.35, 0.15, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '60%', height: '18px', borderRadius: '50%', marginTop: '12px',
                background: 'radial-gradient(ellipse, rgba(46,170,46,0.4) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Right — Title + Table + WhatsApp */}
          <div className="flex flex-col gap-5">

            {/* Product name + industries */}
            <div>
              <h1 className="text-2xl font-bold mb-3" style={{ color: '#1a3a1a' }}>{product.name}</h1>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: '#c8e89a', color: '#1a3a1a', border: '1px solid #a8c878' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Spec Table */}
            <div className="rounded-xl overflow-hidden" style={{ border: '2px solid #b8d8a0', boxShadow: '0 2px 12px rgba(46,170,46,0.12)' }}>
              <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
                <h2 className="text-sm font-bold text-white tracking-wide">Specifications</h2>
              </div>
              <div>
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                  <thead>
                    <tr>
                      <th className="text-left font-semibold px-3 py-2.5"
                        style={{ background: '#c8e89a', color: '#1a3a1a', border: '1px solid #a8c878', width: '38%' }}>
                        Capacity
                      </th>
                      {product.specRows.map((row) => (
                        <th key={row.capacity} className="text-center font-semibold px-2 py-2.5"
                          style={{ background: '#c8e89a', color: '#1a3a1a', border: '1px solid #a8c878', wordBreak: 'break-word' }}>
                          {row.capacity}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2.5 font-medium leading-snug"
                        style={{ background: '#EBF5FC', color: '#1a3a1a', border: '1px solid #b8d4e8' }}>
                        Container Total Height – With Cap in mm
                      </td>
                      {product.specRows.map((row) => (
                        <td key={row.capacity} className="text-center px-2 py-2"
                          style={{ background: '#ffffff', color: '#1a3a1a', border: '1px solid #b8d4e8' }}>
                          {row.heightWithCap}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-medium leading-snug"
                        style={{ background: '#EBF5FC', color: '#1a3a1a', border: '1px solid #b8d4e8' }}>
                        Neck Inner Diameter in mm
                      </td>
                      {product.specRows.map((row) => (
                        <td key={row.capacity} className="text-center px-2 py-2"
                          style={{ background: '#ffffff', color: '#1a3a1a', border: '1px solid #b8d4e8' }}>
                          {row.neckDiameter}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-medium leading-snug"
                        style={{ background: '#EBF5FC', color: '#1a3a1a', border: '1px solid #b8d4e8' }}>
                        {lastColLabel} availability
                      </td>
                      {product.specRows.map((row) => (
                        <td key={row.capacity} className="text-center px-2 py-2 font-semibold"
                          style={{ background: '#ffffff', color: row.plugInner ? '#1a6c1a' : '#991c1c', border: '1px solid #b8d4e8' }}>
                          {row.plugInner ? 'YES' : 'NO'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-2 text-xs" style={{ background: '#EBF5FC', color: '#2a6080', borderTop: '1px solid #b8d4e8' }}>
                Note: Induction sealing is available in all containers.
              </div>
            </div>

            {/* WhatsApp Order Button */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
              style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order {product.name} via WhatsApp
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
