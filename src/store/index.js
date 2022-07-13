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
      info: {},
    },
  },
  getters: {
    getInterior(state) {
      const [data] = state.interiors.filter((item) => item.number === state.interior);

      return data;
    },
    getAvailableFridgeList(state) {
      const items = {};

      Object.keys(state.fridge.modelCode).flatMap((key) => {
        const { twotone, monotone, panelready } = state.fridge.modelCode[key];
        const [top, bottom] = Object.values(panelready);
        const count = twotone.length + monotone.length + top.length + bottom.length;

        if (!count) return [];

        return state.fridge.info[key];
      }).forEach((item) => {
        if (!items[item.doorLength]) items[item.doorLength] = [];

        items[item.doorLength].push(item);
      });

      return Object.values(items).reverse();
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
    setFridgeData(state, { fridgeBodyCode, fridgeModelCode, fridgeInfo }) {
      state.fridge.bodyCode = fridgeBodyCode;
      state.fridge.modelCode = fridgeModelCode;
      state.fridge.info = fridgeInfo;
    },
  },
  actions: {
    async fetchFridgeData({ commit }) {
      const [fridgeBodyCode, fridgeModelCode, fridgeInfo] = await Promise.all([
        bespoke.getFridgeBodyCode(),
        bespoke.getFridgeModelCode(),
        bespoke.getFridgeInfo(),
      ]);

      commit('setFridgeData', { fridgeBodyCode, fridgeModelCode, fridgeInfo });
    },
  },
});
