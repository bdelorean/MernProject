import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DishesContextProvider } from "./context/DIshesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DishesContextProvider>
      <App />
    </DishesContextProvider>
  </StrictMode>
);
