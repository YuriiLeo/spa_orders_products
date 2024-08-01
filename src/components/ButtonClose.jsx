import PropTypes from "prop-types";
import closeIcon from "../assets/icons/close.svg";

const ButtonClose = ({onClose}) => {
  return (
    <button className="order-details-close" onClick={onClose}>
    <svg className="close-icon">
      <use href={`${closeIcon}#close`} />
    </svg>
  </button>
  )
};

ButtonClose.propTypes = {
    onClose: PropTypes.func.isRequired
  };
export default ButtonClose;
