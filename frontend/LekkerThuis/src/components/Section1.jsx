import ImageGallery from "./ImageGallery";

const Section1 = () => {
  return (
    <div className="bg-secondary w-full flex flex-col md:flex-row items-center justify-between py-10 mt-24">
      <div className="flex flex-col items-center w-2/3 md:w-1/2 ml-20 pr-10">
        <h3 className="text-center mb-4 text-xl">Hoe werkt het?</h3>
        <ol className="list-decimal space-y-4 text-sm">
          <li>We voorbereiden een nieuw menu elke week voor je</li>
          <li>
            Elke week op donderdag of vrijdag mag jij een of meerdere gerechten
            voor volgende week bestellen
          </li>
          <li>
            In het weekend doen we de boodschappen en bereiden we alles voor je
            voor. Zo kun je van een verse maaltijd genieten en voorkomen wij dat
            het verspild raakt.
          </li>
          <li>
            Je ontvangt de bestelling op maandag of dinsdag, zodat je het hele
            week van verse maaltijden kunt genieten.
          </li>
          <li>
            We zorgen ervoor dat alle maaltijden goed verpakt zijn, zodat ze
            langer vers blijven en gemakkelijk op te warmen zijn.
          </li>
        </ol>
      </div>

      <div className="w-full md:w-1/2 mr-20">
        {/* <div className="flex flex-col items-center justify-center space-y-6 ml-20 mt-10">
          <div className="flex items-center justify-center w-full space-x-7 md:space-x-6 flex-wrap">
            <img
              src="/images/eten.1.webp"
              alt="Eten 1"
              className="w-44 md:w-1/2 max-w-[250px] h-44 md:h-auto object-cover shadow-lg"
            />
            <img
              src="/images/eten.3.jpg"
              alt="Eten 2"
              className="w-44 md:w-1/2 max-w-[250px] h-44 md:h-auto object-cover shadow-lg"
            />
          </div>
          <div className="flex justify-center w-full mt-4">
            <img
              src="/images/eten2.jpeg"
              alt="Eten 3"
              className="w-96 h-44 md:w-[530px] md:h-[250px] object-cover shadow-lg md:mt-4"
            />
          </div>
        </div> */}
        <ImageGallery />
      </div>
    </div>
  );
};

export default Section1;
