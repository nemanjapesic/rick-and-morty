import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
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
