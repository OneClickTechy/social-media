import React, { useState, useEffect } from "react";
import { api } from "../../../utils/utils";
import { useParams } from "react-router-dom";

const SinglePost = ({handleDeletePost, singlePost, setSinglePost, singleError, isSingleLoading, setSingleError, setIsSingleLoading, handleEditPost}) => {
  const { id } = useParams();

  

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setSinglePost(response.data);
        
      } catch (error) {
        setSingleError(error);
        console.error(error);
      } finally {
        setIsSingleLoading(false);
      }
    };

    getPost();

    
  }, [id]);


  if (isSingleLoading) {
    return <div className="text-center text-skobeloff-500">Loading...</div>;
  }

  if (singleError) {
    return <div className="text-center text-jasper-400">Error: {singleError.message}</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {singlePost ? (
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-skobeloff-500">{singlePost.title}</h1>
          <small className="text-space_cadet-700">{singlePost.datetime}</small>
          <p className="text-space_cadet-700">{singlePost.content}</p>
          <div className="flex gap-4">
            <button type="button" className="px-4 py-2 bg-skobeloff-500 text-white rounded-lg shadow-md" onClick={()=>handleEditPost(singlePost.id)}>Edit</button>

            <button type="button" className="px-4 py-2 bg-jasper-400 text-white rounded-lg shadow-md" onClick={()=>handleDeletePost(singlePost.id)}>Delete</button>
          </div>
        </div>
      ) : (
        <div className="text-center text-misty_rose-500">No post found</div>
      )}
    </div>
  );
};

export default SinglePost;

