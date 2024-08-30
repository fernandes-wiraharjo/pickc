import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ icon, text }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt="Icon" />
      </div>
      <p className="card-text">{text}</p>
    </div>
  );
};

// Define PropTypes for validation
Card.propTypes = {
    icon: PropTypes.string.isRequired, // 'icon' should be a string (URL path) and is required
    text: PropTypes.string.isRequired, // 'text' should be a string and is required
};

export default Card;
