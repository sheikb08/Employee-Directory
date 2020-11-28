import React from "react";

// Inline style
const styles = {
  searchBar: {
    marginTop: 10
  }
};

// Functional component search bar
function SearchBar({ handleSearch }) {
  return (
    <div style={styles.searchBar}>
      <form className="form-inline">
        <input
          className= "form-control"
          type= "search"
          placeholder= "Search"
          onChange= {e => handleSearch(e)}
        />
      </form>
    </div>
  );
}
export default SearchBar;