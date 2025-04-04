import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import { RoutesLink } from "../Utilities/RoutesLink";
import Facilities from "../Pages/Facilities";
import Customers from "../Pages/Customers";
import Partners from "../Pages/Partners";
import Products from "../Pages/Products";
import AboutUs from "../Pages/AboutUs";
import CaseStudies from "../Pages/CaseStudies";

const Router = () => {
  const RoutesArray = [
    {
      path: RoutesLink?.homepage,
      route: <Homepage />
    },
    {
      path: RoutesLink?.facilities,
      route: <Facilities />
    },
    {
      path: RoutesLink?.customers,
      route: <Customers />
    },
    {
      path: RoutesLink?.partners,
      route: <Partners />
    },
    {
      path: RoutesLink?.products,
      route: <Products />
    }, {
      path: RoutesLink?.aboutUs,
      route: <AboutUs />
    }, {
      path: RoutesLink?.CaseStudies,
      route: <CaseStudies />
    }
  ]
  return (<BrowserRouter>
    <Routes>
      {RoutesArray?.map((route) => <Route
        key={route?.path}
        path={route.path}
        element={route.route} />
      )}
    </Routes>
  </BrowserRouter>)
}

export default Router;