'use strict';

function transformStateWithClones(state, actions) {
  // Faz uma cópia inicial para garantir que o objeto original não será alterado
  const cloneObject = { ...state };
  const result = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(cloneObject, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete cloneObject[key];
      }
    } else if (action.type === 'clear') {
      for (const key in cloneObject) {
        delete cloneObject[key];
      }
    }

    // Salva uma cópia do estado atual após cada ação
    result.push({ ...cloneObject });
  }

  return result;
}

module.exports = transformStateWithClones;
