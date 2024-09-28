import { Routes, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";
import SinglePost from "./SinglePost/SinglePost";
import EditPost from "./EditPost/EditPost";
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
  singlePost,
  setSinglePost,
  singleError,
  isSingleLoading,
  setSingleError,
  setIsSingleLoading,
  handleEditPost,
  editPostTitle, 
  setEditPostTitle, 
  editPostContent,
  setEditPostContent,
  handleEditPostSubmit
}) => {
  return (
    <main className="grow flex justify-center items-center">
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
              element={
                <SinglePost
                  handleDeletePost={handleDeletePost}
                  singlePost={singlePost}
                  setSinglePost={setSinglePost}
                  singleError={singleError}
                  isSingleLoading={isSingleLoading}
                  setSingleError={setSingleError}
                  setIsSingleLoading={setIsSingleLoading}
                  handleEditPost={handleEditPost}
                />
              }
            />
            <Route path="edit" element={<EditPost 
              editPostTitle={editPostTitle}
              setEditPostTitle={setEditPostTitle}
              editPostContent={editPostContent}
              setEditPostContent={setEditPostContent}
              handleEditPostSubmit={handleEditPostSubmit}
            />} />
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
