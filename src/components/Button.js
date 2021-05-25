import PropTypes from 'prop-types';

const operators = ['+', '-', '/', 'X', '='];

const Button = ({ name, handleClick }) => (
  <button style={operators.includes(name) ? { backgroundColor: 'orange' } : { backgroundColor: '' }} className={name === '0' ? 'zero-btn' : 'button'} onClick={() => handleClick(name)} type="button">{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: null,
};

export default Button;
