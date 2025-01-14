import { useDishesContext } from "../hooks/useDishesContext"; // Importi hook-ul personalizat
import Titles from "../components/Titles";
import BgComponent from "../components/BgComponent";
import { useEffect, useState } from "react";

const MenuPage = () => {
  const { dishes } = useDishesContext(); // pak dishes lijst van context

  const [searchInput, setSearchInput] = useState("");
  const [filteredDishes, setFilteredDishes] = useState(dishes);

  const handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault();
    setSearchInput(value);
  };

  useEffect(() => {
    const filtered = dishes.filter((dish) =>
      dish.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredDishes(filtered)
  },[searchInput, dishes]);

  return (
    <>
      <BgComponent className="absolute  right-10 -top-4 -z-10" />
      <div className="flex flex-col items-center justify-center">
        <Titles title="Lekker Thuis" />
        <h3 className="text-xl">Menu week 20 t/m 27.12</h3>
        {/* Search balk */}
        <div className="w-96 h-8 bg-[#5C584E] mx-auto flex items-center justify-center mt-4 rounded-lg">
          <input
            type="text"
            placeholder="Zoek een titel op"
            onChange={handleChange}
            value={searchInput}
            name="search"
            className="w-60 h-6 p-1 text-center rounded-md bg-[#5C584E] border placeholder:text-xs placeholder:italic text-xs text-white focus:outline-none"
          />
          <svg
            className="w-5 h-5 text-white ml-2" // Dimensiuni și culoare pentru iconiță
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.742 10.267a5.475 5.475 0 1 0-1.338 1.338 5.475 5.475 0 0 0 1.338-1.338zm-5.475-.795a4.475 4.475 0 1 1 4.475 4.475 4.475 4.475 0 0 1-4.475-4.475zM13.454 13.768l3.88 3.88a1 1 0 0 1-1.414 1.414l-3.88-3.88a7.475 7.475 0 1 1 1.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Menu list */}
        <div className="dishes grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 mx-auto mb-20">
          {filteredDishes.map((dish) => (
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
