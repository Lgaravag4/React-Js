import { Navbar, Container, Nav, NavDropdown, Badge } from "react-bootstrap";
import CartIcon from "./CartIcon";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {

    const {items, total}=useContext(CartContext)
    return (

        <Navbar bg="dark" expand="xl">
            <Container>
                <Navbar.Brand><Link to="/">Que-Broches</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="me-auto"style={{color: "blue"}}>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown" >
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/broches">Broches</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/secadores">Secadores</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/sopapas">Sopapas</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className={({isActive}) => isActive ? "activeClass" : undefined} to="category/varios">Varios</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Brand>
                </Navbar.Collapse>
                <NavLink to='/cart'><Badge><CartIcon/> {items.length > 0 && total()}</Badge></NavLink>
            </Container>
        </Navbar>
    )
}

export default NavBar
