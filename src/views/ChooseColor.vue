<template>
  <wrapper>
    <b-step-header
      title="Choose your color"
      prev-text="Product"
      :step="['02', '02']"
      :prev-callback="moveProductPage"
    />
    <b-step-content>
      <b-title>TWO TONE</b-title>
      <b-product-list>
        <b-product
          icon="/images/samples/img-colorchip-satin-skyblue-clean-white.png"
          title="SATIN SKYBLUE + CLEAN WHITE"
          name="colorchip"
        />
        <b-product
          icon="/images/samples/img-colorchip-clean-white-clean-peach.png"
          title="CLEAN WHITE + CLEAN PEACH"
          name="colorchip"
        />
        <b-product
          icon="/images/samples/img-colorchip-satin-skyblue-clean-white.png"
          title="SATIN SKYBLUE + CLEAN WHITE"
          name="colorchip"
        />
      </b-product-list>
      <b-title>MONO TONE</b-title>
      <b-product-list>
        <b-product
          icon="/images/samples/img-colorchip-satin-skyblue-clean-white.png"
          title="SATIN SKYBLUE + CLEAN WHITE"
          name="colorchip"
        />
        <b-product
          icon="/images/samples/img-colorchip-clean-white-clean-peach.png"
          title="CLEAN WHITE + CLEAN PEACH"
          name="colorchip"
        />
        <b-product
          icon="/images/samples/img-colorchip-satin-skyblue-clean-white.png"
          title="SATIN SKYBLUE + CLEAN WHITE"
          name="colorchip"
        />
      </b-product-list>
      <b-title>FREE SELECTION</b-title>
      <b-product-list>
        <b-product
          icon="/images/samples/img-colorchip-satin-skyblue-clean-white.png"
          title="SATIN SKYBLUE + CLEAN WHITE"
          name="colorchip"
        />
        <b-product
          icon="/images/samples/img-colorchip-clean-white-clean-peach.png"
          title="CLEAN WHITE + CLEAN PEACH"
          name="colorchip"
        />
        <b-product
          icon="/images/samples/img-colorchip-satin-skyblue-clean-white.png"
          title="SATIN SKYBLUE + CLEAN WHITE"
          name="colorchip"
        />
      </b-product-list>
    </b-step-content>
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import BStepHeader from '@/components/BStepHeader.vue';
import { useRouter } from 'vue-router';
import BStepContent from '@/components/BStepContent.vue';
import BTitle from '@/components/BTitle.vue';
import BProductList from '@/components/BProductList.vue';
import BProduct from '@/components/BProduct.vue';

const Wrapper = styled.div`

`;

export default {
  components: {
    Wrapper,
    BStepHeader,
    BStepContent,
    BTitle,
    BProductList,
    BProduct,
  },
  setup() {
    const router = useRouter();
    const moveProductPage = () => {
      router.push({ name: 'Product' });
    };
    return {
      moveProductPage,
    };
  },
};
</script>
