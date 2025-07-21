import React from 'react';
import { Shield, Award, Users, Target, Eye, Heart } from 'lucide-react';

export const About: React.FC = () => {
  // Add page-specific meta tags and structured data
  React.useEffect(() => {
    document.title = "About Vishal Creations - High-Performance Polymers & Engineering Plastics | Since 2017";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Established in 2017, Vishal Creations is a trusted distributor of high-performance polymers and specialty engineering plastics. Serving electronics, automotive, and manufacturing industries across India with Nylon, Polycarbonate, PBT materials.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Vishal Creations",
      "description": "Established in 2017, Vishal Creations is a trusted distributor of high-performance polymers and specialty engineering plastics in India.",
      "url": "https://vishalcreations.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Vishal Creations",
        "foundingDate": "2017",
        "numberOfEmployees": "25-50"
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
        description: 'We maintain the highest standards in all our high-performance polymers through rigorous testing and quality control processes.',
      },
      {
        icon: Award,
        title: 'Innovation',
        description: 'Committed to delivering cutting-edge specialty engineering plastics that meet evolving industrial demands.',
      },
      {
        icon: Users,
        title: 'Industry Focus',
        description: 'Specialized in serving electronics, automotive, and manufacturing industries with tailored polymer solutions.',
      },
      {
        icon: Target,
        title: 'Global Vision',
        description: 'Expanding horizons beyond conventional materials to tap into global markets with innovative solutions.',
      },
  ];

  const certifications = [
    'ISO 9001:2015 - Quality Management System',
    'ISO 14001:2015 - Environmental Management System',
    'REACH Compliance - Chemical Safety',
    'RoHS Compliance - Environmental Standards',
    'Automotive Industry Standards - TS 16949',
  ];

  const milestones = [
    { year: '2017', event: 'Company Founded', description: 'Vishal Creations established with a vision to distribute high-performance polymers and specialty engineering plastics.' },
    { year: '2018', event: 'Industry Partnerships', description: 'Established strong network of suppliers and distributors across India.' },
    { year: '2020', event: 'Sector Expansion', description: 'Expanded to serve electronics, automotive, and manufacturing industries nationwide.' },
    { year: '2022', event: 'Product Diversification', description: 'Added Nylon, Polycarbonate, PBT, and mold release agents to product portfolio.' },
    { year: '2023', event: 'Quality Excellence', description: 'Achieved industry recognition for consistent delivery of premium polymer materials.' },
    { year: '2024', event: 'Global Vision', description: 'Initiated expansion strategy to tap into global markets beyond conventional materials.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Vishal Creations</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in high-performance polymers and specialty engineering plastics, delivering excellence through innovation and quality since 2017.
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
                Established in 2017, Vishal Creations is a trusted name in the distribution and trading of high-performance polymers and specialty engineering plastics in India. What began as a focused venture has evolved into a specialized distributor serving critical industries across the nation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We serve industries such as electronics, automotive, and manufacturing, offering a wide range of premium materials including Nylon, Polycarbonate, PBT, and mold release agents, designed to meet diverse industrial requirements. Our strong network of suppliers and distributors across the country ensures consistent delivery of quality products to our clientele.
              </p>
              <p className="text-lg text-gray-600">
                Driven by a vision of growth and innovation, Vishal Creations is expanding its horizons beyond conventional plastic raw materials to tap into global markets. By prioritizing quality and leveraging our expertise, we are committed to meeting the evolving demands of modern industries while establishing a reputation for reliability and excellence in the polymer distribution sector.
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
                To provide superior quality high-performance polymers and specialty engineering plastics that enable manufacturers to create innovative products while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading distributor of high-performance polymers and specialty engineering plastics in India, recognized for our commitment to innovation and expanding into global markets while serving diverse industrial requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Quality, innovation, industry expertise, and global vision guide every aspect of our business. We believe in building strong partnerships with suppliers and distributors while serving specialized industrial sectors.
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
              We specialize in high-performance polymers and engineering plastics, serving critical industries with innovative solutions and reliable distribution networks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '7+ Years Experience',
                description: 'Specialized expertise in high-performance polymers and engineering plastics since 2017.',
                number: '7+'
              },
              {
                title: 'Multi-Industry Focus',
                description: 'Serving electronics, automotive, and manufacturing sectors with tailored solutions.',
                number: '3+'
              },
              {
                title: '99% Quality Standards',
                description: 'Consistent delivery of premium materials meeting stringent industrial requirements.',
                number: '99%'
              },
              {
                title: 'Nationwide Network',
                description: 'Strong supplier and distributor network ensuring reliable material availability.',
                number: 'Pan-India'
              },
              {
                title: 'Global Expansion',
                description: 'Expanding horizons to tap into international markets beyond conventional materials.',
                number: 'Global'
              },
              {
                title: 'Premium Materials',
                description: 'Specialized in Nylon, Polycarbonate, PBT, and advanced mold release agents.',
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