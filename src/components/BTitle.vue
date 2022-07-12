<template>
  <wrapper>
    <slot></slot>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.div`
  ${vw('font-size', 28)}
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  ${vw('margin-bottom', 30)}
`;

export default {
  components: { Wrapper },
};
</script>
