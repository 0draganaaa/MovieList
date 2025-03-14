import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

export const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link href="/"><Navbar.Brand>Movie Catalogue</Navbar.Brand></Nav.Link>
        <Nav.Link href="/login">My lists</Nav.Link>
      </Container>
    </Navbar>
  )
}