import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sport from "./pages/Sport";
import Navbar from "./components/navbar/Navbar";
import StockExchange from "./pages/StockExchange";
import OnCallPharmacy from "./pages/OnCallPharmacy";
import Cinema from "./pages/Cinema";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="mx-56">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="stock-Exchange" element={<StockExchange />} />
            <Route path="/on-call-pharmacy" element={<OnCallPharmacy />} />
            <Route path="/cinema" element={<Cinema />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
