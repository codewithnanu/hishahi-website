import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '919137731012';
const COMPANY_EMAIL = 'info@hisahiplastrochem.com';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildEmailBody = () =>
    [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.company ? `Company: ${formData.company}` : '',
      formData.industry ? `Industry: ${formData.industry}` : '',
      '',
      'Message:',
      formData.message,
    ]
      .filter((l) => l !== undefined && !(l === '' && !formData.company))
      .join('\n');

  const buildWhatsAppMessage = () =>
    [
      "Hello! I'd like to get in touch regarding your plastic containers.",
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.company ? `Company: ${formData.company}` : '',
      formData.industry ? `Industry: ${formData.industry}` : '',
      '',
      `Message: ${formData.message}`,
    ]
      .filter((l) => l !== undefined)
      .join('\n');

  const handleSendEmail = () => {
    const subject = `Inquiry from ${formData.name} – Hisahi Plastochem`;
    const body = buildEmailBody();
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(COMPANY_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  };

  const handleSendWhatsApp = () => {
    const message = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.message;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Plot No-16, Phase-II, Govt. Industrial Estate, Piparia, Silvassa – 396230',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 91377 31012',
    },
    {
      icon: Mail,
      title: 'Email',
      content: COMPANY_EMAIL,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '24 / 7',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: '#EBF5FC' }}>
      <Helmet>
        <title>Contact Us - Hisahi Plastochem | Mumbai</title>
        <meta name="description" content="Get in touch with Hisahi Plastochem for bulk plastic container orders, product inquiries, or partnership. Call, WhatsApp, or email us today." />
        <link rel="canonical" href="https://www.hisashiplastochem.in/contact" />
      </Helmet>
      {/* Header */}
      <div className="text-white py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #29ABE2 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="contactWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7DC242" />
                <stop offset="100%" stopColor="#29ABE2" />
              </linearGradient>
            </defs>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="url(#contactWave)"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-base sm:text-xl text-white/90">
            Get in touch with us for inquiries or partnership opportunities
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-white" style={{ borderBottom: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1a4d1a' }}>{info.title}</h3>
                  <p style={{ color: '#3a6060' }}>{info.content}</p>
                </div>
              );
            })}
          </div>

          {/* GST & PAN */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium" style={{ background: '#e8f5e8', color: '#1a4d1a', border: '1px solid #b0ddb0' }}>
              <span className="font-semibold">GST No:</span>
              <span>26AAGFH2059E1ZM</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium" style={{ background: '#e8f5e8', color: '#1a4d1a', border: '1px solid #b0ddb0' }}>
              <span className="font-semibold">PAN No:</span>
              <span>AAGFH2059E</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-4 sm:p-8" style={{ border: '1px solid #d0eef8', boxShadow: '0 2px 12px rgba(41,171,226,0.1)' }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a4d1a' }}>Send us a Message</h2>
              <p className="text-sm mb-6" style={{ color: '#3a6060' }}>
                Fill in your details and reach us instantly via Email or WhatsApp.
              </p>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#1a3a1a' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg text-sm"
                      style={{ border: '1px solid #c0dde8', outline: 'none' }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#1a3a1a' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg text-sm"
                      style={{ border: '1px solid #c0dde8', outline: 'none' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1" style={{ color: '#1a3a1a' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg text-sm"
                      style={{ border: '1px solid #c0dde8', outline: 'none' }}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1" style={{ color: '#1a3a1a' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg text-sm"
                      style={{ border: '1px solid #c0dde8', outline: 'none' }}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-1" style={{ color: '#1a3a1a' }}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg text-sm"
                    style={{ border: '1px solid #c0dde8', outline: 'none' }}
                  >
                    <option value="">Select Industry</option>
                    <option value="Agro Chemicals">Agro Chemicals</option>
                    <option value="Petrochemicals & Additives">Petrochemicals &amp; Additives</option>
                    <option value="Lubricating Oils">Lubricating Oils</option>
                    <option value="Industrial Chemicals">Industrial Chemicals</option>
                    <option value="Personal Care / Hygiene">Personal Care / Hygiene</option>
                    <option value="Water Treatment">Water Treatment</option>
                    <option value="Edible Oils">Edible Oils</option>
                    <option value="Automobile Components">Automobile Components</option>

                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#1a3a1a' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg text-sm"
                    style={{ border: '1px solid #c0dde8', outline: 'none', resize: 'vertical' }}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Two action buttons */}
                <div className="grid sm:grid-cols-2 gap-4 pt-1">
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={!isFormValid}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)', color: '#fff' }}
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={!isFormValid}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity disabled:opacity-50"
                    style={{ background: '#25D366', color: '#fff' }}
                  >
                    {/* WhatsApp icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send WhatsApp
                  </button>
                </div>

                <p className="text-xs text-center" style={{ color: '#6a9090' }}>
                  * Required fields. Buttons open your Email client or WhatsApp with your message pre-filled.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Contact */}
            <div className="rounded-xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
              <h3 className="text-xl font-bold mb-3">Reach Us Directly</h3>
              <p className="text-white/90 text-sm mb-4">
                Prefer a direct conversation? Contact us via email or WhatsApp anytime.
              </p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-3 bg-white/20 rounded-lg px-4 py-3 mb-3 hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Email</p>
                  <p className="text-sm font-medium">{COMPANY_EMAIL}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-4 py-3 hover:opacity-90 transition-opacity"
                style={{ background: '#25D366' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-80">WhatsApp</p>
                  <p className="text-sm font-medium">+91 91377 31012</p>
                </div>
              </a>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl p-6" style={{ border: '1px solid #d0eef8' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1a4d1a' }}>Why Partner With Us?</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Fast Response Time', desc: 'We respond to all inquiries within 24 hours' },
                  { title: 'Custom Solutions', desc: 'Tailored packaging for your specific needs' },
                  { title: 'Competitive Pricing', desc: 'Best value for premium quality products' },
                  { title: 'Reliable Delivery', desc: 'On-time delivery across India' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#7DC242' }} />
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1a4d1a' }}>{item.title}</p>
                      <p className="text-xs" style={{ color: '#3a6060' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
