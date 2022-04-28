import { useSelector } from 'react-redux';
import './colors.scss';

function Colors() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  // const { firstColor, lastColor } = useSelector((state) => ({
  //   lastColor: state.lastColor, firstColor: state.firstColor,
  // }));
  return (
    <div className="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      -
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}

export default Colors;
