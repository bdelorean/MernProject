import { useContext } from "react";
import { DishesContext } from "./context/DishesContext.js";

export const useDishesContext = () => {
  const context = useContext(DishesContext);

  if (!context) {
    throw Error("useDishesContext must be used within a DishesContextProvider");
  }
  return context;
};