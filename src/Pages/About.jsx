import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel">
              ABOUT <span className="text-red-500">RAVEN</span> STUDIO
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          {/* Intro Paragraph */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              At Raven Tattoo Studio, we specialize in dark, artistic tattoos that tell your unique story. 
              Our experienced artists combine gothic aesthetics with modern techniques to create stunning, timeless pieces.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { 
                title: "Sterile, professional environment", 
                icon: "🩹" 
              },
              { 
                title: "Award-winning gothic artistry", 
                icon: "🏆" 
              },
              { 
                title: "Custom design consultations", 
                icon: "🎨" 
              },
              { 
                title: "Premium quality inks & equipment", 
                icon: "✒️" 
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-500 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">{feature.icon}</span>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-900 text-lg text-red-400 font-cinzel">
                ✦ ✦ ✦
              </span>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-cinzel">
              OUR PHILOSOPHY
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                "Every tattoo is a piece of art that becomes part of your identity. 
                We believe in creating dark, powerful designs that reflect your inner strength and personal journey."
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-40 -left-20 w-60 h-60 bg-red-600 rounded-full mix-blend-soft-light filter blur-xl opacity-5"></div>
          <div className="absolute bottom-40 -right-20 w-60 h-60 bg-purple-600 rounded-full mix-blend-soft-light filter blur-xl opacity-5"></div>
        </div>
      </div>
    </div>
  );
};

export default About;