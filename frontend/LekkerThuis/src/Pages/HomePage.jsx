import Intro from "../components/Intro";
import PlateNoBg from "../components/PlateNoBg";
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
      <article
        className="flex flex-col items-center w-full bg-secondary md:mb-20 mb-10 blur-container relative "
        data-aos="fade-up"
      >
        <PlateNoBg stars="⭐⭐⭐⭐⭐" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center place-items-center md:mb-20 mb-10 w-full mx-auto">
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
            className="transform md:translate-y-4 translate-x-6"
          />
          <Revieuw
            name="John Daan"
            text="Heel tevreden over de bestelling. Klantendienst was behulpzaam en vriendelijk."
            avatar="https://i.pravatar.cc/150?img=11
          "
            stars="⭐⭐⭐⭐"
          />
          <Revieuw
            name="Sophie Verbeek"
            text="De catering was fantastisch! Het eten was heerlijk en de presentatie indrukwekkend. Onze gasten waren onder de indruk."
            avatar="https://i.pravatar.cc/150?img=32"
            stars="⭐⭐⭐⭐⭐"
          />
          <Revieuw
            name="Lucas Janssen"
            text="Uitstekende service en erg flexibel met dieetwensen. De hapjes waren van hoge kwaliteit en vers bereid."
            avatar="https://i.pravatar.cc/150?img=27"
            stars="⭐⭐⭐⭐⭐"
            className="transform md:translate-y-4 translate-x-6"
          />
          <Revieuw
            name="Emma de Vries"
            text="We hebben genoten van de catering voor ons bedrijfsfeest. De diversiteit aan gerechten maakte iedereen blij."
            avatar="https://i.pravatar.cc/150?img=16"
            stars="⭐⭐⭐⭐⭐"
          />
        </div>
      </article>
    </div>
  );
};

export default HomePage;
