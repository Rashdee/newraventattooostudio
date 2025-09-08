import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    setActiveItem(location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navigation = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Location', href: '/location' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700'
          : 'bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - acts as Home */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setActiveItem('/')}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0896/3670/0447/files/logo1.jpg?v=1757344626"
                alt="Raven Studio Logo"
                className="h-14 w-auto"
              />
              <span className="text-xl font-bold text-white tracking-wider">
                RAVEN STUDIO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeItem === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveItem(item.href)}
                >
                  {item.name}
                </Link>
                {/* Red indicator line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-t-full transition-all duration-300 ease-linear ${
                    activeItem === item.href
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0'
                  }`}
                ></div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918360791933"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2 shadow-lg border border-gray-700">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      activeItem === item.href
                        ? 'text-white bg-gray-700 pl-4'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                    onClick={() => {
                      setActiveItem(item.href);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                    {/* Mobile red indicator bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-r-full transition-all duration-300 ease-linear ${
                        activeItem === item.href
                          ? 'scale-y-100 opacity-100'
                          : 'scale-y-0 opacity-0'
                      }`}
                    ></div>
                  </Link>
                </div>
              ))}

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
