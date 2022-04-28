import { useSelector } from 'react-redux';
import './nbcolors.scss';

function NbColors() {
  const nbColors = useSelector((state) => state.nbColors);

  return (
    <div className="nbColors">
      {nbColors} couleur(s) générée(s)
    </div>
  );
}

export default NbColors;
