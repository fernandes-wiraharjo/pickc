// src/components/Navbar.js
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo_x4.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </div>
      <div className="navbar-right">
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
