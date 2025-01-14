import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      mirror:true
    });
  });

  return (
    <div
      className="bg-accent p-10 md:mb-24 mb-10 relative blur-container mt-20"
      data-aos="fade-up"
    >
      <ul className="text-textWhite space-y-4 ">
        <li>Toekomstige evenementen:</li>
        <li className="text-sm font-extralight">
          Op vrijdag 19 december kun je ons vinden bij het internationale
          streetfood-evenement in Ahoy.
        </li>
        <li className="text-sm font-extralight">
          Daar kun je onze gerechten proeven en de unieke smaken ontdekken die
          wij te bieden hebben.
        </li>
        <li className="text-sm font-extralight">
          Op zaterdag 2 januari zijn we te vinden op het Foodtruck Festival in
          het stadspark.
        </li>
        <li className="text-sm font-extralight">
          Kom langs en geniet van heerlijke gerechten in een gezellige sfeer met
          muziek en entertainment.
        </li>
        <li className="text-sm font-extralight">
          Op zondag 14 februari nemen we deel aan het Valentijns Food Festival
          in het stadscentrum.
        </li>
        <li className="text-sm font-extralight">
          Op zaterdag 10 april staan wij op de lente-markt in het stadsplein,
          waar je kunt genieten van seizoensgebonden lekkernijen.
        </li>
        <li className="text-sm font-extralight">
          Mis ons niet op het zomerfestival op 22 juli, waar we speciale zomerse
          gerechten serveren.
        </li>
      </ul>
    </div>
  );
};

export default Section3;
