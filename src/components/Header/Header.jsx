import React from "react";
import Menu from "./Menu/Menu.jsx";
import PostSearch from "./PostSearch/PostSearch.jsx";

const Header = () => {
  return (
    <header className="grid grid-cols-2 place-items-center gap-1 grid-flow-row-dense">
      <h1 className="text-4xl text-center bg-skobeloff-500 font-bold font-sans col-span-2 w-full">
        Social Media
      </h1>
      <Menu />
      <PostSearch />
    </header>
  );
};

export default Header;
