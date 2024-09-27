import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { api } from "./utils/utils";
import { Navigate, useNavigate } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPost, setSearchPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const randomId = () => new Date().getTime();
  const formattedDate = () =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());

  const reset = (setTitle, setContent) => {
    setTitle("");
    setContent("");
  };
  const navigator = useNavigate();
  const handleNewPostSubmit = async () => {
    const newId = randomId();
    const postDateTime = formattedDate();
    const newPost = {
      id: String(newId),
      title: newPostTitle,
      content: newPostContent,
      datetime: postDateTime,
    };
    try {
      const response = await api.post("/posts", newPost); // Await the post request
      console.log("Post created successfully:", response.data); // Handle success
      reset(setNewPostTitle, setNewPostContent);
      navigator("/");
    } catch (error) {
      console.error("Error creating post:", error); // Handle errors
    }
  };
  const handleDeletePost = async (id) => {
    try {
      const response = await api.delete(`/posts/${id}`);  
      console.log("Post deleted successfully:", response.data);
      setPosts(posts.filter((post) => post.id !== id));
      navigator("/");
    } catch (error) {
      console.log("Error deleting post:", error);
    }
    
  }
  return (
    // main container

    <div
      id="root-container"
      className="flex flex-col min-h-screen w-full bg-space_cadet-500 text-misty_rose-500"
    >
      <Header searchPost={searchPost} setSearchPost={setSearchPost} />
      <Main
        posts={posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchPost.toLowerCase()) ||
            post.content.toLowerCase().includes(searchPost.toLowerCase()) ||
            post.datetime.toLowerCase().includes(searchPost.toLowerCase())
        )}
        setPosts={setPosts}
        error={error}
        setError={setError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        newPostTitle={newPostTitle}
        newPostContent={newPostContent}
        setNewPostTitle={setNewPostTitle}
        setNewPostContent={setNewPostContent}
        handleNewPostSubmit={handleNewPostSubmit}
        handleDeletePost={handleDeletePost}
      />
      <Footer />
    </div>
  );
};

export default App;
