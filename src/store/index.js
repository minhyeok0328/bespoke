import { createStore } from 'vuex';

export default createStore({
  state: {
    interior: 1,
    interiors: [],
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
    setInteriors(state, items) {
      state.interiors = items;
    },
  },
  actions: {
  },
});
