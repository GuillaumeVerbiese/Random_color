/* eslint-disable no-underscore-dangle */
// On importe createStore, la fonction proposé par redux
// pour créer un store
import { createStore } from 'redux';

// on importe notre reducer,
// l'élément de notre architecture logicielle
// spécialiste de la modification du state de NOTRE application
import reducer from 'src/reducers';

// cette fonction permet de créer un store
// générique et de nous le renvoyer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// on met à disposition le store créé
export default store;
