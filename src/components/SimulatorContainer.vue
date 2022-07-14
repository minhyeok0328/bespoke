<template>
  <wrapper>
    <div>
      <img v-if="getInterior" :src="getInterior.image.default" alt="">
    </div>
    <div>
      <float-button
        icon="/images/floating-icon-home.png"
        @click="reload"
      />
      <float-button
        icon="/images/floating-icon-interior-crop.png"
        :icon-width="32"
        text="INTERIOR"
        @click="moveInteriorPage"
      />
      <float-button
        icon="/images/floating-icon-refrigerator.png"
        :icon-width="26"
        text="PRODUCT"
        @click="moveProductPage"
      />
      <float-button
        icon="/images/product-detail.png"
      />
    </div>
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import { useGetters } from '@/store/helper';
import { vw } from '@/styles/mixin';
import { useRouter } from 'vue-router';
import FloatButton from './FloatButton.vue';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  > div {
    position: absolute;
    :nth-child(1) {
      left: 0;
      top: 0;
      img {
        width: 100vw;
        height: 100vh;
      }
    }
    :nth-child(2) {
      ${vw('left', 40)}
      ${vw('top', 28)}
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr;
      ${vw('grid-column-gap', 20)}
    }
  }
`;

export default {
  components: { Wrapper, FloatButton },
  setup() {
    const router = useRouter();
    const { getInterior, getAvailableFridgeList } = useGetters();
    const reload = () => window.location.replace('/');
    const moveInteriorPage = () => router.push({ name: 'InteriorPage' });
    const moveProductPage = () => router.push({ name: 'ProductPage' });

    return {
      getInterior,
      getAvailableFridgeList,
      reload,
      moveInteriorPage,
      moveProductPage,
    };
  },
};
</script>
