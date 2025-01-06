import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminPage from "./Pages/AdminPage";
import MenuPage from "./Pages/MenuPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import NoPage from "./Pages/NoPage";
import Navigation from "./Pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
