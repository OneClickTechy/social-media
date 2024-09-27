import { Routes, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";
import SinglePost from "./SinglePost/SinglePost";
const Main = ({
  posts,
  setPosts,
  error,
  setError,
  isLoading,
  setIsLoading,
  newPostTitle,
  newPostContent,
  setNewPostTitle,
  setNewPostContent,
  handleNewPostSubmit,
  handleDeletePost,
}) => {
  return (
    <main className="grow">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Posts
                posts={posts}
                setPosts={setPosts}
                error={error}
                isLoading={isLoading}
                setError={setError}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="post/:id">
            <Route
              index
              element={<SinglePost handleDeletePost={handleDeletePost} />}
            />
            <Route path="edit" />
          </Route>
          <Route
            path="newpost"
            element={
              <NewPost
                newPostTitle={newPostTitle}
                setNewPostTitle={setNewPostTitle}
                newPostContent={newPostContent}
                setNewPostContent={setNewPostContent}
                handleNewPostSubmit={handleNewPostSubmit}
              />
            }
          />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
