import React, { useState } from "react";
import PostCard from "./PostCard";
import Modal from "./Modal";

const Post = ({ postsData }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleCardClick = (post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    return (
        <div className="min-h-screen p-8 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {postsData.map((post, index) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        body={post.body}
                        onClick={() => handleCardClick(post)}
                    />
                ))}
            </div>
            {selectedPost && (
                <Modal title={selectedPost.title} body={selectedPost.body} onClose={closeModal} />
            )}
        </div>
    );
};

export default Post;