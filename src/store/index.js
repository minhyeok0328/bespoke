import { createStore } from 'vuex';
import Bespoke from '@/service/Bespoke';

const bespoke = new Bespoke();

export default createStore({
  state: {
    interior: 1,
    interiors: [],
    step: true,
    preview: false,
    fridge: {
      bodyCode: {},
      modelCode: {},
    },
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
    setFridgeData(state, { fridgeBodyCode, fridgeModelCode }) {
      state.fridge.bodyCode = fridgeBodyCode;
      state.fridge.modelCode = fridgeModelCode;
    },
  },
  actions: {
    async fetchFridgeData({ commit }) {
      const [fridgeBodyCode, fridgeModelCode] = await Promise.all([
        bespoke.getFridgeBodyCode(),
        bespoke.getFridgeModelCode(),
      ]);

      commit('setFridgeData', { fridgeBodyCode, fridgeModelCode });
    },
  },
});
