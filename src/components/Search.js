import React from "react";

const Search = ({ onChange, searchStr }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchStr} className="prompt" onChange={onChange} />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
