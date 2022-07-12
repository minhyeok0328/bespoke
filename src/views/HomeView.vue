<template>
  <wrapper>
    <b-step>
      <b-step-header
        title="Choose Your Product"
        prev-text="Interior Style"
        next-text="Color"
        :step="['01', '02']"
      />
    </b-step>
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import BStep from '@/components/BStep.vue';
import BStepHeader from '@/components/BStepHeader.vue';

const Wrapper = styled.div`

`;

export default {
  components: { Wrapper, BStep, BStepHeader },
};
</script>
