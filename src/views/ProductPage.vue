<template>
  <wrapper>
    <b-step-header
      title="Choose Your Product"
      prev-text="Interior Style"
      next-text="Color"
      :step="['01', '02']"
      :next-callback="moveColorPage"
      :prev-callback="moveInteriorPage"
    />
    <b-step-content>
      <b-title>REF</b-title>
      <b-product-list
        v-for="(list, key) in getAvailableFridgeList"
        :key="key"
      >
        <b-product
          v-for="(fridge, i) in list"
          :key="i"
          :icon="fridge.icon"
          :title="fridge.title"
          :subtitle="fridge.subtitle"
          :is-fridge="true"
          name="fridge"
        />
      </b-product-list>
    </b-step-content>
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import BStepHeader from '@/components/BStepHeader.vue';
import BStepContent from '@/components/BStepContent.vue';
import BTitle from '@/components/BTitle.vue';
import BProduct from '@/components/BProduct.vue';
import BProductList from '@/components/BProductList.vue';
import { useGetters } from '@/store/helper';
import { useRouter } from 'vue-router';

const Wrapper = styled.div`

`;

export default {
  components: {
    Wrapper,
    BStepHeader,
    BStepContent,
    BTitle,
    BProduct,
    BProductList,
  },
  setup() {
    const router = useRouter();
    const { getAvailableFridgeList } = useGetters();
    const moveColorPage = () => {
      router.push({ name: 'ChooseColor' });
    };
    const moveInteriorPage = () => {
      router.push({ name: 'InteriorPage' });
    };
    return {
      getAvailableFridgeList,
      moveColorPage,
      moveInteriorPage,
    };
  },
};
</script>
