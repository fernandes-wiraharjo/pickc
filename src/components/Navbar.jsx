import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo_x4.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</a>
        <a href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</a>
      </div>
      <div className="navbar-right">
        <a href="/contact" className={`nav-link contact-button`}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
