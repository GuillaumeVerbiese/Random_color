// == Imports
import store from 'src/store';
import {
  changeDirectionToLeft, changeDirectionToRight, changeDirection,
  changeFirstColor, changeLastColor,
} from './actions';

import { randomHexColor, generateSpanColor } from './utils';

console.log(store);
// le store expose 3 fonctions :
// - getState qui permet de récupérer la valeur courante du state

console.log(store.getState());

// == Rendu dans le DOM
// Dans nos fonctions de rendu,
// On s'appuie sur les données du state
// pour produire notre UI
function renderNbColors() {
  const { nbColors } = store.getState();

  // Ici, on est en vanilla, on accède directement au DOM
  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  // on vient ici modifier directement 'en ligne' le style
  // de notre élément dans le DOM
  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// on abonne nos fonction de rendu aux mises à jour du store
// -> ces fonction seront apellées de manière automatique par
// le store suite au dispatch d'une action
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    const firstColor = randomHexColor();
    const lastColor = randomHexColor();

    // changer les 2 couleurs, c'est :
    // - changer la première
    // - changer la dernière
    store.dispatch(changeFirstColor(firstColor));
    store.dispatch(changeLastColor(lastColor));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const firstRandomColor = randomHexColor();
    store.dispatch(changeFirstColor(firstRandomColor));
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const lastRandomColor = randomHexColor();
    store.dispatch(changeLastColor(lastRandomColor));
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    console.log('je veux changer la direction pour aller à gauche');

    // quand on souhaite effectuer une modification du state
    // depuis la couche UI de notre application
    // on demande au store à ce que l'action souhaitée soit accomplie.
    store.dispatch(changeDirectionToLeft());
  });
// document.querySelector("[data-direction='45deg']")
//   .addEventListener('click', (evt) => {
//     store.dispatch({ type: CHANGE_DIRECTION, direction: evt.target.dataset.direction });
//   });
// document.querySelector("[data-direction='135deg']")
//   .addEventListener('click', (evt) => {
//     store.dispatch({ type: 'CHANGE_DIRECTION', direction: evt.target.dataset.direction });
//   });
// document.querySelector("[data-direction='225deg']")
//   .addEventListener('click', (evt) => {
//     store.dispatch({ type: 'CHANGE_DIRECTION', direction: evt.target.dataset.direction });
//   });
// document.querySelector("[data-direction='315deg']")
//   .addEventListener('click', (evt) => {
//     store.dispatch({ type: 'CHANGE_DIRECTION', direction: evt.target.dataset.direction });
//   });
document.getElementById('to135')
  .addEventListener('click', () => {
    // Ici, on se rend compte qu'entre différentes action de changement de direction
    // La seule qui change est l'angle à appliquer.
    store.dispatch(changeDirection('135deg'));
  });
document.getElementById('to225')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('225deg'));
  });

document.getElementById('to315')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('315deg'));
  });
document.getElementById('to45')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('45deg'));
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirectionToRight());
  });
