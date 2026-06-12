import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Home from "../pages/Home/Home"
import Login from "../pages/Auth/Login"
import Programs from "../pages/Programs/Programs"
import Resources from "../pages/Resources/Resources"
import { ROUTE_PATHS } from "./routePaths"

export const ROUTES = {
  home: {
    path: ROUTE_PATHS.home,
    Component: Home,
  },
  about: {
    path: ROUTE_PATHS.about,
    Component: About,
  },
  programs: {
    path: ROUTE_PATHS.programs,
    Component: Programs,
  },
  resources: {
    path: ROUTE_PATHS.resources,
    Component: Resources,
  },
  contact: {
    path: ROUTE_PATHS.contact,
    Component: Contact,
  },
  signin: {
    path: ROUTE_PATHS.signin,
    Component: Login,
  },
}

export const DEFAULT_ROUTE = ROUTES.home

export const routeList = Object.values(ROUTES)

export const getRouteByPath = (path) => {
  return routeList.find((route) => route.path === path) || DEFAULT_ROUTE
}

export const isKnownRoute = (path) => {
  return routeList.some((route) => route.path === path)
}
