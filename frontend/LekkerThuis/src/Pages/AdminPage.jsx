import { useEffect } from "react";
import { useDishesContext } from "../hooks/useDishesContext";

//components
import AdminForm from "../components/AdminForm";
import DishDetails from "../components/DishDetails";

const AdminPage = () => {
  // Use the custom hook useDishesContext to get the current state (dishes) and the dispatch function.
  // Dispatch is needed to update the global state with the fetched dishes.
  const { dishes, dispatch } = useDishesContext();

  useEffect(() => {
    // Define the async function to fetch dishes from the backend
    const fetchDIshes = async () => {
      // Fetch the dishes from the API
      const response = await fetch("http://localhost:4000/api/menu");
      // Convert the response to JSON
      const json = await response.json();

      // If the response is successful (response.ok), dispatch an action to update the dishes state
      if (response.ok) {
        dispatch({ type: "SET_DISHES", payload: json });
      }
    };

    // Call the fetchDishes function when the component mounts
    fetchDIshes();
  }, []);
  return (
    <div className="flex flex-col items-center justify-around mx-20 mb-20">
      {/* Render the AdminForm component */}
      <AdminForm />
      {/* Render a list of dishes, each passed as a prop to the DishDetails component */}
      <div className="dishes grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {dishes &&
          dishes.map((dish) => <DishDetails key={dish._id} dish={dish} />)}
      </div>
    </div>
  );
};

export default AdminPage;
