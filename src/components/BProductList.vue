<template>
  <wrapper>
    <slot></slot>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  ${vw('grid-column-gap', 20)}
  ${vw('margin-bottom', 50)}
`;

export default {
  components: { Wrapper },
};
</script>
