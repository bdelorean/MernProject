import MenuButton from "./MenuButton";
import Titles from "./Titles";

const Intro = () => {
  return (
    <div className="flex flex-col items-center w-1/2 ">
      <Titles 
      title="Lekker Thuis"/>
      <div className="w-3/4 text-left">
        <p className="mb-4  text-sm">
          Ben je na een lange dag te moe om te koken? Geen zorgen, wij zorgen
          voor heerlijke maaltijden, direct bij jou thuis!
        </p>
        <p className="mb-4 text-lg">
          Benieuwd naar de gerechten van deze week? Bekijk snel ons menu!”
        </p>
        <MenuButton />
      </div>
    </div>
  );
};

export default Intro;
