import { useState, useEffect } from 'react';
import portfolioData from '../data/PortfolioData.json';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioData);

  useEffect(() => {
    setIsVisible(true);
    
    // Filter items based on selected category
    if (selectedCategory === 'All') {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Get unique categories
  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OUR <span className="text-red-500">DARK ARTISTRY</span>
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of dark and dramatic artistic creations. Each piece is crafted
              with precision, creativity, and attention to detail.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-red-400 text-sm mb-2">{item.style} • {item.category}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-red-400 text-sm">{item.style}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">Ready to create your own dark masterpiece?</p>
            <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;