import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { PostProvider } from "./providers/PostProvider";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <Header />
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;


// The <Link> component is great for rendering links in our UI, but what about if we want to navigate the user programmatically? For example, on the Post form after a user submits and the new post gets successfully gets processed by our API, we'd like to maybe send the user back to the main feed. We can't do this with a simple <Link> component. Fortunately, the react router gives us an easy to use hook to allow us to do this called useHistory.


// import React from "react";
// import "./App.css";
// import { PostProvider } from "./providers/PostProvider";
// import PostList from "./components/PostList";
// import { PostForm } from "./components/PostForm";
// import { PostSearch } from "./components/PostSearch";

// function App() {
//   return (
//     <div className="App">
//       <PostProvider>
//         <PostForm />
//         <PostSearch />
//         <PostList />
//       </PostProvider>
//     </div>
//   );
// }

// export default App;