import React from 'react';

// Inline style for header
const styles = {
  headerStyle: {
    background: "indigo",
    color: "white",
    marginBottom: 0,
    paddingTop: 20,
    paddingBottom: 20
  }
};

// Functional component header
function Header() {
    return (
        <header className="jumbotron jumbotron-fluid text-center" style={styles.headerStyle}>
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Search for employee in the search bar</p>
        </header>
    )
};

export default Header;