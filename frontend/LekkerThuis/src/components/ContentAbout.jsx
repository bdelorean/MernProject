import BgComponent from "./BgComponent";

const ContentAbout = () => {
  return (
    <>
       <BgComponent className="absolute  right-10 -top-4 -z-10" /> 
      <div className="relative h-[180vh] mt-20">
        <img src="/images/about.jpg" alt="" className=" w-3/4 mx-auto" />
        <div className="bg-secondary bg-opacity-90 p-10 space-y-6 text-center w-2/5 shadow-[5px_0_5px_0_rgba(0,0,0,0.25)] absolute top-1/3 left-1/2">
          <h3>
            Hoi, we zijn Carla en Rody en samen zijn we{" "}
            <span className="text-lg">LekkerThuis!</span>
          </h3>
          <p>
            Onze passie voor koken begon jaren geleden, toen we samen in de
            keuken stonden en met veel liefde gerechten bereidden voor onze
            vrienden en familie.
          </p>
          <p>
            We genoten van het creëren van smaken die herinneringen oproepen en
            van het zien hoe mensen samenkomen rond een heerlijke maaltijd. Al
            snel groeide die liefde uit tot een droom: hoe mooi zou het zijn om
            onze passie te delen met anderen die geen tijd of energie hebben om
            zelf te koken, maar toch willen genieten van gezond en lekker eten?
          </p>
          <p>
            In 2022 hebben we die droom werkelijkheid gemaakt door LekkerThuis
            op te richten. Ons doel? Mensen helpen die een druk leven leiden, of
            dat nu door werk, studie of andere verplichtingen komt, om toch te
            kunnen genieten van verse, huisgemaakte gerechten.{" "}
          </p>
          <p>
            Want laten we eerlijk zijn: na een lange dag is er niets fijner dan
            thuiskomen en een gezonde maaltijd op tafel te hebben staan, zonder
            dat je zelf in de keuken hoeft te staan.
          </p>
        </div>
        <BgComponent className="absolute w-2/5 left-30  rotate-45 -z-10" />
      </div>
    </>
  );
};

export default ContentAbout;
