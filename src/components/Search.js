import React from 'react';

const Search = ({ onSearch }) => {

    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search Post"
                onChange={handleChange}
                className="border rounded-sm outline-none p-1"
            />
        </div>
    );
};

export default Search;