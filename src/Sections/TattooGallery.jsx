import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TattooGallery = () => {
  return (
    <div className="relative py-12 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">🎨 Our Work</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 }, // mobile
          640: { slidesPerView: 2.2 }, // tablet
          1024: { slidesPerView: 3.5 }, // desktop
        }}
      >
        {/* Example Slides */}
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_Realism_-_Life-like_Details_1.jpg?v=1756636424"
            alt="Tattoo 1"
            className="rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_Tribal_-_Bold_Ancient_1.jpg?v=1756636424"
            alt="Tattoo 2"
            className="rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_Geometric_-_Modern_Sharp_1.jpg?v=1756636423"
            alt="Tattoo 3"
            className="rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_minimal-_simple_elegant_1.jpg?v=1756636424"
            alt="Tattoo 4"
            className="rounded-xl shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TattooGallery;
