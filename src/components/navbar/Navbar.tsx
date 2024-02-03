import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     
      <div className="bg-customBlack text-white sticky top-0 mx-52 rounded-xl h-16 flex items-center justify-evenly px-32 z-10">
      <Link to={"/"}>
      <div className="mr-12 w-48 text-2xl font-serif"> 
        ParabellumNews
      </div>
      </Link>
      
        <Link className="" to="/">
          Güncel Haberler
        </Link>
        <Link to="/sport">Spor</Link>
        <Link to="/stock-Exchange">Borsa</Link>
        <Link to="/on-call-pharmacy">Nöbetçi Eczaneler</Link>
        <Link to="/cinema">Sinema</Link>
      </div>
    </>
  );
};

export default Navbar;
