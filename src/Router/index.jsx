import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import { RoutesLink } from "../Utilities/RoutesLink";
import Facilities from "../Pages/Facilities";

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