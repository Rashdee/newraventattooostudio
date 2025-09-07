import { useState, useEffect } from 'react';

const Booking = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-2xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              READY TO START YOUR JOURNEY?
            </h1>
            <p className="text-lg text-gray-300">
              Get in touch with us through WhatsApp for instant responses. We're here to
              <br />
              bring your dark visions to life.
            </p>
          </div>

          {/* Questions List - Exact match to reference image */}
          <div className="mb-12">
            <div className="space-y-3">
              <div className="text-lg text-gray-300 py-2 border-b border-gray-700">I want a custom design</div>
              <div className="text-lg text-gray-300 py-2 border-b border-gray-700">Can I book an appointment?</div>
              <div className="text-lg text-gray-300 py-2 border-b border-gray-700">What's the price for a full sleeve?</div>
              <div className="text-lg text-gray-300 py-2 border-b border-gray-700">Do you do cover-up tattoos?</div>
            </div>
          </div>

          {/* Walk-ins Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">WALK-INS WELCOME</h2>
            <p className="text-lg text-gray-300 mb-2">Studio Hours: Tuesday - Saturday, 12PM - 10PM</p>
            <p className="text-lg text-gray-300">For faster service, we recommend booking through WhatsApp</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;