import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import Pagination from "./components/Pagination";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {

  const [postsData, setPostsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPostsData(data))
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="min-h-screen bg-gradient-to-r  p-8 text-black ">
      <h1 className="text-4xl font-extrabold text-center mb-8">Posts</h1>
      <Post postsData={currentPosts} />
      <Pagination
        totalPosts={postsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;