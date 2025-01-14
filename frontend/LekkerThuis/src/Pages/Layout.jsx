import { Link, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaUserEdit } from "react-icons/fa";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <nav className="flex flex-row justify-between  py-1 shadow-md w-full">
        <Link to="/menu" className="px-8">
          <img src="/images/menu.png" alt="" className="h-10 w-10" />
        </Link>
        <ul className="flex flex-row justify-around w-[30%] items-center">
          <li>
            <Link to="/home" className="flex flex-row items-center">
              <span>Home</span><FaHome className="w-10" />
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex flex-row items-center">
              <span>About us</span><FaUser className="w-10" />
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <FaUserEdit className="h-8 w-8" />
            </Link>
          </li>
        </ul>
      </nav>
      <main>
      <Outlet />
      </main>
      <footer>
       <Footer />
      </footer>
    </>
  );
};

export default Layout;
