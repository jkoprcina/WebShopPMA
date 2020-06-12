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
import "../css/navMenu.css";
import { getUserById } from "../apiRequests";
import { getCookie } from "../cookie";

export class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        this.setState({ user });
      });
    }
  }

  render() {
    const { user } = this.state;
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
                {user === null ? (
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
                {user === null ? <div></div> : <span>{user.username}</span>}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
