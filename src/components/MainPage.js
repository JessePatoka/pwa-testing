import React from "react";

import HeaderBar from "./HeaderBar";
import MainDash from "./MainDash";
import { Link } from "react-router-dom";

const MainPage = () => (
  <div>
    <HeaderBar
      storeNumber={101}
      storeName="Menomonee Falls"
      effectiveDate={new Date("4/27/2018")}
    />
    <MainDash onHandCount={4800} scannedCount={227} />
    <Link to="/floorpadlistpage">Navigated Ticketing</Link>
  </div>
);

export default MainPage;
