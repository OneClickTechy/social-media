import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import dataContext from "../../../context/dataContext";


const PostSearch = () => {
  const {searchPost, setSearchPost} = useContext(dataContext);
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full col-span-2 md:col-span-1">
      <label htmlFor="searchPost" className="absolute left-[-9999px]">
        Search Post
      </label>
      <span className="flex items-center p-1 flex-nowrap bg-misty_rose-500 gap-2">
      <FaSearch className="text-black"/>
      <input
        type="text"
        name="searchPost"
        id="searchPost"
        placeholder="Search Post"
        className="border-space_cadet-500 bg-misty_rose-500 grow focus:outline-none text-space_cadet-500"
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
      />
      </span>
     
    </form>
  );
};

export default PostSearch;
