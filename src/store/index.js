import { createStore } from 'vuex';

export default createStore({
  state: {
    interior: 1,
    interiors: [],
    step: true,
    preview: false,
  },
  getters: {
    getInterior(state) {
      const [data] = state.interiors.filter((item) => item.number === state.interior);

      return data;
    },
  },
  mutations: {
    setInterior(state, i) {
      state.interior = i;
    },
    setInteriors(state, interiors) {
      state.interiors = interiors;
    },
    openStep(state, step) {
      state.step = step;
    },
    setPreviewState(state, preview) {
      state.preview = preview;
    },
  },
  actions: {
  },
});
