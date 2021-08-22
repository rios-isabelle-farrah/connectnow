import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css"
import logo from "./Images/logo.jpeg"

const NavBar = () => {
  return (
 
    <nav className="nav-div">
 
      <NavLink to="/"><img className="logo-image" src={logo}></img></NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/"><h1 className="about-us">Get Connected for All</h1></NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/aboutus"><h1 className="about-us">About Us</h1></NavLink>

    </nav>
  );
};

export default NavBar;

// import "../Styles/Header.css"
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'

// const Header = () => {
//   return (

//   <Navbar bg="primary" variant="dark">
//   <Container>
//   <Navbar.Brand href="/" className="header-font"><img src="https://img.icons8.com/color/48/000000/internet--v2.png"/><strong>Get Connected For All</strong></Navbar.Brand>
//   <Nav className="justify-content-end">
//     <Nav.Link href="/">Home</Nav.Link>
//     <Navbar.Collapse className="justify-content-end">
//     <Nav.Link className="Nav-end"href="/aboutus">About Us</Nav.Link>
//       </Navbar.Collapse>
//     </Nav>
//   </Container>
// </Navbar>
    
//   );
// };

// export default Header;

