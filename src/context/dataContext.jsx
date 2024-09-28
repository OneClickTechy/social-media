import { createContext, useState, useEffect } from "react";
import { api } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const dataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPost, setSearchPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [singlePost, setSinglePost] = useState("");
  const [singleError, setSingleError] = useState(null);
  const [isSingleLoading, setIsSingleLoading] = useState(true);
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostContent, setEditPostContent] = useState("");

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
      setPosts([response.data, ...posts ]);
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
  };

  const handleEditPost = async (id) => {
    try {
      const response = await api.get(`/posts/${id}`);
      console.log("Post fetched successfully:", response.data);
      setEditPostTitle(response.data.title);
      setEditPostContent(response.data.content);
      navigator(`/post/${id}/edit`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPostSubmit = async (id) => {
    const editedPost = {
      id: id,
      title: editPostTitle,
      content: editPostContent,
      datetime: formattedDate(),
    };
    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      console.log("Post edited successfully:", response.data);
      setPosts(posts.map((post) => (post.id === id ? editedPost : post)));
      reset(setEditPostTitle, setEditPostContent);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
    setPosts(posts.map((post) => (post.id === id ? editedPost : post)));
    reset(setEditPostTitle, setEditPostContent);
    navigator("/");
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data.reverse());
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => await fetchPosts())();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchPost.toLowerCase()) ||
      post.content.toLowerCase().includes(searchPost.toLowerCase()) ||
      post.datetime.toLowerCase().includes(searchPost.toLowerCase())
  );

  return (
    <dataContext.Provider
      value={{
        searchPost,
        setSearchPost,
        editPostTitle,
        setEditPostTitle,
        editPostContent,
        setEditPostContent,
        handleEditPostSubmit,
        newPostTitle,
        setNewPostTitle,
        newPostContent,
        setNewPostContent,
        handleNewPostSubmit,
        filteredPosts,
        setPosts,
        error,
        isLoading,
        setError,
        setIsLoading,
        handleDeletePost,
        singlePost,
        setSinglePost,
        singleError,
        isSingleLoading,
        setSingleError,
        setIsSingleLoading,
        handleEditPost,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
