import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">RAVEN STUDIO</h2>
            <p className="text-gray-400 mb-6">
              Dark, bold & timeless tattoo artistry.
            </p>
            <a
              href="https://wa.me/918360791933"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-5 rounded-lg transition-colors duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <div className="space-y-3 text-gray-400">
              <p>Your City, State</p>
              <p>+918360791933</p>
              <p>Tue - Sat, 10 AM – 11 PM</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Custom Tattoos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Dark Art
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Cover-ups
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Touch-ups
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2025 Raven Studio. All rights reserved.
          </p>
          <p className="text-gray-300 font-medium">
            Ink Your Story.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
