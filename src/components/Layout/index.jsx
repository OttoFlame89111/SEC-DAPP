//import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../NavBar";
import Footer from "../../Footer";

export default function Layout() {

  return (
    <div >
      <NavBar />
      <div >
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
}
