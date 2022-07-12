<template>
  <wrapper :isFridge="isFridge">
    <img :src="icon" :alt="title">
    <p>{{ title }}</p>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled('div', { isFridge: Boolean })`
  ${({ theme }) => `
    color: ${theme.colors.white}
    ${vw('border', [3, 'solid', theme.border.active])}
    ${vw('border-radius', 4)}
  `};
  ${({ isFridge }) => isFridge && `
    ${vw('height', 188)}
  `}
  ${vw('font-size', 18)}
  ${vw('width', 115)}
  ${vw('padding', [17, 0, 17])}
  text-align: center;
  > p {
    ${vw('margin-top', 20)}
  }
`;

export default {
  components: { Wrapper },
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    isFridge: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
