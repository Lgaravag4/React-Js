import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartIcon from "./CartIcon";

const NavBar = () => {
    return (

        <Navbar bg="dark" expand="xl">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Brand href="#home" style={{color: "blue"}}>Que-Broches</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color: "blue"}}>Productos</Nav.Link>
                        <Nav.Link href="#link" style={{color: "blue"}}>Contacto</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color: "blue"}}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
                <CartIcon/>
            </Container>
        </Navbar>
    )
}

export default NavBar
