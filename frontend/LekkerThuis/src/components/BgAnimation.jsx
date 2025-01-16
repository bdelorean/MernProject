import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BgComponent from "./BgComponent";

gsap.registerPlugin(ScrollTrigger);

const BgAnimation = ({ className }) => {
  useEffect(() => {
    // Definim animația cu ScrollTrigger
    gsap.to(".bg-component", {
      scrollTrigger: {
        trigger: ".bg-component", // Elementul care va declanșa animația
        start: "top top", // Animația începe când partea de sus a elementului ajunge în partea de jos a ferestrei
        end: "bottom top", // Animația se încheie când partea de jos ajunge în partea de sus a ferestrei
        scrub: 1, // Sincronizează animația cu scroll-ul
      },
      x: "200%", // Mutați componenta pe axa X
      y: "110%", // Mutați componenta pe axa Y
      rotation: 180, // Rotiți componenta de la 0 la 180 de grade
    });
  }, []);

  return (
    <div>
      <BgComponent className="bg-component absolute top-0" />
    </div>
  );
};

export default BgAnimation;
