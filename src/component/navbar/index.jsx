import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {  Link } from "react-router-dom";
import Style from "./navbar.module.css";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
          
            <Link to={`/`} className={Style.text}>Upload Dataset</Link>
            <Nav.Link href="pengujian">Pengujian</Nav.Link>
            <Nav.Link href="#pricing">Testing</Nav.Link>
            <NavDropdown title="DATA" id="nav-dropdown" className={Style.textDrop}>
            <NavDropdown.Item > <Link to={`/testing`} className={Style.text2}>Data Test</Link></NavDropdown.Item>
            <NavDropdown.Item > <Link to={`/dataset`} className={Style.text2}>Add Dataset</Link></NavDropdown.Item>
            <NavDropdown.Item >
            <Link to={`/testings`} className={Style.text2}>Data Test Excel</Link>
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export { NavigationBar };
