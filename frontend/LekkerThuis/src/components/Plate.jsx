import PlateBg from "./PlateBg";
import RotatingPlate from "./RotatingPlate";

const Plate = () => {
  return (
    <>
      <div className="relative z-[-1]">
        <PlateBg 
        additionalClasses="relative"/>
       <RotatingPlate 
       additionalClasses="absolute top-1"/>
      </div>
    </>
  );
};

export default Plate;
