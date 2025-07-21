import React from 'react';
import { Building, MapPin, Star, TrendingUp, Users, Award, Target, Heart } from 'lucide-react';

export const Customers: React.FC = () => {
  // Add page-specific SEO and structured data
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Our Customers & Success Stories - Client Network | Vishal Creations";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our 500+ satisfied customers across India. Read success stories and testimonials from manufacturers who trust Vishal Creations for quality materials.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Customer Network & Success Stories",
      "description": "Our extensive customer network and success stories from satisfied manufacturers across India.",
      "url": "https://vishalcreations.com/customers"
    });
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const customers = [
    {
      name: 'Titan Plastics Manufacturing',
      industry: 'Automotive Components',
      location: 'Pune, Maharashtra',
      partnership: '2019',
      growth: '150%',
      testimonial: 'Vishal Creations has been instrumental in our 150% growth over the past 4 years. Their consistent quality and timely delivery have made them our preferred partner.',
      contact: 'Rajesh Kumar, Production Manager',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Green Pack Industries',
      industry: 'Packaging Solutions',
      location: 'Mumbai, Maharashtra',
      partnership: '2020',
      growth: '200%',
      testimonial: 'The quality of materials and customer service is exceptional. We have expanded our operations significantly with their reliable supply chain support.',
      contact: 'Priya Sharma, CEO',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Modern Pipe Systems',
      industry: 'Infrastructure & Construction',
      location: 'Bangalore, Karnataka',
      partnership: '2018',
      growth: '120%',
      testimonial: 'Their PVC materials have helped us maintain the highest quality standards in our pipe manufacturing. Excellent technical support team.',
      contact: 'Amit Patel, Technical Director',
      logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Elite Household Products',
      industry: 'Consumer Goods',
      location: 'Delhi, NCR',
      partnership: '2021',
      growth: '180%',
      testimonial: 'From small-scale operations to becoming a major player in consumer goods, Vishal Creations has been with us every step of the way.',
      contact: 'Sneha Gupta, Operations Head',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Precision Engineering Works',
      industry: 'Industrial Components',
      location: 'Chennai, Tamil Nadu',
      partnership: '2017',
      growth: '140%',
      testimonial: 'The technical expertise and material consistency have enabled us to achieve precision in our manufacturing processes.',
      contact: 'Dr. Ravi Shankar, Technical Lead',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 5
    },
    {
      name: 'Eco-Friendly Containers Ltd',
      industry: 'Sustainable Packaging',
      location: 'Hyderabad, Telangana',
      partnership: '2022',
      growth: '250%',
      testimonial: 'Their commitment to providing eco-friendly materials aligns perfectly with our sustainability goals. Outstanding partnership!',
      contact: 'Meera Krishnan, Sustainability Officer',
      logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 5
    }
  ];

  const customerBenefits = [
    {
      icon: Target,
      title: 'Business Growth',
      description: 'Average 160% growth achieved by our long-term customers.',
      metric: '160%'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 technical support and customer service team.',
      metric: '24/7'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: '99.8% customer satisfaction rate across all services.',
      metric: '99.8%'
    },
    {
      icon: TrendingUp,
      title: 'Market Expansion',
      description: 'Helped customers expand to new markets and territories.',
      metric: '50+'
    }
  ];

  const industries = [
    { name: 'Automotive', count: 120, percentage: 24 },
    { name: 'Packaging', count: 95, percentage: 19 },
    { name: 'Construction', count: 85, percentage: 17 },
    { name: 'Consumer Goods', count: 75, percentage: 15 },
    { name: 'Electronics', count: 65, percentage: 13 },
    { name: 'Others', count: 60, percentage: 12 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Customer Network</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Celebrating 500+ successful partnerships and shared growth stories across India.
          </p>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Customer Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results and measurable success across our customer network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-purple-600 mb-4 flex justify-center">
                  <benefit.icon size={48} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real customers who have grown with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{customer.name}</h3>
                      <div className="flex">
                        {[...Array(customer.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={16} />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building size={14} className="mr-2" />
                      <span className="text-sm">{customer.industry}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={14} className="mr-2" />
                      <span className="text-sm">{customer.location}</span>
                    </div>
                    
                    <div className="flex space-x-2 mb-3">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        Partner since {customer.partnership}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {customer.growth} Growth
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <p className="text-gray-600 italic mb-3">"{customer.testimonial}"</p>
                  <p className="text-sm text-gray-500 font-medium">- {customer.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industry Distribution</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving diverse industries across the manufacturing spectrum.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                  <div>
                    <h4 className="font-semibold text-gray-800">{industry.name}</h4>
                    <p className="text-sm text-gray-600">{industry.count} customers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{industry.percentage}%</div>
                    <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${industry.percentage * 4}px` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from the manufacturers who trust us with their success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customers.slice(0, 3).map((customer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(customer.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{customer.testimonial}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{customer.contact}</p>
                  <p className="text-sm text-gray-500">{customer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Success Network
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Become part of our growing family of successful manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <Heart className="mr-2" size={20} />
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
