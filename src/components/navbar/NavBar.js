import React from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import Ellipse from "../../Assets/Ellipes.png";
import Home from "../../Assets/Home.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <img className="" src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <span className="no_wallet">
                <img src={Ellipse} alt="" /> No wallet
              </span>
              <Nav
                className="ml-auto my-2 my-lg-0 nav_links"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink activclassname="active" to="/">
                  Home
                </NavLink>
                <NavLink to="/gulde">Gulde</NavLink>
                <NavLink to="/marktplace">MarketPlace</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="row m-0">
          <div className="col-3 p-0 botton_colored_nav_line blue_color"></div>
          <div className="col-3 p-0 botton_colored_nav_line red_color"></div>
          <div className="col-3 p-0 botton_colored_nav_line yellow_color"></div>
          <div className="col-3 p-0 botton_colored_nav_line black_color"></div>
        </div>
      </>
    </div>
  );
};

export default NavBar;
