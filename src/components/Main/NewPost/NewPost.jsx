import React, { useContext } from "react";
import dataContext from "../../../context/dataContext";

const NewPost = () => {
  const {
    newPostTitle,
    setNewPostTitle,
    newPostContent,
    setNewPostContent,
    handleNewPostSubmit,
  } = useContext(dataContext);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-space_cadet-500 p-4 rounded-lg shadow-md sm:w-1/2 text-space_cadet-500"
    >
      <fieldset>
        <label htmlFor="postTitle" className="text-misty_rose-500 block mb-2">
          Title
        </label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          className="bg-misty_rose-500 p-2 rounded-lg shadow-md w-full"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <label htmlFor="postContent" className="text-misty_rose-500 block mb-2">
          Content
        </label>
        <textarea
          name="postContent"
          id="postContent"
          className="bg-misty_rose-500 p-2 rounded-lg shadow-md w-full resize-none min-h-32"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-skobeloff-500 px-4 py-2 rounded-lg shadow-md text-white w-full sm:w-auto"
          onClick={handleNewPostSubmit}
        >
          Post
        </button>
      </fieldset>
    </form>
  );
};

export default NewPost;
