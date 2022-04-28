import './button.scss';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeDirection } from '../../actions';

function Button({ label, direction }) {
  const currentDirection = useSelector((state) => state.direction);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={direction === currentDirection ? 'button button--selected' : 'button'}
      onClick={
        () => {
          console.log('click sur le bouton');
          dispatch(changeDirection(direction));
        }
      }
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Button;
