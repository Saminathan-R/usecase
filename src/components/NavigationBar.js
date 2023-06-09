import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar =() => {
    return (
      <Navbar bg="primary" variant="dark">
        <Link to = "/" className="navbar-brand">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            width="25"
            height="25"
            alt="brand"
          />
        </Link>
        <Nav className="mr-auto">
          
          <Link to="/loginpage" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
          {/* <Link to="/add" className="nav-link">
            Add Book
          </Link>  */}
          <Link to="/list" className="nav-link">
            Book Listing
          </Link>
        </Nav>
      </Navbar>
    );
}

export default NavigationBar;