import BgComponent from "./BgComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const ContentAbout = () => {
  useEffect(()=>{
    AOS.init({
      mirror:true,
    })
  })

  return (
    <>
       <BgComponent className="absolute  right-10 -top-4 -z-10" /> 
      <div className="relative md:h-[180vh] h-[120vh] mt-20">
        <img src="/images/about.jpg" alt="" className=" md:w-3/4 mx-auto" />
        <div className="bg-secondary bg-opacity-90 p-10 space-y-6 text-center md:w-2/5 w-3/4 shadow-[5px_0_5px_0_rgba(0,0,0,0.25)] absolute md:top-1/3 md:left-1/2 top-24 left-40 md:text-base text-sm"  data-aos="fade-up">
          <h3>
            Hoi, we zijn Carla en Rody en samen zijn we{" "}
            <span className="text-lg span">LekkerThuis!</span>
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
        <BgComponent className="absolute w-2/5 left-30  rotate-45 -z-10 bottom-28" />
      </div>
    </>
  );
};

export default ContentAbout;
