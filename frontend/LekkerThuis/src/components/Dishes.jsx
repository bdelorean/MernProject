import { useState, useEffect } from "react";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch("<http://localhost:4000/api/menu>");
        if (!response.ok) {
          throw new Error("network response not ok");
        }
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.log("Error fetching tasks:", error);
      }
    };
    fetchDishes();
  }, []);

  return (
    <>
      <h2>Menu</h2>
      {dishes.map((dish) => (
        <section key={dish._id}>
          <h3>{dish.title}</h3>
          <p>{dish.description}</p>
          <p>{dish.price}</p>
          <img src={`http://localhost:4000${dish.image}`} alt="{dish.title}" />
        </section>
      ))}
    </>
  );
};

export default Dishes;
