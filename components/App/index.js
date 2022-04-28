// == Import Composants
import NbColors from 'src/components/NbColors';
import ColorButtons from 'src/components/ColorButtons';
import Colors from 'src/components/Colors';
import Gradient from 'src/components/Gradient';
import DirectionButtons from 'src/components/DirectionButtons';

// == Import CSS
import './app.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <NbColors />
      <ColorButtons />
      <Colors />
      <Gradient />
      <DirectionButtons />
    </div>
  );
}

// == Export
export default App;
