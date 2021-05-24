import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (
  <button onClick={() => handleClick(name)} type="button">{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: null,
};

export default Button;
