import Button from 'src/components/Button';

import './directionButtons.scss';

function DirectionButtons() {
  return (
    <div className="buttons group">
      <Button label="To Left" direction="270deg" />
      <Button label="To Right" direction="90deg" />
      <Button label="To 45" direction="45deg" />
      <Button label="To 135" direction="135deg" />
      <Button label="To 225" direction="225deg" />
      <Button label="To 315" direction="315deg" />
    </div>
  );
}

export default DirectionButtons;
