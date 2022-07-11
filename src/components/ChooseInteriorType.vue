<template>
  <wrapper ref="wrapper">
    <page-title>
      <h2>Samsung in-store BESPOKE simulator</h2>
      <p>Choose what you are interested in</p>
    </page-title>
    <interior-container>
      <div v-if="getInterior">
        <img :src="getInterior.image.default" alt="">
      </div>
      <div class="scrollbar">
        <interior-item
          v-for="(item, key) in items"
          :key="key"
          @click="activeInterior(item.number)"
          :active="item.active"
        >
          <div>
            <img :src="item.image.default" :alt="item.name">
          </div>
          <div>
            <img :src="item.shape.icon" :alt="item.shape.name">
            <span>{{ item.shape.name }}</span>
          </div>
          <div v-if="!item.active"></div>
          <p>{{ item.name }}</p>
        </interior-item>
      </div>
    </interior-container>
    <b-button @click="selectInterior">SELECT</b-button>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import { ref } from 'vue';
import { useGetters, useMutations } from '@/store/helper';
import styled from 'vue3-styled-components';
import interiors from '@/api/interiors';
import BButton from '@/components/BButton.vue';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.div`
  text-align: center;
  ${vw('margin-bottom', 20)}
  > h2 {
    font-weight: bold;
    ${vw('font-size', 28)}
    color: ${({ theme }) => theme.colors.blue};
    font-family: 'SamsungSharpSans';
  }
  > p {
    ${vw('font-size', 24)}
    color: ${({ theme }) => theme.colors.white};
  }
`;

const InteriorContainer = styled.div`
  display: flex;
  ${vw('height', 495)}
  ${vw('margin-bottom', 40)}
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  > div {
    :nth-child(1) {
      ${vw('width', 840)}
    }
    :nth-child(2) {
      overflow-y: auto;
    }
  }
`;

const InteriorItem = styled('div', { active: Boolean })`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  ${vw('width', 369)}
  ${vw('margin-left', 33)}
  > div {
    :nth-child(1) {
      ${vw('height', 217)}
      > img {
        box-sizing: border-box;
        ${vw('border', [2, 'solid transparent'])}
        ${({ active, theme }) => active && `
          ${vw('border', [2, 'solid', theme.colors.lightblue])}
        `}
        }
    }
    :nth-child(2) {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      z-index: 2;
      ${vw('width', 100)}
      ${vw('top', 86)}
      ${vw('right', 10)}
      ${vw('font-size', 18)}
      img {
        ${vw('width', 62)}
        ${vw('height', 62)}
      }
      span {
        ${vw('line-height', 24)}
      }
    }
    :nth-child(3) {
      background-color: rgba(0,0,0,0.5);
      content: '';
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
  > p {
    ${vw('margin', [10, 0, 25])}
    ${vw('font-size', 24)}
    text-align: center;
  }
`;

export default {
  components: {
    Wrapper,
    PageTitle,
    InteriorContainer,
    InteriorItem,
    BButton,
  },
  setup() {
    const items = ref([]);
    const wrapper = ref(null);
    const { setInterior, setInteriors } = useMutations();
    const { getInterior } = useGetters();

    interiors().then(({ data }) => {
      setInteriors(data);
      items.value = data.map((item, index) => ({
        ...item,
        active: !index,
      }));
    });

    const activeInterior = (idx) => {
      setInterior(idx);
      items.value = items.value.map((item) => ({
        ...item,
        active: item.number === idx,
      }));
    };

    const selectInterior = () => {
      wrapper.value.$el.remove();
    };

    return {
      items,
      wrapper,
      activeInterior,
      selectInterior,
      getInterior,
    };
  },
};
</script>
