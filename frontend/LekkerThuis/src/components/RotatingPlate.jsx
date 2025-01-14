import React, { useEffect } from "react";
import { gsap } from "gsap";

const RotatingPlate = ({ additionalClasses = "" }) => {
  useEffect(() => {
    gsap.to(".rotating-image", {
      rotation: 360, // rotire 360°
      repeat: -1, // infinit
      duration: 10, // durată în secunde
      ease: "linear", // rotire uniformă
    });
  }, []);
  return (
    <>
      <img
        src="/images/plate.png"
        alt="Rotating plate"
        className={`rotating-image ${additionalClasses}`}
      />
    </>
  );
};

export default RotatingPlate;
