import { useSelector } from 'react-redux';
import './gradient.scss';

function Gradient() {
  const { direction, firstColor, lastColor } = useSelector((state) => state);
  return (
    <div
      className="gradient"
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
    />
  );
}

export default Gradient;
