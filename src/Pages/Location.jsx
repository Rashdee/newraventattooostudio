import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Creative Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          ✨ Find Us, Ink With Us, <span className="text-red-500">Stay Forever</span> ✨
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          Our doors are open for true art lovers — step inside and let’s create magic together.
        </p>

        {/* Map Section */}
        <a
          href="https://maps.app.goo.gl/nmTnXoAjepWUsVbZ6"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-xl overflow-hidden shadow-lg group mb-12"
        >
          <iframe
            title="Raven Tattoo Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.546222350838!2d75.85354887536773!3d22.719568028089215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a2b4d3a5c3%3A0x4e2c3c1f91c5a02!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          ></iframe>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <p className="text-xl font-bold text-red-400 flex items-center">
              <MapPin className="mr-2" /> Open in Google Maps
            </p>
          </div>
        </a>

        {/* Fun Note */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-red-400">⚠️ A Friendly Note</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            After reaching our studio, just give us a quick call at{" "}
            <span className="text-red-400 font-semibold">+91 83607-91933 RAVEN</span>.  
            <br />
            But hey, don’t forget — <span className="text-red-400">appointments are
            important!</span> Some of my buddies walked in without booking and either
            had to wait forever ⏳ or went home inkless 😢.  
            <br />
            <br />
            And trust me… once you get a tattoo from me, you’ll never go anywhere else.
            <span className="text-red-400 font-bold"> I’m basically a magician 🪄</span> —
            everyone who comes here becomes a permanent client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
