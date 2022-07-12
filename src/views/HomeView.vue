<template>
  <wrapper>
    <b-step-header
      title="Choose Your Product"
      prev-text="Interior Style"
      next-text="Color"
      :step="['01', '02']"
    />
    <b-step-content>
      <b-title>REF</b-title>
      <b-product-list>
        <b-product
          v-for="(fridge, key) in getAvailableFridgeList"
          :key="key"
          :icon="fridge.icon"
          :title="fridge.title"
          :is-fridge="true"
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
    const { getAvailableFridgeList } = useGetters();
    return {
      getAvailableFridgeList,
    };
  },
};
</script>
