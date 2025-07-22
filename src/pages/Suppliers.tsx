import React from 'react';
import { Globe, Award, Truck, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { url } from 'inspector';

export const Suppliers: React.FC = () => {
  // Add page-specific SEO and structured data
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Our Suppliers & Partners - Global Network | Vishal Creations";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet our trusted global suppliers and strategic partners. Quality raw materials sourced from verified suppliers worldwide with ISO certifications.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Suppliers & Partners",
      "description": "Global network of trusted suppliers and strategic partners for premium plastic raw materials.",
      "url": "https://vishalcreations.com/suppliers"
    });
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const suppliers = [
    {
      name: 'Global Polyacetal',
      location: 'Japan',
      specialization: 'Plastic Raw Materials',
      partnership: '2020',
      certification: 'ISO 9001:2015',
      description: 'Leading supplier of high-quality plastic raw materials and polymer solutions.',
      logo: '/Global Poly.png',
      url: 'https://www.gpac.co.jp/en/'
    },
    {
      name: 'Mitsubishi Engineering - Plastics Corporation',
      location: 'Japan',
      specialization: 'Engineering Plastics',
      partnership: '2018',
      certification: 'ISO 14001',
      description: 'Global leader in petrochemicals and diversified manufacturing with innovative polymer solutions.',
      logo: '/Miti.png'
    },
    {
      name: 'SEKISUI CHEMICAL CO., LTD.',
      location: 'Japan / Thailand',
      specialization: 'Plastic and Chemical Materials',
      partnership: '2023',
      certification: 'ISO 9001:2015',
      description: 'Leading manufacturer of advanced foam materials and cellular plastic solutions for various industries through their Advancell division.',
      logo: ['/Sekisui.png','/Ske 2.png'],
    }
  ];

  const partnershipBenefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to premium materials from trusted suppliers worldwide.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All partners are ISO certified with proven track records.'
    },
    {
      icon: Truck,
      title: 'Reliable Supply',
      description: 'Consistent delivery schedules and backup supply chains.'
    },
    {
      icon: CheckCircle,
      title: 'Verified Partners',
      description: 'Thoroughly vetted suppliers with long-term partnerships.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Global Partners</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Building strong partnerships with trusted suppliers worldwide to deliver premium quality materials.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Our Partnerships Matter</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic alliances that ensure quality, reliability, and innovation in every delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-4 flex justify-center">
                  <benefit.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Trusted Suppliers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our global network of suppliers who help us maintain the highest quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suppliers.map((supplier, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* Logo Section - Fixed height container */}
                <div className="h-40 flex justify-center items-center bg-gray-50 p-2">
                  {Array.isArray(supplier.logo) ? (
                    <div className="flex justify-center items-center gap-2 w-full h-full">
                      {supplier.logo.map((logoSrc, i) => (
                        <img
                          key={i}
                          src={logoSrc}
                          alt={supplier.name + ' logo ' + (i + 1)}
                          className="h-30 max-w-[100px] object-contain"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className={`object-contain ${supplier.name === 'Mitsubishi Engineering - Plastics Corporation' ? 'h-42 max-w-[200px]' : 'h-32 max-w-[200px]'}`}
                    />
                  )}
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{supplier.name}</h3>
                  
                  <div className="flex items-center justify-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">{supplier.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600 mb-3">
                    <Calendar size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Partner since {supplier.partnership}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {supplier.certification}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-1">{supplier.description}</p>
                  
                  <div className="border-t pt-4 mt-auto">
                    <h4 className="font-semibold text-gray-700 mb-2">Specialization:</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {supplier.specialization}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our supplier network spans across continents, ensuring diverse sourcing and risk mitigation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Suppliers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Certified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Partnership?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join our global network of suppliers and partners. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact#send-message" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 block text-center">
              Become a Partner
            </a>
            <a href="/contact#send-message" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 block text-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
