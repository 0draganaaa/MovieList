import { Navbar, Container, Nav } from "react-bootstrap"

export const Navigation = () => {
  return (
    <Navbar expand="lg" className="navigator">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          Movie Catalogue
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="nav-links" href="/lists">My Movie Lists</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}