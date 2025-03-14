import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Modal from "./components/ModalPost";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [postsData, setPostsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPostsData(data));
  };


  const handleSearch = (data) => {
    setSearchData(data);
  }

  const filteredPosts = postsData.filter(post =>
    post.title  .toLowerCase().includes(searchData.toLowerCase())
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="min-h-screen p-8 text-black">
      <h1 className="text-4xl font-extrabold text-center mb-8">Posts</h1>
      <Search onSearch={handleSearch} />
      <Modal />
      <Post postsData={currentPosts} />
      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;