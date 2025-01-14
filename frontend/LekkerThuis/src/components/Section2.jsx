import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative my-6 blur-container" data-aos="fade-up">
      <div className="w-full">
        <img src="/images/dinner.2.jpg" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-full text-textWhite pl-5 flex flex-row gap-4">
        <div className=" relative" data-aos="fade-right">
          <img
            src="/images/Group 22.png"
            alt=""
            className=" w-44 h-auto relative rounded-md transform -rotate-12 shadow-xl"
          />
        </div>
        <div data-aos="fade-left">
          <h3 className="md:text-3xl text-textWhite mb-3 tracking-wider custom-shadow">
            Ontdek ons speciale kerstmenu! Wij zorgen voor het eten en jij voor
            de sfeer!
          </h3>
          <div className=" bg-black bg-opacity-20 text-xs p-2  font-extralight ">
            <p>** te bestellen t/m 20 december</p>
            <p>** vanaf 120€ gratis bezorging</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
