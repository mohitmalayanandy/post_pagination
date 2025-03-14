import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center mt-4">
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`mx-1 px-3 py-1 rounded-full ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;