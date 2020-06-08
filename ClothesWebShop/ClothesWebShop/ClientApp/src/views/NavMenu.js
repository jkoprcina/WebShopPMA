import React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {} from "../redux/modules/main";
import "./NavMenu.css";

const NavMenu = (props) => {
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            ClothesWebShop
          </NavbarBrand>
          <NavbarToggler className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>
              {props.user === null ? (
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/login">
                    Login/Register
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/basket">
                    Basket
                  </NavLink>
                </NavItem>
              )}
              {props.user === null ? (
                <div></div>
              ) : (
                <span>{props.user.username}</span>
              )}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.main.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
