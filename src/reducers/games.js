const initialState = {
  gamesData: [],
  gameSelected: {},
  error: ''
};

function games(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_GAMES':
      return {
        ...state
      };
    case 'LOAD_GAMES_SUCCESS':
      return {
        ...state,
        gamesData: action.payload
      };
    case 'GET_ITEM_BY_ID':
      const oneGame = state.gamesData.filter((game) => {
        return game.id === action.payload
      });
      return {
        ...state,
        gameSelected: oneGame[0]
      };
    case 'LOAD_GAMES_FAIL':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default games;