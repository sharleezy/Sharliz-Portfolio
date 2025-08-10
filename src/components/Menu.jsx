import "./Menu.scss";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu-button">Home</NavLink>
      <NavLink to="/dev-work" className="menu-button">Work</NavLink>
      <NavLink to="/about" className="menu-button">About</NavLink>
    </nav>
  );
};

export default Menu;