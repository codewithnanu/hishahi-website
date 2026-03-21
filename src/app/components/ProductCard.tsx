import { Link } from 'react-router';
import { Eye, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

const WA_NUMBER = '919137731012';
function waLink(productName: string) {
  const msg = `Hello! I would like to place an order for *${productName}*. Please share pricing and availability details.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      style={{
        border: '2px solid #a8c878',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 4px 16px rgba(125,194,66,0.10)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'box-shadow 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 32px rgba(125,194,66,0.22)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(125,194,66,0.10)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Image — object-contain so full product is always visible */}
      <Link to={`/products/${product.id}`} style={{ display: 'block', flexShrink: 0, overflow: 'hidden', background: '#f8fdf2', aspectRatio: '1 / 1', padding: '16px' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </Link>

      {/* Name — fixed 2-line height */}
      <div
        style={{
          background: 'linear-gradient(135deg, #c8e89a, #e8f7cc)',
          borderTop: '2px solid #a8c878',
          flexShrink: 0,
          minHeight: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px 16px',
        }}
      >
        <h3
          style={{
            color: '#1a3a1a',
            fontSize: '0.9rem',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: '1.35',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </h3>
      </div>

      {/* Sizes — fixed height, overflow hidden */}
      <div
        style={{
          borderTop: '1px solid #d8edba',
          flexShrink: 0,
          minHeight: '68px',
          padding: '10px 16px',
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#7DC242' }}>
          Available Sizes
        </p>
        <div className="flex flex-wrap gap-1">
          {product.capacities.map((cap) => (
            <span
              key={cap}
              style={{
                background: '#eef8d8',
                color: '#1a3a1a',
                border: '1px solid #b0d880',
                fontSize: '0.7rem',
                padding: '2px 8px',
                borderRadius: '999px',
                fontWeight: 500,
              }}
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons — pinned to bottom */}
      <div className="flex flex-col gap-2 mt-auto px-4 pb-4 pt-2">
        <Link
          to={`/products/${product.id}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)', color: '#fff' }}
        >
          <Eye className="w-4 h-4" />
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={waLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: '#25D366', color: '#fff' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
