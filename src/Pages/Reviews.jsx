import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reviews = [
    {
      title: "Gothic Sleeve",
      author: "Sarah M.",
      content: "Absolutely incredible work! The gothic design they created for my sleeve exceeded all my expectations. Professional, clean, and artistic.",
      verified: true
    },
    {
      title: "Gothic Portrait",
      author: "Elena V.",
      content: "The studio atmosphere is perfect - dark, atmospheric, but incredibly clean and professional. My portrait tattoo looks like a masterpiece.",
      verified: false
    },
    {
      title: "Biomechanical Back Piece",
      author: "Marcus K.",
      content: "Been to many studios, but Raven is on another level. The attention to detail in my biomechanical piece is insane. Worth every penny.",
      verified: true
    },
    {
      title: "Cover-up Design",
      author: "Alex R.",
      content: "Amazing cover-up work! They transformed my old tattoo into something I'm truly proud of. The skill level here is extraordinary.",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              WHAT OUR CLIENTS SAY
            </h1>
            <p className="text-lg text-gray-300">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 mb-16"></div>

          {/* Reviews */}
          <div className="space-y-16">
            {reviews.map((review, index) => (
              <div key={index} className="relative">
                {/* Review Title */}
                <h3 className="text-2xl font-bold mb-4 text-red-400">{review.title}</h3>
                
                {/* Review Content */}
                <blockquote className="text-lg text-gray-300 italic mb-6 pl-4 border-l-2 border-red-500">
                  "{review.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mr-3 ${
                    review.verified ? 'bg-red-500 border-red-500' : 'border-gray-500'
                  }`}>
                    {review.verified && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-lg font-medium">{review.author}</span>
                </div>

                {/* Divider between reviews */}
                {index < reviews.length - 1 && (
                  <div className="w-full h-px bg-gray-700 mt-16"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reviews;