import React, { useState } from "react";

const GiphySearch = ({ setSearch, search }) => {
    const searchHandler = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return <div>
        <input onChange={searchHandler}/>
    </div>
};

export default GiphySearch;