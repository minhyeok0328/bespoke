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
    </b-step-content>
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import BStepHeader from '@/components/BStepHeader.vue';
import BStepContent from '@/components/BStepContent.vue';
import BTitle from '@/components/BTitle.vue';

const Wrapper = styled.div`

`;

export default {
  components: {
    Wrapper,
    BStepHeader,
    BStepContent,
    BTitle,
  },
};
</script>
