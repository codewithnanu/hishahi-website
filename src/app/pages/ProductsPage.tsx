import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Filter } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function ProductsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';

  const industries = [
    'all',
    'Agro Chemicals',
    'Lubricating Oils',
    'Petrochemicals & Additives',
    'Industrial Chemicals',
    'Edible Oils',
    'Food Industry',
    'Water Treatment',
    'Automobile Components',
    'Personal Care / Hygiene',
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesIndustry = selectedIndustry === 'all' || product.industries.includes(selectedIndustry);
      const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesIndustry && matchesSearch;
    });
  }, [selectedIndustry, searchQuery]);

  return (
    <div className="min-h-screen" style={{ background: '#EBF5FC' }}>
      {/* Header */}
      <div className="text-white py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #29ABE2 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="productsWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7DC242" />
                <stop offset="100%" stopColor="#29ABE2" />
              </linearGradient>
            </defs>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="url(#productsWave)"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-base sm:text-xl text-white/90">
            Browse our comprehensive range of plastic containers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm w-full justify-center"
          >
            <Filter className="w-4 h-4" />
            <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0`}
          >
            <div className="bg-white rounded-xl p-6 sticky top-20" style={{ border: '1px solid #d0eef8', boxShadow: '0 2px 10px rgba(41,171,226,0.1)' }}>
              <h3 className="font-semibold mb-4" style={{ color: '#1a4d1a' }}>Filter by Industry</h3>
              <div className="space-y-2">
                {industries.map((industry) => (
                  <label key={industry} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="industry"
                      value={industry}
                      checked={selectedIndustry === industry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      style={{ accentColor: '#7DC242' }}
                    />
                    <span className="text-sm" style={{ color: '#1a3a1a' }}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </span>
                  </label>
                ))}
              </div>
              {selectedIndustry !== 'all' && (
                <button
                  onClick={() => setSelectedIndustry('all')}
                  className="mt-6 w-full px-4 py-2 rounded font-medium transition-colors"
                  style={{ background: '#e8f5f9', color: '#006080', border: '1px solid #d0eef8' }}
                >
                  Reset Filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p style={{ color: '#3a6060' }}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center" style={{ border: '1px solid #d0eef8' }}>
                <p className="text-lg mb-2" style={{ color: '#3a6060' }}>No products found</p>
                <p className="text-sm" style={{ color: '#6a9090' }}>Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── OTHER PRODUCTS SHOWCASE ── */}
      <div className="py-16" style={{ background: '#EBF5FC', borderTop: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#29ABE2' }}>More from Hisahi</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a4d1a' }}>Some of Our Other Products</h2>
            <div className="mx-auto w-16 h-0.5" style={{ background: 'linear-gradient(90deg, #7DC242, #29ABE2)' }} />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '/products/page9_img2.jpeg',
              '/products/page9_img3.jpeg',
              '/products/page9_img4.jpeg',
              '/products/page9_img5.jpeg',
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden group flex flex-col bg-white w-36 sm:w-48 md:w-52"
                style={{ border: '1px solid #d0eef8' }}
              >
                <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                  <img
                    src={src}
                    alt={`Other product ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    className="group-hover:scale-110"
                  />
                </div>
                <a
                  href={`https://wa.me/919137731012?text=${encodeURIComponent(`Hi, I'm interested in ordering the product shown in image ${i + 1} from your catalogue. Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ background: '#25D366', color: '#fff' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.527 5.845L.057 23.882l6.19-1.443A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.722.868.934-3.41-.235-.373A9.818 9.818 0 1 1 12 21.818z"/></svg>
                  Order on WhatsApp
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: '#3a6060' }}>
            Custom shapes and sizes available — <a href="/contact" className="underline" style={{ color: '#7DC242' }}>contact us</a> for enquiries.
          </p>
        </div>
      </div>
    </div>
  );
}
