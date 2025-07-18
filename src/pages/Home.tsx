import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, CheckCircle, Star } from 'lucide-react';
import { ImageGallery } from '../components/ImageGallery';

export const Home: React.FC = () => {
  // Add structured data for homepage
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Vishal Creations - Premium Plastic Raw Materials Supplier",
      "description": "Leading supplier of high-quality plastic raw materials in India. ISO certified PVC granules, PP pellets, HDPE for manufacturers.",
      "url": "https://vishalcreations.com",
      "mainEntity": {
        "@type": "Organization",
        "name": "Vishal Creations"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vishalcreations.com"
          }
        ]
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'ISO certified materials with rigorous quality testing and assurance.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Efficient logistics network ensuring on-time delivery across India.',
    },
    {
      icon: Award,
      title: 'Industry Expert',
      description: '15+ years of experience in plastic raw materials supply.',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Serving 500+ manufacturers with reliable supply chain solutions.',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Plastic Industries Ltd.',
      message: 'Vishal Creations has been our trusted partner for over 5 years. Their quality and service are exceptional.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Modern Packaging Co.',
      message: 'Reliable delivery and competitive pricing. They understand our business needs perfectly.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Tech Plastics Pvt. Ltd.',
      message: 'Outstanding quality materials and excellent customer support. Highly recommended!',
      rating: 5,
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Industrial plastic manufacturing facility',
      title: 'State-of-the-Art Manufacturing',
      category: 'Facilities'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'High-quality PVC granules',
      title: 'Premium PVC Granules',
      category: 'Products'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Polypropylene pellets in production',
      title: 'PP Pellets Production',
      category: 'Manufacturing'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Quality control laboratory',
      title: 'Quality Control Lab',
      category: 'Quality Assurance'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Plastic raw materials warehouse',
      title: 'Raw Materials Storage',
      category: 'Logistics'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Packaging and shipping department',
      title: 'Packaging & Shipping',
      category: 'Operations'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      alt: 'Team of plastic industry experts',
      title: 'Expert Team',
      category: 'People'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      alt: 'Sustainable plastic production',
      title: 'Sustainable Production',
      category: 'Environment'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Plastic Raw Materials
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Supplying high-quality plastic materials to manufacturers across India with unmatched reliability and service excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                View Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Facilities & Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our state-of-the-art facilities, quality processes, and the dedicated team behind Vishal Creations.
            </p>
          </div>
          <ImageGallery images={galleryImages} autoPlay={true} autoPlayInterval={6000} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Vishal Creations?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to providing superior quality plastic raw materials with exceptional service and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <feature.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Leading Supplier of Plastic Raw Materials
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vishal Creations has been at the forefront of the plastic raw materials industry for over 15 years. We specialize in providing high-quality materials that meet the diverse needs of manufacturers across various industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">500+ Satisfied Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Pan-India Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial plastic materials"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive selection of plastic raw materials for all your manufacturing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'PVC Granules',
                image: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'High-quality PVC granules for pipes, profiles, and fittings.',
              },
              {
                name: 'PP Pellets',
                image: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Premium polypropylene pellets for packaging and automotive applications.',
              },
              {
                name: 'HDPE Granules',
                image: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Superior HDPE granules for bottles, containers, and industrial products.',
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by manufacturers across India for quality, reliability, and excellent service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.message}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a customized quote and experience the Vishal Creations difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Quote Now
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};