import React from "react";
import "./NavBar.css";
import Home from "./views/home";
import Owner from "./views/owner";
import Addpet from "./views/addpet";
import Ownerpet from "./views/ownerpet";
import Layout from "./components/Layout";
import Create from "./views/create";
import Update from "./views/update";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import 'antd/dist/reset.css';
import "./index.css";

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
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
          path: "/ownerpet",
          element: <Ownerpet></Ownerpet>,
        },
        {
          path: "/e",
          element: <Addpet></Addpet>,
        },
        {
          path: "/create",
          element: <Create></Create>,
        },
        {
          path: "/update",
          element: <Update></Update>,
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