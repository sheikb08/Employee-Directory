import React, { Component } from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap";

export default class Content extends Component {
  
  // component state
  state = {
    users: [{}],
    order: "dsc",
    filteredUsers: [{}]
  }

  // Table headings
  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "Birthday", width: "10%" }
  ]

  // Function for handling sorting order : ascending or descending
  handleSort = heading => {
    if (this.state.order === "dsc") {
      this.setState({
        order: "asc"
      })
    } else {
      this.setState({
        order: "dsc"
      })
    }

    // Compare function
    const compare = (a, b) => {
      
      // If order is ascending
      if (this.state.order === "asc") {
        // for sorting by name
       if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // Sort by name
        if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }

    }
    const sortedUsers = this.state.filteredUsers.sort(compare);
    this.setState({ filteredUsers: sortedUsers });
  }

  // Function for handling search
  handleSearch = event => {
    
    const searchValue = event.target.value;
    
    // Filter users for searched value
    const filteredUsersList = this.state.users.filter(item => {
      
      // Merge users data
      let values = Object.values(item).join("").toLowerCase();
      
      // search for value
      return values.indexOf(searchValue.toLowerCase()) !== -1;
    });
    
    // set state for filtered users
    this.setState({ filteredUsers: filteredUsersList });
  }

  componentDidMount() {
    
    // API call for getting users list
    API.getUsers().then(results => {
      
      // set initial state by calling API after component mounted
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
        <Container fluid>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Nav handleSearch={this.handleSearch} />
              <div>
                <Table
                  headings={this.headings}
                  users={this.state.filteredUsers}
                  handleSort={this.handleSort}
                />
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
    );
  }
}