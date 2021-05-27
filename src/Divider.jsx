import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Divider.css';

const star = <FontAwesomeIcon icon={faStar} />;

export const Divider = ({ variant = 'light' }) => {
  return (
    <div className={`divider-custom divider-${variant}`}>
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon">{star}</div>
      <div className="divider-custom-line"></div>
    </div>
  );
};
