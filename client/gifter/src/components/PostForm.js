import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [userProfileId, setUserProfileId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  // Use this hook to allow us to programatically redirect users
  const history = useHistory();

  const submit = (e) => {
    const post = {
      imageUrl,
      title,
      caption,
      userProfileId: +userProfileId
    };

    addPost(post).then((p) => {
      // Navigate the user back to the home route
      history.push("/");
    });
  };

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <Card className="col-sm-12 col-lg-6">
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="userId">User Id (For Now...)</Label>
                <Input
                  id="userId"
                  onChange={(e) => setUserProfileId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Gif URL</Label>
                <Input
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" onChange={(e) => setTitle(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="caption">Caption</Label>
                <Input
                  id="caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormGroup>
            </Form>
            <Button color="info" onClick={submit}>
              SUBMIT
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PostForm;


// import React, { useContext, useEffect, useState } from "react"
// import { PostContext } from "../providers/PostProvider"
// import "./Post"
// // import { useParams } from 'react-router-dom';

// const PostForm = () => {
//     const { addPost } = useContext(PostContext)

//     const [post, setPost] = useState({
//       "id": 1,
//       "Title": "",
//       "ImageUrl": "",
//       "UserProfileId": 1,
//       "DateCreated": "2016-07-27T07:45:00Z"
//     });

//     const handleControlledInputChange = (event) => {
//       const newPost = { ...post }
//       newPost[event.target.name] = event.target.value
//       setPost(newPost)
//     }

//     const handleSavePost = () => {
//           addPost({
//               Title: post.Title,
//               ImageUrl: post.ImageUrl,
//               UserProfileId: post.UserProfileId,
//               DateCreated: post.DateCreated
//           })
//     }
    
//     useEffect(() => {
//         setPost(post)
//     }, []);



//     return (
//       <form className="postForm">
//         <h2 className="postForm__title">New Post</h2>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="postTitle">Title: </label>
//             <input type="text" id="postTitle" name="Title" required autoFocus className="form-control"
//             placeholder="Post Title"
//             onChange={handleControlledInputChange}
//             defaultValue={post.Title}/>
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="postImage">Image URL: </label>
//             <input type="text" id="postImage" name="ImageUrl" required autoFocus className="form-control"
//             placeholder="Image URL"
//             onChange={handleControlledInputChange}
//             defaultValue={post.ImageUrl}/>
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="postDateTime">Date: </label>
//             <input type="date" id="postDateTime" name="DateCreated" required autoFocus className="form-control"
//             placeholder=""
//             onChange={handleControlledInputChange}
//             defaultValue={post.DateCreated}/>
//           </div>
//         </fieldset>
//         <button className="btn btn-primary"
//           onClick={event => {
//             // event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//             handleSavePost()
//           }}><>Add Post</></button>
//       </form>
//     )
// }

// export default PostForm;