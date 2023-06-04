import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarHeader = () => {
    const cartProduct=useSelector(state=>state.cart)
  return (
    <>
      {" "}
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Redux-Toolkit </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Products
              </Nav.Link>
            </Nav>
            <Navbar.Collapse />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>
                  My Bag {cartProduct.length}
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
