import { useDishesContext } from "../hooks/useDishesContext"; // Importi hook-ul personalizat

const MenuPage = () => {
  const { dishes } = useDishesContext(); // pak dishes lijst van context 

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      {/* laat elke dish zien  */}
      <div className="menu-list">
        {dishes.map((dish) => (
          <div key={dish._id} className="dish-card">
            <h4>{dish.title}</h4>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
            <img src={dish.image} alt={dish.title} className="w-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
