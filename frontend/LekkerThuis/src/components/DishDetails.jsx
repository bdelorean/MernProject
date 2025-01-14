import { useDishesContext } from "../hooks/useDishesContext";
import { FaTrash } from "react-icons/fa";

const DishDetails = ({ dish }) => {
  // The "dish" prop is passed from the parent component (AdminPage)
  const { dispatch } = useDishesContext();

  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/menu/" + dish._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_DISH", payload: { _id: json._id } }); // Verstuur het ID van het verwijderde gerecht naar de reducer om de state bij te werken
    }
  };

  return (
    <div className="h-36  bg-black bg-opacity-30 m-2 flex flex-row items-center justify-around p-2 w-96 gap-4">
      {/* Imaginea */}
      <div className="h-3/4 w-24 flex-shrink-0 shadow-md">
        <img
          src={dish.image}
          alt={dish.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Detalii despre dish */}
      <div className="text-xs flex flex-col justify-between text-gray-50 gap-1">
        <h4 className="text-sm">{dish.title}</h4>
        <p>
          <span className="font-medium text-sm">Ingrediënten:</span>
          {dish.description}
        </p>
        <p className="text-sm">€{dish.price}</p>
      </div>

      {/* Butonul de ștergere */}
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default DishDetails;
