<template>
  <div>
    <b-step-header
      title="INTERIOR Choose your type"
      next-text="Product"
      :step="['01', '02']"
      :next-callback="moveProductPage"
    />
    <b-step-content>
      <interior-item
        v-for="(item, key) in getInteriors"
        :key="key"
        :item="item"
      />
    </b-step-content>
  </div>
</template>

<script>
import BStepHeader from '@/components/BStepHeader.vue';
import { useRouter } from 'vue-router';
import InteriorItem from '@/components/InteriorItem.vue';
import { useGetters } from '@/store/helper';
import BStepContent from '@/components/BStepContent.vue';

export default {
  components: { BStepHeader, InteriorItem, BStepContent },
  setup() {
    const router = useRouter();
    const { getInteriors } = useGetters();
    const moveProductPage = () => {
      router.push({ name: 'ProductPage' });
    };

    return {
      moveProductPage,
      getInteriors,
    };
  },
};
</script>
