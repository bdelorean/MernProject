import RotatingPlate from "./RotatingPlate";
import Titles from "./Titles";

const PlateNoBg = ({ stars }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Titles title="Our lovely revieuws" />
        <div className="text-3xl">{stars}</div>
        <RotatingPlate />
      </div>
    </>
  );
};

export default PlateNoBg;
