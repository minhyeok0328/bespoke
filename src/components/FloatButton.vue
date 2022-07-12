<template>
  <wrapper v-bind="props">
    <img :src="icon" alt="">
    <p>{{ text }}</p>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const baseProps = {
  icon: {
    type: String,
    default: '',
  },
  iconWidth: {
    type: Number,
    default: 32,
  },
  text: {
    type: String,
    default: '',
  },
};

const Wrapper = styled('div', baseProps)`
  position: relative;
  ${vw('width', 90)}
  ${vw('height', 70)}
  ${vw('border-radius', 70)}
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  ${vw('font-size', 20)}
  font-weight: bold;
  > img {
    ${vw('width', 35)}
  }
  ${({ text, iconWidth }) => text.length && `
    ${vw('width', 182)}
    > p {
      ${vw('padding-left', 50)}
    }
    > img {
      position: absolute;
      ${vw('width', iconWidth)}
      ${vw('left', 20)}
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

export default {
  components: { Wrapper },
  props: baseProps,
  setup(props) {
    return {
      props,
    };
  },
};
</script>
