import React from "react";

const Search = ({ onChange, searchText }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onChange} type="text" />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
