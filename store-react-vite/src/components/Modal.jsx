import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="buttonExit" onClick={handleClose}>x</button>
      </div>
    </div>
  );
};

// Define PropTypes
Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
