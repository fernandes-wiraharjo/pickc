import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon">
          <img src="/logo_x4.png" alt="Icon" />
        </div>
        <div className="footer-navlinks">
          <a href="#" className="navlink">Home</a>
          <a href="#" className="navlink">Contact</a>
          <a href="#" className="navlink">About</a>
        </div>
        <div className="footer-social-icons">
          <img src="/icon_fb.png" alt="Facebook" className="social-icon" />
          <img src="/icon_linkedin.png" alt="LinkedIn" className="social-icon" />
          <img src="/icon_tiktok.png" alt="TikTok" className="social-icon" />
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom-links">
        <a href="#" className="bottom-link">© 2024 PickC</a>
        <a href="#" className="bottom-link">Privacy Policy</a>
        <a href="#" className="bottom-link">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
