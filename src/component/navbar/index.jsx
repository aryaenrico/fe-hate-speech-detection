import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Preprocessing</Nav.Link>
            <Nav.Link href="pengujian">Pengujian</Nav.Link>
            <Nav.Link href="#pricing">Testing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
    </>
  );
}

export  {NavigationBar};