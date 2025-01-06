const Section1 = () => {
  return (
    <div className="bg-secondary w-full flex flex-row items-center justify-between py-10 mt-24">
      <div className="flex flex-col items-center w-2/5 ml-20">
        <h3 className="text-center mb-4 text-xl">Hoe werkt het?</h3>
        <ol className="list-decimal space-y-4 text-base">
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
        </ol>
      </div>

      <div className="w-2/5 mr-20">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-between w-full space-x-6">
            <img
              src="/images/eten.1.webp"
              alt="Eten 1"
              className="w-1/2 h-60 shadow-lg"
            />
            <img src="/images/eten.3.jpg" alt="Eten 2" className="w-1/2 h-60 shadow-lg" />
          </div>
          <div className="flex justify-center w-full mt-4 ">
            <img
              src="/images/eten2.jpeg"
              alt="Eten 3"
              className="w-full h-52 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
