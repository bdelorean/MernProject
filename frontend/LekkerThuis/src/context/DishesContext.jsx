import { createContext, useReducer, useEffect } from "react";

export const DishesContext = createContext();

//Aici intra in actiune useReducer prima este starea curenta si adoua este ce vrem sa se intample deci actiunea iar reducerul returneaza o noua stare bazata pe actiune
export const dishesReducer = (state, action) => {
  switch (action.type) {
    case "SET_DISHES":
      return {
        dishes: action.payload,
      };

    case "CREATE_DISH":
      return {
        dishes: [action.payload, ...state.dishes],
      };

    case "DELETE_DISH":
      return {
        dishes: state.dishes.filter((d) => d._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DishesContextProvider = ({ children }) => {
  // Initializează starea din localStorage
  const [state, dispatch] = useReducer(dishesReducer, {
    dishes: JSON.parse(localStorage.getItem("dishes")) || [], // Preia datele din localStorage si il converteste intr-un obiect JS(json.parse)
  });



  // Salvează starea în localStorage de fiecare dată când `state.dishes` se schimbă
  useEffect(() => {
    localStorage.setItem("dishes", JSON.stringify(state.dishes));
  }, [state.dishes]);

  return (
    <DishesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DishesContext.Provider>
  );
};
