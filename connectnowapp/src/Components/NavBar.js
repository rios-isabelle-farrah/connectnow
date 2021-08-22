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