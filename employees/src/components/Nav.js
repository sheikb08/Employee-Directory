import React from "react";
import SearchBar from "./SearchBar.js";

// Inline style for aligning searchbar in the middle
const styles = {
  alignMiddle: {
    justifyContent: "center"
  }
};

// Functional component nav
function Nav({ handleSearch }) {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-collapse row" id="navbarNav" style={styles.alignMiddle}>
        <SearchBar handleSearch={handleSearch} />
      </div>
    </nav>
  );
}
export default Nav;