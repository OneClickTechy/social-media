import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../../utils/utils";
import dataContext from "../../../context/dataContext";

const Posts = () => {
  const { filteredPosts, setPosts, error, isLoading, setError, setIsLoading } =
    useContext(dataContext);
  

  return (
    <section className="p-6 bg-space_cadet-500">
      <h2 className="text-space_cadet-900 text-3xl font-bold mb-4">Posts</h2>
      <article>
        {isLoading && <p className="text-misty_rose-500">Loading...</p>}
        {error && !filteredPosts && !isLoading && (
          <p className="text-jasper-400">{error}</p>
        )}
        {filteredPosts && filteredPosts.length > 0 && !error ? (
          <ul className="space-y-4">
            {filteredPosts.map((post) => (
              <li
                key={post.id}
                className="p-4 border border-jasper-400 bg-white rounded-lg shadow-md transition-transform transform hover:scale-[99%]"
              >
                <Link to={`post/${post.id}`}>
                  <h3 className="text-skobeloff-500 font-semibold">
                    {post.title}
                  </h3>
                  <small className="text-space_cadet-700">
                    {post.datetime}
                  </small>
                  <p className="text-space_cadet-700">{post.content}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          !error &&
          !isLoading && (
            <p className="text-space_cadet-700">No posts available.</p>
          )
        )}
      </article>
    </section>
  );
};

export default Posts;
