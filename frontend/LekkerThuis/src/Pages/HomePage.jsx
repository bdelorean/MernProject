import Intro from "../components/Intro";
import Plate from "../components/Plate";
import Revieuw from "../components/Revieuw";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const HomePage = () => {
  return (
    <div className="mx-10">
      <div className="flex flex-row justify-around w-full">
        <Plate />
        <Intro />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="flex flex-row items-center justify-around mb-20">
        <Revieuw
          name="Maria Doe"
          text="Geweldige service! Het product is van hoge kwaliteit en de levering was snel."
          avatar="https://i.pravatar.cc/150?img=5
          "
          stars="⭐⭐⭐⭐"
        />
        <Revieuw
          name="Manuel Riva"
          text="Dit product voldoet volledig aan mijn verwachtingen. Zeer tevreden!"
          avatar="https://i.pravatar.cc/150?img=13"
          stars="⭐⭐⭐⭐⭐"
          className="transform translate-y-4"
        />
        <Revieuw
          name="John Daan"
          text="Heel tevreden over de bestelling. Klantendienst was behulpzaam en vriendelijk."
          avatar="https://i.pravatar.cc/150?img=11
          "
          stars="⭐⭐⭐⭐"
        />
      </div>
    </div>
  );
};

export default HomePage;
