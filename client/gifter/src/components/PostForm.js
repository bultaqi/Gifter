import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "../providers/PostProvider"
import "./Post"
// import { useParams } from 'react-router-dom';

const PostForm = () => {
    const { addPost } = useContext(PostContext)

    const [post, setPost] = useState({
      "id": 1,
      "Title": "",
      "ImageUrl": "",
      "UserProfileId": 1,
      "DateCreated": "2016-07-27T07:45:00Z"
    });

    const handleControlledInputChange = (event) => {
      const newPost = { ...post }
      newPost[event.target.name] = event.target.value
      setPost(newPost)
    }

    const handleSavePost = () => {
          addPost({
              Title: post.Title,
              ImageUrl: post.ImageUrl,
              UserProfileId: post.UserProfileId,
              DateCreated: post.DateCreated
          })
    }
    
    useEffect(() => {
        setPost(post)
    }, []);



    return (
      <form className="postForm">
        <h2 className="postForm__title">New Post</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="postTitle">Title: </label>
            <input type="text" id="postTitle" name="Title" required autoFocus className="form-control"
            placeholder="Post Title"
            onChange={handleControlledInputChange}
            defaultValue={post.Title}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="postImage">Image URL: </label>
            <input type="text" id="postImage" name="ImageUrl" required autoFocus className="form-control"
            placeholder="Image URL"
            onChange={handleControlledInputChange}
            defaultValue={post.ImageUrl}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="postDateTime">Date: </label>
            <input type="date" id="postDateTime" name="DateCreated" required autoFocus className="form-control"
            placeholder=""
            onChange={handleControlledInputChange}
            defaultValue={post.DateCreated}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={event => {
            // event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSavePost()
          }}><>Add Post</></button>
      </form>
    )
}

export default PostForm;