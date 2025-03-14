import React from 'react';

const PostCard = ({ title, body, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={onClick}>
      <div className="mb-2">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div>
        <p className="text-gray-700">{body.slice(0, 50)} . . . Read More </p>
      </div>
    </div>
  );
};

export default PostCard;