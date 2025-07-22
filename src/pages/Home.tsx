import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Users, CheckCircle, Star } from 'lucide-react';
// ...existing code...

export const Home: React.FC = () => {
  // Popup modal state
  const [showPopup, setShowPopup] = useState(true);
  const [minimized, setMinimized] = useState(false);
  // Add structured data for homepage
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Vishal Creations - Premium Plastic & Chemical Raw Materials Supplier",
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
      description: 'Serving 10+ manufacturers with reliable supply chain solutions.',
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

  // ...existing code...

  return (
    <div className="min-h-screen relative">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
              onClick={() => {
                setShowPopup(false);
                setMinimized(true);
              }}
              aria-label="Close popup"
            >
              &times;
            </button>
            <img
              src="/event.jpeg"
              alt="Event"
              className="rounded-lg w-full h-auto object-contain mb-2"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-green-600 text-white py-12 overflow-hidden">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[350px]">
            
            {/* Main Content Area - Left Side */}
            <div className="lg:col-span-7 space-y-4">
              {/* Event Image - Top Left Position */}
              {minimized && !showPopup && (
                <div className="flex justify-start mb-4">
                  <div
                    className="cursor-pointer group"
                    onClick={() => setShowPopup(true)}
                    title="Show Event"
                  >
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2 shadow-lg hover:bg-opacity-30 transition-all duration-300">
                      <img
                        src="/event.jpeg"
                        alt="Event"
                        className="w-32 h-24 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 object-cover"
                      />
                      <div className="text-center mt-1">
                        <div className="text-xs font-bold text-white bg-blue-600 bg-opacity-80 px-2 py-1 rounded-full inline-block">
                          VIEW EVENT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
                  <span className="block text-white drop-shadow-2xl">Premium</span>
                  <span className="block bg-gradient-to-r from-green-300 to-blue-200 bg-clip-text text-transparent">
                    Plastic & Chemical Raw Materials
                  </span>
                  <span className="block text-white drop-shadow-2xl">Supplier</span>
                </h1>
                
                <p className="text-base lg:text-lg mb-6 text-blue-100 drop-shadow-lg leading-relaxed max-w-2xl">
                  Supplying high-quality plastic & chemical raw materials to diverse industries manufacturers across India with 
                  <span className="font-semibold text-green-200"> unmatched reliability</span> and 
                  <span className="font-semibold text-green-200"> service excellence</span>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
                <Link
                  to="/products"
                  className="group bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 flex items-center justify-center shadow-xl min-w-[180px] h-[50px] whitespace-nowrap transform hover:scale-105"
                >
                  View Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center shadow-xl min-w-[180px] h-[50px] whitespace-nowrap transform hover:scale-105"
                  onClick={() => { setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 0); }}
                >
                  Enquiries
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="lg:col-span-5">
              {/* Main Hero Image */}
              <img
                src="/Hero.png"
                alt="Vishal Creations Hero"
                className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 bg-green-500 bg-opacity-10 rounded-full blur-2xl"></div>
      </section>

      {/*
      Image Gallery Section
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
      */}

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
                Leading Supplier of Plastic & Chemical Raw Materials
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vishal Creations has been at the forefront of the plastic & chemical raw materials industry for over 8 years. We specialize in providing high-quality materials that meet the diverse needs of manufacturers across various industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">10+ Satisfied Clients</span>
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
                src="/Collarge.png"
                alt="Industrial plastic materials"
                className="rounded-lg shadow-lg w-full h-auto max-w-sm mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Portfolio Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Our Business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive product portfolio, trusted partners, and extensive customer network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Portfolio Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <img
                  src="/Collarge.png"
                  alt="Product Portfolio"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <Shield className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Product Portfolio</h3>
                  <p className="text-green-100 text-sm">
                    Premium plastic raw materials & advanced solutions
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Product Categories</span>
                    <span className="text-sm font-bold text-blue-600">15+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Explore our comprehensive range of plastic raw materials, advanced resins, and industrial machinery.
                </p>
                <Link
                  to="/products"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center group-hover:shadow-lg"
                >
                  View Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>

            {/* Partners & Suppliers Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Partners & Suppliers"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <Users className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Partners & Suppliers</h3>
                  <p className="text-blue-100 text-sm">
                    Trusted global network & strategic partnerships
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Global Partners</span>
                    <span className="text-sm font-bold text-green-600">10+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Meet our trusted suppliers and strategic partners who help us deliver quality materials worldwide.
                </p>
                <Link
                  to="/suppliers"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group-hover:shadow-lg"
                >
                  Our Partners
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>

            {/* Customer Network Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500"></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Customer Network"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <Award className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Customer Network</h3>
                  <p className="text-green-100 text-sm">
                    Satisfied clients & success stories across India
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Active Clients</span>
                    <span className="text-sm font-bold text-blue-600">10+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Discover our extensive customer network and read success stories from satisfied manufacturers.
                </p>
                <Link
                  to="/customers"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center group-hover:shadow-lg"
                >
                  Our Customers
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-medium">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Quality Assured</div>
              </div>
            </div>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic flex-grow">"{testimonial.message}"</p>
                <div className="mt-auto">
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
              onClick={() => { setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 0); }}
            >
              Enquiries
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