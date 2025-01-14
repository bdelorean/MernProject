import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ImageGallery = () => {
  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 ml-20 mt-10">
        <div className="flex items-center justify-center w-full space-x-7 md:space-x-6 flex-wrap">
          <img
            src="/images/eten.1.webp"
            alt="Eten 1"
            className="w-44 md:w-1/2 max-w-[250px] h-44 md:h-auto object-cover shadow-lg"
            data-aos="zoom-out-right"
          />
          <img
            src="/images/eten.3.jpg"
            alt="Eten 2"
            className="w-44 md:w-1/2 max-w-[250px] h-44 md:h-auto object-cover shadow-lg"
            data-aos="zoom-out-left"
            data-aos-delay="500"
          />
        </div>
        <div className="flex justify-center w-full mt-4">
          <img
            src="/images/eten2.jpeg"
            alt="Eten 3"
            className="w-96 h-44 md:w-[530px] md:h-[250px] object-cover shadow-lg md:mt-4"
            data-aos="zoom-out"
          />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
