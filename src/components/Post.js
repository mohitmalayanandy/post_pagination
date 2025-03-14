import React from "react";
import PostCard from "./PostCard";

const Post = ({ postsData }) => {
    
    return (
        <div className="min-h-screen p-8 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {postsData.map((post, index) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        body={post.body}
                        onClick={openModal()}
                    />
                ))}
            </div>
        </div>
    );
};

export default Post;