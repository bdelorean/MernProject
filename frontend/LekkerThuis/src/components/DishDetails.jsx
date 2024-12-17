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
    <div className="bg-slate-500 m-2">
      <h4>{dish.title}</h4>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
      <img src={dish.image} alt={dish.title} className="w-5" />
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default DishDetails;
