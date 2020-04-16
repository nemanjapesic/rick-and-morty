import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Favorites from "../pages/Favorites";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export { routes };
