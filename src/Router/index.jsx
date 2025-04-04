import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import { RoutesLink } from "../Utilities/RoutesLink";
import Facilities from "../Pages/Facilities";
import Customers from "../Pages/Customers";
import Partners from "../Pages/Partners";

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
      route: <Partners/>
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