import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartIcon from "./CartIcon";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    return (

        <Navbar bg="dark" expand="xl">
            <Container>
                
                <Navbar.Brand><Link to="/">Que-Broches</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home" style={{color: "blue"}}>Productos</Nav.Link>
                        <Nav.Link href="#link" style={{color: "blue"}}>Contacto</Nav.Link> */}
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/broches">Broches</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/secadores">Secadores</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/sopapas">Sopapas</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/varios">Varios</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartIcon/>
            </Container>
        </Navbar>
    )
}

export default NavBar
