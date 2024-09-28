import { Routes, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";
import SinglePost from "./SinglePost/SinglePost";
import EditPost from "./EditPost/EditPost";
const Main = () => {
  return (
    <main className="grow flex justify-center items-center">
      <Routes>
        <Route path="/">
          <Route index element={<Posts />} />
          <Route path="post/:id">
            <Route index element={<SinglePost />} />
            <Route path="edit" element={<EditPost />} />
          </Route>
          <Route path="newpost" element={<NewPost />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
