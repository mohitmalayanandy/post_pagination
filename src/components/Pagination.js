import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
}) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handlePrevious}
                className="mx-1 px-3 py-1 rounded bg-gray-200"
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <button className="mx-1 px-3 py-1 font-bold rounded bg-blue-200">
                {currentPage}
            </button>

            <button className="mx-1 px-3 py-1 rounded bg-gray-200">
                {currentPage+1}
            </button>
            <button
                onClick={handleNext}
                className="mx-1 px-3 py-1 rounded bg-gray-200"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

/* {pages.map((page, index) => (
    <button
        key={index}
        onClick={() => setCurrentPage(page)}
        className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        {page}
    </button>
))} */
