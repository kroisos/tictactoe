import { NullPiece } from "../game/piece";

function GameStore(initialState) {
  // Save copy of initialState
  const firstState = {
    pieces: [...initialState.startingPieces],
    players: [1, 2],
    turnPlayer: 1,
    turnNumber: 0,
    userLocked: false,
    ...initialState,
  };

  return {
    state: {
      pieces: [...firstState.startingPieces],
      players: [...firstState.players],
      ...firstState,
    },
    mutations: {
      setNextTurn(state) {
        const { players } = state;
        state.turnNumber++;
        state.turnPlayer = 1 + ((state.turnNumber + players.length) % players.length);
        state.userLocked = false;
      },
      putPiece(state, payload) {
        state.userLocked = true;
        const { x, y, player } = payload;
        state.pieces.push({ ...NullPiece, x, y, player });
      },
      flipPiecesBegin(state, payload) {
        const { piecesToFlip } = payload;

        // https://v2.vuejs.org/v2/guide/reactivity.html#For-Arrays
        state.pieces.forEach((piece, i) => {
          const { x, y } = piece;
          const toFlip = piecesToFlip.findIndex(p => p.x === x && p.y === y);
          state.pieces.splice(
            i, 1, toFlip < 0 ? { ...piece } : { ...piece, flipping: true });
        });
      },
      flipPieceComplete(state, payload) {
        const { x, y } = payload;

        const iPiece = state.pieces.findIndex(p => p.x === x && p.y === y)
        const newPiece = { ...state.pieces[iPiece] };

        if (newPiece.player === 1) {
          newPiece.player = 2;
        } else {
          newPiece.player = 1;
        }
        newPiece.flipping = false;

        state.pieces.splice(iPiece, 1, newPiece);
      },
      reset(state) {
        state.pieces = [...firstState.startingPieces];
        state.players = [...firstState.players];
        state.turnPlayer = firstState.turnPlayer;
        state.turnNumber = firstState.turnNumber;
        state.userLocked = firstState.false;
      },
    },
    actions: {
      putPiece({ commit }, payload) {
        commit('putPiece', payload);
      },
      setNextTurn({ commit }, payload) {
        commit('setNextTurn', payload);
      },
      flipPiecesBegin({ commit }, payload) {
        commit('flipPiecesBegin', payload);
      },
      flipPieceComplete({ commit }, payload) {
        commit('flipPieceComplete', payload);
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
