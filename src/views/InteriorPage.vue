<template>
  <div>
    <b-step-header
      title="INTERIOR Choose your type"
      next-text="Product"
      :step="['01', '02']"
      :next-callback="moveProductPage"
    />
  </div>
</template>

<script>
import BStepHeader from '@/components/BStepHeader.vue';
import { useRouter } from 'vue-router';

export default {
  components: { BStepHeader },
  setup() {
    const router = useRouter();
    const moveProductPage = () => {
      router.push({ name: 'ProductPage' });
    };

    return {
      moveProductPage,
    };
  },
};
</script>
