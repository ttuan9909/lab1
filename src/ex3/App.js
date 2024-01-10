import logo from "./logo.svg";
import "./App.css";


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#search">Search</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;