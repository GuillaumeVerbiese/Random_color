import './colorButtons.scss';
import { useDispatch } from 'react-redux';
import { changeFirstColor, changeLastColor } from '../../actions';
import { randomHexColor } from '../../utils';

function ColorButtons() {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        onClick={
          () => {
            dispatch(changeFirstColor(randomHexColor()));
            console.log('je veux changer la première couleur');
          }
        }
      >Random First
      </button>
      <button
        type="button"
        className="button"
        onClick={
          () => {
            dispatch(changeLastColor(randomHexColor()));
            dispatch(changeFirstColor(randomHexColor()));
;
          }
        }
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        onClick={
          () => {
            dispatch(changeLastColor(randomHexColor()));
          }
        }
      >
        Random Last
      </button>
    </div>
  );
}

export default ColorButtons;
