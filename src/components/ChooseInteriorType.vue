<template>
  <wrapper ref="wrapper">
    <page-title>
      <h2>Samsung in-store BESPOKE simulator</h2>
      <p>Choose what you are interested in</p>
    </page-title>
    <interior-container>
      <template v-slot:preview>
        <div class="preview">
          <img v-if="getInterior" :src="getInterior.image.default" :alt="getInterior.name">
        </div>
      </template>
      <interior-item
        v-for="(item, key) in getInteriors"
        :key="key"
        @click="setInterior(item.number)"
        :item="item"
        :dimmed="true"
      />
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
import InteriorContainer from '@/components/InteriorContainer.vue';
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
    const wrapper = ref(null);
    const { setInterior, setInteriors } = useMutations();
    const { getInterior, getInteriors } = useGetters();
    const { fetchFridgeData } = useActions();

    bespoke.getInterior().then((data) => {
      setInteriors(data);
    });

    const selectInterior = async () => {
      await fetchFridgeData();

      wrapper.value.$el.remove();
    };

    return {
      wrapper,
      setInterior,
      selectInterior,
      getInterior,
      getInteriors,
    };
  },
};
</script>
