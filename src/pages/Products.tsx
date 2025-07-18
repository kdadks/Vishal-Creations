import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, FileText, Award, Shield } from 'lucide-react';

export const Products: React.FC = () => {
  // Add page-specific SEO and structured data
  React.useEffect(() => {
    document.title = "Plastic Raw Materials Products - PVC, PP, HDPE | Vishal Creations";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our complete range of plastic raw materials: PVC granules, PP pellets, HDPE, ABS resin, additives. ISO certified quality, competitive prices, pan-India delivery.');
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Plastic Raw Materials Products",
      "description": "Complete range of plastic raw materials including PVC, PP, HDPE, and additives for manufacturers.",
      "url": "https://vishalcreations.com/products",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 8,
        "itemListElement": [
          {
            "@type": "Product",
            "name": "PVC Suspension Grade",
            "description": "High-quality PVC suspension grade for pipes, fittings, and profiles",
            "category": "PVC Materials"
          },
          {
            "@type": "Product", 
            "name": "PP Homopolymer",
            "description": "Premium polypropylene homopolymer for injection molding applications",
            "category": "Polypropylene"
          }
        ]
      }
    });
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pvc', name: 'PVC Materials' },
    { id: 'pp', name: 'Polypropylene' },
    { id: 'pe', name: 'Polyethylene' },
    { id: 'ps', name: 'Polystyrene' },
    { id: 'abs', name: 'ABS Resin' },
    { id: 'additives', name: 'Additives' },
  ];

  const products = [
    {
      id: 1,
      name: 'PVC Suspension Grade',
      category: 'pvc',
      image: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-quality PVC suspension grade for pipes, fittings, and profiles.',
      applications: ['Pipes & Fittings', 'Profiles', 'Sheets'],
      specifications: ['K-Value: 65-67', 'Bulk Density: 0.5-0.6 g/ml', 'Volatile Matter: ≤0.3%'],
      price: 'Request Quote',
      minOrder: '1 Ton',
    },
    {
      id: 2,
      name: 'PP Homopolymer',
      category: 'pp',
      image: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium polypropylene homopolymer for injection molding applications.',
      applications: ['Injection Molding', 'Automotive Parts', 'Packaging'],
      specifications: ['MFI: 3-35 g/10min', 'Density: 0.90-0.91 g/cm³', 'Flexural Modulus: 1400-1600 MPa'],
      price: 'Request Quote',
      minOrder: '500 Kg',
    },
    {
      id: 3,
      name: 'HDPE Blow Molding Grade',
      category: 'pe',
      image: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Superior HDPE grade specifically designed for blow molding applications.',
      applications: ['Bottles', 'Containers', 'Tanks'],
      specifications: ['Density: 0.950-0.965 g/cm³', 'Melt Index: 0.3-0.7 g/10min', 'ESCR: F50 > 1000 h'],
      price: 'Request Quote',
      minOrder: '1 Ton',
    },
    {
      id: 4,
      name: 'LDPE Film Grade',
      category: 'pe',
      image: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Low-density polyethylene ideal for film and packaging applications.',
      applications: ['Films', 'Bags', 'Packaging'],
      specifications: ['Density: 0.918-0.930 g/cm³', 'Melt Index: 0.2-2.0 g/10min', 'Dart Impact: >150 g'],
      price: 'Request Quote',
      minOrder: '500 Kg',
    },
    {
      id: 5,
      name: 'GPPS General Purpose',
      category: 'ps',
      image: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'General purpose polystyrene for various molding applications.',
      applications: ['Injection Molding', 'Thermoforming', 'Disposables'],
      specifications: ['Melt Index: 3-8 g/10min', 'Density: 1.04-1.05 g/cm³', 'Tensile Strength: 35-45 MPa'],
      price: 'Request Quote',
      minOrder: '250 Kg',
    },
    {
      id: 6,
      name: 'ABS High Impact Grade',
      category: 'abs',
      image: 'https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-impact ABS resin for automotive and electronic applications.',
      applications: ['Automotive Parts', 'Electronics', 'Appliances'],
      specifications: ['Izod Impact: >300 J/m', 'Density: 1.03-1.06 g/cm³', 'Tensile Strength: 40-50 MPa'],
      price: 'Request Quote',
      minOrder: '250 Kg',
    },
    {
      id: 7,
      name: 'Calcium Carbonate',
      category: 'additives',
      image: 'https://images.pexels.com/photos/3735637/pexels-photo-3735637.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-quality calcium carbonate filler for cost-effective plastic production.',
      applications: ['Filler', 'Reinforcement', 'Cost Reduction'],
      specifications: ['Particle Size: 2-5 μm', 'Whiteness: >95%', 'Moisture: <0.3%'],
      price: 'Request Quote',
      minOrder: '1 Ton',
    },
    {
      id: 8,
      name: 'Titanium Dioxide',
      category: 'additives',
      image: 'https://images.pexels.com/photos/2749501/pexels-photo-2749501.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium titanium dioxide for superior opacity and whiteness.',
      applications: ['White Pigment', 'Opacity Enhancement', 'UV Protection'],
      specifications: ['TiO2 Content: >98%', 'Particle Size: 0.2-0.3 μm', 'Oil Absorption: 15-25 g/100g'],
      price: 'Request Quote',
      minOrder: '25 Kg',
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive range of premium plastic raw materials for all your manufacturing needs.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400" size={20} />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Specifications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.specifications.slice(0, 2).map((spec, index) => (
                        <li key={index}>• {spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Min Order:</p>
                      <p className="font-semibold text-gray-800">{product.minOrder}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price:</p>
                      <p className="font-semibold text-blue-600">{product.price}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm">
                      <ShoppingCart size={16} className="mr-2" />
                      Get Quote
                    </button>
                    <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center">
                      <FileText size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Quality Assurance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every product undergoes rigorous quality testing to ensure it meets the highest industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'ISO Certified',
                description: 'All products meet ISO 9001:2015 quality standards.',
              },
              {
                icon: FileText,
                title: 'Test Certificates',
                description: 'Comprehensive test reports with every batch.',
              },
              {
                icon: Shield,
                title: 'Quality Control',
                description: 'Multi-stage testing throughout production.',
              },
              {
                icon: Award,
                title: 'Industry Standards',
                description: 'Compliance with all relevant industry norms.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <item.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our technical team can help you find the perfect material for your specific application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Technical Team
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Request Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};