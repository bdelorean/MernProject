import { useDishesContext } from "../hooks/useDishesContext"; // Importi hook-ul personalizat
import Titles from "../components/Titles";
import BgComponent from "../components/BgComponent";

const MenuPage = () => {
  const { dishes } = useDishesContext(); // pak dishes lijst van context
  


  return (
    <>
      <BgComponent className="absolute  right-10 -top-4 -z-10" />
      <div className="flex flex-col items-center justify-center">
        <Titles title="Lekker Thuis" />
        <h3 className="text-xl">Menu week 20 t/m 27.12</h3>
        {/* Menu list */}
        <div className="dishes grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 mx-auto mb-20">
          {dishes.map((dish) => (
            <div
              key={dish._id}
              className="h-36  bg-accent m-2 flex flex-row items-center justify-around p-2 w-96 gap-4"
            >
              {/* Image */}
              <div className="h-3/4 w-24 flex-shrink-0 shadow-md">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Description */}
              <div className="text-xs flex flex-col justify-between text-gray-50 gap-1">
                <h4 className="text-sm">{dish.title}</h4>
                <p>
                  <span className="font-medium text-sm">Ingrediënten:</span>
                  {dish.description}
                </p>
                <p className="text-sm">€{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
