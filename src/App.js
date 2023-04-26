import React from "react";
import "./NavBar.css";
import Home from "./views/home";
import Owner from "./views/owner";
import Addpet from "./views/addpet";
import Layout from "./components/Layout";
import { HashRouter as Router, useRoutes } from "react-router-dom";


const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "/owner",
          element: <Owner></Owner>,
        },
        {
          path: "/addpet",
          element: <Addpet></Addpet>,
        },
      ],
    },
  ]);

  return routes;
};

function App() {
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
}



export default App;