function moduleGameGrid(options) {
  const { width, height } = options;

  return {
    state: () => ({
      width,
      height,
      pieces: [],
      players: [0, 1],
      turnPlayer: 0,
      turnNumber: 0,
    }),
    mutations: {
      putPiece(state, payload) {
        const { x, y } = payload;
        const { turnNumber, players } = state;
        const player = (turnNumber + players.length) % players.length;
        state.pieces.push({ x, y, player });
        state.turnNumber++;
      },
    },
    actions: {
      putPiece({ commit }, payload) {
        commit('putPiece', payload);
      },
    },
    getters: {
      width: state => state.width,
      height: state => state.height,
      turnNumber: state => state.turnNumber,
      turnPlayer: state => state.turnPlayer,
      pieces: state => state.pieces,
    },
  };
}

export default moduleGameGrid;
