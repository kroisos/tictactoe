function GameStore(initialState) {
  // Save copy of initialState
  const firstState = {
    pieces: initialState.startingPieces,
    players: [0, 1],
    turnPlayer: 0,
    turnNumber: 0,
    userLocked: false,
  };

  return {
    state: () => ({
      ...firstState,
      pieces: [...firstState.pieces],
    }),
    mutations: {
      putPiece(state, payload) {
        state.userLocked = true;
        const { x, y, player } = payload;
        state.pieces.push({ x, y, player });
      },
      setNextTurn(state) {
        const { players } = state;
        state.turnNumber++;
        state.turnPlayer =
          (state.turnNumber + players.length) % players.length;
        state.userLocked = false;
      },
      flipPieces(state, payload) {
        const { piecesToFlip } = payload;

        state.pieces = state.pieces.map(({ x, y, player }) => {
          const toFlip = piecesToFlip.find(
            p => p.x === x && p.y === y);

          if (toFlip) {
            if (toFlip.player === 1) {
              return { x, y, player: 0 };
            }
            return { x, y, player: 1 };
          }
          return { x, y, player };
        });
      },
      reset(state) {
        debugger;
        Object.keys(firstState).forEach((k) => {
          state[k] = firstState[k];
        });
      },
    },
    actions: {
      putPiece({ commit }, payload) {
        commit('putPiece', payload);
      },
      setNextTurn({ commit }, payload) {
        commit('setNextTurn', payload);
      },
      flipPieces({ commit }, payload) {
        commit('flipPieces', payload);
      },
      reset({ commit }) {
        commit('reset');
      },
    },
    getters: {
      pieces: state => state.pieces,
      players: state => state.players,
      turnPlayer: state => state.turnPlayer,
      turnNumber: state => state.turnNumber,
      userLocked: state => state.userLocked,
    },
  };
}

export default GameStore;
