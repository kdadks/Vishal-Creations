import React from 'react';
import { Shield, Award, Users, Target, Eye, Heart } from 'lucide-react';

export const About: React.FC = () => {
  // Add page-specific meta tags and structured data
  React.useEffect(() => {
    document.title = "About Vishal Creations - 15+ Years in Plastic Raw Materials | Company History";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Vishal Creations - 15+ years experience in plastic raw materials supply. ISO certified company serving 500+ manufacturers across India with PVC, PP, HDPE materials.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Vishal Creations",
      "description": "Learn about Vishal Creations - 15+ years experience in plastic raw materials supply in India.",
      "url": "https://vishalcreations.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Vishal Creations",
        "foundingDate": "2009",
        "numberOfEmployees": "50-100"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in all our products through rigorous testing and quality control processes.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional products and services that exceed customer expectations.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do, driving our continuous improvement and innovation.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Consistent delivery, transparent communication, and dependable partnerships built on trust.',
    },
  ];

  const certifications = [
    'ISO 9001:2015 - Quality Management System',
    'ISO 14001:2015 - Environmental Management System',
    'OHSAS 18001 - Occupational Health and Safety',
    'BIS Certification - Bureau of Indian Standards',
    'ROHS Compliance - Environmental Standards',
  ];

  const milestones = [
    { year: '2009', event: 'Company Founded', description: 'Vishal Creations established with a vision to supply premium plastic raw materials.' },
    { year: '2012', event: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification for quality management systems.' },
    { year: '2015', event: 'Pan-India Expansion', description: 'Expanded operations to serve clients across all major cities in India.' },
    { year: '2018', event: '500+ Clients', description: 'Reached milestone of serving over 500 satisfied clients nationwide.' },
    { year: '2020', event: 'Digital Transformation', description: 'Implemented advanced ERP systems and digital order management.' },
    { year: '2024', event: 'Industry Leadership', description: 'Recognized as a leading supplier in the plastic raw materials industry.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Vishal Creations</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in the plastic raw materials industry, delivering excellence through quality, reliability, and innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, Vishal Creations began as a small venture with a big vision: to become India's most trusted supplier of plastic raw materials. What started as a local operation has grown into a nationwide network serving over 500 manufacturers across diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been marked by unwavering commitment to quality, customer satisfaction, and continuous innovation. Today, we stand as a testament to the power of dedication, hard work, and the relentless pursuit of excellence.
              </p>
              <p className="text-lg text-gray-600">
                With over 15 years of industry experience, we have built lasting relationships with our clients based on trust, reliability, and mutual growth. Our team of experts works tirelessly to ensure that every product meets the highest standards of quality and performance.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior quality plastic raw materials that enable manufacturers to create innovative products while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading supplier of plastic raw materials in India, recognized for our commitment to excellence, innovation, and sustainable business practices that benefit our customers, communities, and environment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, quality, customer focus, innovation, and sustainability guide every aspect of our business. We believe in building long-term relationships based on trust and mutual respect.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <value.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to excellence over the years.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by industry-leading certifications and standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Vishal Creations?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stand out in the industry through our unwavering commitment to quality and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '15+ Years Experience',
                description: 'Deep industry knowledge and expertise built over years of dedicated service.',
                number: '15+'
              },
              {
                title: '500+ Satisfied Clients',
                description: 'Trusted by manufacturers across India for our reliability and quality.',
                number: '500+'
              },
              {
                title: '99.5% On-Time Delivery',
                description: 'Efficient logistics and supply chain management ensuring timely deliveries.',
                number: '99.5%'
              },
              {
                title: '24/7 Customer Support',
                description: 'Round-the-clock assistance and technical support for all your needs.',
                number: '24/7'
              },
              {
                title: 'Pan-India Presence',
                description: 'Nationwide network ensuring seamless service across all major cities.',
                number: 'Pan-India'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control processes for every product.',
                number: '100%'
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold py-4 px-6 rounded-lg mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};