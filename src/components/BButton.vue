<template>
  <wrapper>
    <slot></slot>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.button`
  ${vw('font-size', 28)}
  ${vw('border-radius', 27)}
  ${vw('min-width', 260)}
  ${vw('height', 54)}
  font-family: 'SamsungOne';
  font-weight: bold;
  cursor: pointer;
  ${({ theme }) => `
    background-color: ${theme.colors.darkblue};
    color: ${theme.colors.white};
  `};
`;

export default {
  components: { Wrapper },
};
</script>
