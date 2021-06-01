import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "../providers/PostProvider"
import "./Post"
// import { useParams } from 'react-router-dom';

export const PostForm = () => {
    const { addPost } = useContext(PostContext)


    //for edit, hold on to state of animal in this view
    const [post, setPost] = useState({})


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newPost = { ...post }
      //post is an object with properties.
      //set the property to the new value
      newPost[event.target.name] = event.target.value
      //update state
      setPost(newPost)
    }

    const handleSavePost = () => {
          addPost({
              name: post.Title
          })
      }
    
    useEffect(() => {
        setPost(post)
    }, []);

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="postForm">
        <h2 className="postForm__title">New Post</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="postTitle">Title: </label>
            <input type="text" id="postTitle" name="name" required autoFocus className="form-control"
            placeholder="Post Title"
            onChange={handleControlledInputChange}
            defaultValue={post.Title}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSavePost()
          }}>
        {<>Add Post</>}</button>
      </form>
    )
}