// src/Sections/ServicesSection.jsx
import { motion } from "framer-motion";

const services = [
  {
    title: "Gothic Art",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/Tattoo_-_Gothic_Art_1.jpg?v=1756636604",
  },
  {
    title: "Cover-up",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/tattoo_-_cover_up.jpg?v=17566366970",
  },
  {
    title: "Consultation",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/tattoo_-_Consultation.jpg?v=1756636858",
  },
  {
    title: "Touch-up",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_image_of_tattoo_-_Touch-up_2.jpg?v=1756829989",
  },
  {
    title: "Sterile Space",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_image_of_tattoo_-_Sterile_Space_1.jpg?v=1756830091",
  },
  {
    title: "Custom Design",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_image_of_tattoo_-_Custom_Design_3.jpg?v=1756830196",
  },
];

const ServicesSection = () => {
  const sendToWhatsapp = (service) => {
    const message = `Hey tattoo maker 👋, I want '${service}'!`;
    const url = `https://wa.me/918360791933?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🖤 Our Services</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => sendToWhatsapp(service.title)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all"
              >
                Book
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
