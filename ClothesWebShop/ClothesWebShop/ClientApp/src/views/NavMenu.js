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
import { UserProfilePopUp } from "./UserProfilePopUp";
import { getUserById } from "../apiRequests/userRequests";
import { getCookie, removeCookie } from "../cookie";
import "../css/navMenu.css";

export class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      UserProfilePopUpBool: false,
    };
  }

  componentDidMount() {
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        this.setState({ user });
      });
    }
  }

  handleToggle = () => {
    this.setState({ UserProfilePopUpBool: !this.state.UserProfilePopUpBool });
  };

  handleLogOut = () => {
    let promise = new Promise(function (resolve) {
      removeCookie();
      setTimeout(() => resolve(""), 1000);
    });
    promise.then(() => {
      this.setState({
        UserProfilePopUpBool: !this.state.UserProfilePopUpBool,
        user: null,
      });
    });
  };

  render() {
    const { user, UserProfilePopUpBool } = this.state;
    return (
      <header className="nav-bar">
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
                {user === null ? (
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/login">
                      Login/Register
                    </NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/cart">
                      Cart
                    </NavLink>
                  </NavItem>
                )}
                {UserProfilePopUpBool ? (
                  <UserProfilePopUp
                    user={user}
                    toggle={this.handleToggle}
                    logOut={this.handleLogOut}
                  />
                ) : null}
                {user === null ? (
                  <div></div>
                ) : (
                  <span onClick={this.handleToggle}>{user.username}</span>
                )}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
