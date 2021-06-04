import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const apiUrl = "/api/post";
  const { getToken } = useContext(UserProfileContext);

  const [posts, setPosts] = useState([]);
  const [ searchTerms, setSearchTerms ] = useState("")

  const refreshPosts = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setPosts));
  
  const getAllPosts = () => {
    return fetch("/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const searchPosts = (searchTerms) => {
    return fetch(`/api/post/search?q=${searchTerms}&sortDesc=false`)
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json());
  };

  return (
    <PostContext.Provider value={{ 
      posts, getAllPosts, addPost, searchTerms, setSearchTerms, searchPosts, getPost, refreshPosts
    }}>
      {props.children}
    </PostContext.Provider>
  );
};