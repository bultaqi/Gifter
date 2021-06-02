import React, { useContext } from "react"
import { PostContext } from "../providers/PostProvider"


export const PostSearch = () => {
  const { searchTerms, setSearchTerms, searchPosts } = useContext(PostContext)

    const handleSearch = () => {
        searchPosts(searchTerms)
    };

  return (
    <>
      Search posts:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a post... " />
    <button onClick={handleSearch}>
        Search for Gif's
    </button>
    </>
  )
}