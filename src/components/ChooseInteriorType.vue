<template>
  <wrapper ref="wrapper">
    <page-title>
      <h2>Samsung in-store BESPOKE simulator</h2>
      <p>Choose what you are interested in</p>
    </page-title>
    <interior-container>
      <div v-if="getInterior">
        <img :src="getInterior.image.default" :alt="getInterior.name">
      </div>
      <div class="scrollbar">
        <interior-item
          v-for="(interior, key) in interiorItems"
          :key="key"
          @click="activeInterior(interior.number)"
          :item="interior"
        />
      </div>
    </interior-container>
    <b-button @click="selectInterior">SELECT</b-button>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import { ref } from 'vue';
import { useActions, useGetters, useMutations } from '@/store/helper';
import styled from 'vue3-styled-components';
import Bespoke from '@/service/Bespoke';
import BButton from '@/components/BButton.vue';
import InteriorItem from '@/components/InteriorItem.vue';

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

export default {
  components: {
    Wrapper,
    PageTitle,
    InteriorContainer,
    InteriorItem,
    BButton,
  },
  setup() {
    const bespoke = new Bespoke();
    const interiorItems = ref([]);
    const wrapper = ref(null);
    const { setInterior, setInteriors } = useMutations();
    const { getInterior } = useGetters();
    const { fetchFridgeData } = useActions();

    bespoke.getInterior().then((data) => {
      setInteriors(data);
      interiorItems.value = data.map((item, index) => ({
        ...item,
        active: !index,
      }));
    });

    const activeInterior = (idx) => {
      setInterior(idx);
      interiorItems.value = interiorItems.value.map((item) => ({
        ...item,
        active: item.number === idx,
      }));
    };

    const selectInterior = async () => {
      await fetchFridgeData();

      wrapper.value.$el.remove();
    };

    return {
      interiorItems,
      wrapper,
      activeInterior,
      selectInterior,
      getInterior,
    };
  },
};
</script>
