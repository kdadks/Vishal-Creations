import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, Truck, Users } from 'lucide-react';

export const Contact: React.FC = () => {
  // Add page-specific SEO and structured data
  React.useEffect(() => {
    document.title = "Contact Vishal Creations - Get Quote for Plastic Raw Materials | Mumbai";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Vishal Creations for plastic raw materials quotes. Call +91-98765-43210 or email info@vishalcreations.com. Mumbai headquarters with pan-India delivery.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Vishal Creations",
      "description": "Get in touch with Vishal Creations for plastic raw materials quotes and inquiries.",
      "url": "https://vishalcreations.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Vishal Creations",
        "telephone": "+91-98765-43210",
        "email": "info@vishalcreations.com"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Handle hash navigation to scroll to send message section
  React.useEffect(() => {
    if (window.location.hash === '#send-message') {
      setTimeout(() => {
        const element = document.getElementById('send-message');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 7503131359'],
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vishalcreations.com'],
      description: 'Send us your inquiries',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Plot No. K11 Old Plot NO 45 Khasra No. 13/17,rd Floor Adhyapak Nagar,Najafgarh Road Nangloi,West Delhi, Delhi, 110041'],
      description: 'Visit our headquarters',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      description: 'We are available during',
    },
  ];

  // const officeLocations = [
  //   {
  //     city: 'Delhi',
  //     address: 'PLOT NO K11 OLD PLOT NO 45 KHASRA NO 13/17, 3RD FLOOR ADHYAPAK NAGAR,NAJAFGARH ROAD NANGLOI DELHI, DELHI, WEST DELHI, DELHI, 110041',
  //     phone: '+91 98765 43210',
  //     type: 'Head Office',
  //   },
  //   {
  //     city: 'Delhi',
  //     address: '456 Industrial Complex, Gurgaon, Haryana 122001',
  //     phone: '+91 98765 43212',
  //     type: 'Regional Office',
  //   },
  //   {
  //     city: 'Bangalore',
  //     address: '789 Tech Park, Electronic City, Bangalore, Karnataka 560100',
  //     phone: '+91 98765 43213',
  //     type: 'Regional Office',
  //   },
  //   {
  //     city: 'Chennai',
  //     address: '321 Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
  //     phone: '+91 98765 43214',
  //     type: 'Regional Office',
  //   },
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for quotes, technical support, or any inquiries about our products and services.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <info.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h3>
                <div className="text-gray-600 mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="send-message">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">Thank you for your inquiry. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide details about your requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Pan-India Delivery</h3>
                    <p className="text-gray-600">We deliver to all major cities across India with our extensive logistics network.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-2 rounded-lg">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
                    <p className="text-gray-600">99.5% on-time delivery rate with secure packaging and handling.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white p-2 rounded-lg">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h3>
                    <p className="text-gray-600">Our technical team provides comprehensive support for all your material needs.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent inquiries or immediate support, feel free to call us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919876543210"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@vishalcreations.com"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have offices across major cities in India to serve you better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{office.city}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {office.type}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="mt-1 text-gray-400" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our headquarters in Delhi for direct consultation and support.
            </p>
          </div>
          
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-gray-500 mx-auto mb-4" size={48} />
              <p className="text-gray-600 text-lg">Interactive Map</p>
              <p className="text-gray-500">PLOT NO K11 OLD PLOT NO 45 KHASRA NO 13/17, 3RD FLOOR ADHYAPAK NAGAR,NAJAFGARH ROAD NANGLOI DELHI, DELHI, WEST DELHI, DELHI, 110041</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};