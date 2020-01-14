import React from "react";

const Search = ({ onChange, searchString }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onChange} value={searchString} />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
