function SettingsStore(initialState) {
  // Save copy of initialState
  const firstState = {
    width: initialState.width,
    height: initialState.height,
    startingPieces: initialState.startingPieces,
  };

  return {
    state: () => ({
      ...firstState,
      startingPieces: [...firstState.startingPieces],
    }),
    mutations: {
      setWidth(state, payload) {
        state.width = payload.width;
      },
      setHeight(state, payload) {
        state.height = payload.height;
      },
    },
    actions: {
      setWidth({ commit }, payload) {
        commit('setWidth', payload);
      },
      setHeight({ commit }, payload) {
        commit('setHeight', payload);
      },
    },
    getters: {
      width: state => state.width,
      height: state => state.height,
    },
  };
}

export default SettingsStore;
