import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="w-full col-span-2 md:col-span-1">
      <menu className="flex justify-around bg-celadon text-skobeloff-300">
        <li>
          <Link to={"/"} className="block p-1">Home</Link>
        </li>
        <li>
          <Link to={"/newpost"} className="block p-1">Post</Link>
        </li>
        <li>
          <Link to={"/about"} className="block p-1">About</Link>
        </li>
      </menu>
    </nav>
  );
};

export default Menu;
