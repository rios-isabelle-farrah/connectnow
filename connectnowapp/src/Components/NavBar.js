import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Get Connected to All</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
    </nav>
  );
};

export default NavBar;