<template>
  <wrapper>
    <slot></slot>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.div`
  ${vw('width', 440)}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${vw('grid-row-gap', 30)}
  ${vw('margin-bottom', 50)}
`;

export default {
  components: { Wrapper },
};
</script>
