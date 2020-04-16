import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(
    () => {
      history.listen(() => {
        setMenuOpen(false);
      });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <nav className="relative flex items-center justify-between flex-wrap bg-blue-500 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-4 pl-4">
        <Link to="/">
          <span className="font-bold text-2xl tracking-tight">
            Rick and Morty
          </span>
        </Link>
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center mr-4 px-2 py-1 rounded text-blue-200 hover:text-white hover:border-white focus:outline-none transition duration-200"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current w-8 h-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow md:flex md:items-center md:w-auto md:relative bg-blue-500 ${
          menuOpen ? "absolute block" : "hidden"
        }`}
        style={{ top: "100%" }}
      >
        <div className="ml-auto px-4 border-t border-white md:border-0 md:mt-0">
          <Link to="/">
            <span className="block my-4 mr-4 md:inline-block md:my-0 text-blue-200 hover:text-white transition duration-200">
              Characters
            </span>
          </Link>

          <Link to="/favorites">
            <span className="block my-4 mr-4 md:inline-block md:my-0 text-blue-200 hover:text-white transition duration-200">
              Favorites
            </span>
          </Link>

          <Link to="/about">
            <span className="block my-4 mr-4 md:inline-block md:my-0 text-blue-200 hover:text-white transition duration-200">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
