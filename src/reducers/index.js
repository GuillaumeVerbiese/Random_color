import { CHANGE_DIRECTION, CHANGE_DIRECTION_TO_LEFT, CHANGE_DIRECTION_TO_RIGHT } from '../actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 1,
  theme: 'light',
};

// Le rôle du reducer est
// de produire une nouvelle version du state à partir :
// - du state courant,
// - d'une action à effectuer
function reducer(state = initialState, action = {}) {
  console.log('le reducer s\'exécute', state, action);

  switch (action.type) {
    case CHANGE_DIRECTION_TO_LEFT:
      return {
        ...state,
        direction: '270deg',
      };
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    // case 'CHANGE_DIRECTION_TO_135DEG':
    //   return {
    //     ...state,
    //     direction: '135deg',
    //   };
    // case 'CHANGE_DIRECTION_TO_225DEG':
    //   return {
    //     ...state,
    //     direction: '225deg',
    //   };
    // case 'CHANGE_DIRECTION_TO_315DEG':
    //   return {
    //     ...state,
    //     direction: '315deg',
    //   };
    case 'CHANGE_FIRST_COLOR':
      // pour les action avec payload, on peut
      // récupérer depuis l'action les informations permettant de la préciser
      //
      // il arrive que l'on est besoin de se baser sur l'ancienne valeur
      // d'une propriété du state pour déterminer la nouvelle
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case 'CHANGE_LAST_COLOR':
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };
    default:
      return state;
  }

  // équivalent avec un if à :
  /*
  // si l'action qu'on nous demande de réaliser est de type CHANGE_DIRECTION_TO_LEFT
  if (action.type === 'CHANGE_DIRECTION_TO_LEFT') {
    console.log('je dois touner les bons levier pour
     répondre à la demande de changement de direction');

    // je prépare la nouvelle version de l'état
    // qui traduit la réalisation de cette action
    //
    // grâce au spread operator
    // j'effectue une copie de l'ancien state
    // et j'en profite pour redéfinir les propriétés que je souhaite
    const newState = {
      ...state,
      direction: '270deg',
    };

    // équivalent à :
    // const newState = { ...state };
    // newState.direction = '270deg';

    // je la retourne
    // (pour que le store remplace l'ancien état par ce nouveau)
    return newState;
  } if (action.type === 'CHANGE_DIRECTION_TO_RIGHT') {
    return {
      ...state,
      direction: '90deg',
    };
  }
  return state;
  */
}

export default reducer;
