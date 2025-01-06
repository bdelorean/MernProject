const Section2 = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <img src="/images/dinner.2.jpg" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-full text-textWhite pl-5 ">
        <h3 className="text-3xl text-textWhite mb-3 tracking-wider custom-shadow">
          Ontdek ons speciale kerstmenu! Wij zorgen voor het eten en jij voor de
          sfeer!
        </h3>
        <div className=" bg-black bg-opacity-20 text-xs p-2  font-extralight ">
          <p>** te bestellen t/m 20 december</p>
          <p>** vanaf 120€ gratis bezorging</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
