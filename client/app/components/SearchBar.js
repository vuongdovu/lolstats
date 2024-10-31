"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        router.push({
        pathname: '/accont/profile',
        query: { q: searchTerm } 
        });
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search..." 
                >
                </input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar