<template>
  <wrapper :active="item.active">
    <div>
      <img :src="item.image.default" :alt="item.name">
    </div>
    <div>
      <img :src="item.shape.icon" :alt="item.shape.name">
      <span>{{ item.shape.name }}</span>
    </div>
    <div v-if="!item.active"></div>
    <p>{{ item.name }}</p>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled('div', { active: Boolean })`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  ${vw('width', 369)}
  ${vw('margin-left', 33)}
  > div {
    :nth-child(1) {
      ${vw('height', 217)}
      > img {
        box-sizing: border-box;
        ${vw('border', [2, 'solid transparent'])}
        ${({ active, theme }) => active && `
          ${vw('border', [2, 'solid', theme.colors.lightblue])}
        `}
        }
    }
    :nth-child(2) {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      z-index: 2;
      ${vw('width', 100)}
      ${vw('top', 86)}
      ${vw('right', 10)}
      ${vw('font-size', 18)}
      img {
        ${vw('width', 62)}
        ${vw('height', 62)}
      }
      span {
        ${vw('line-height', 24)}
      }
    }
    :nth-child(3) {
      background-color: rgba(0,0,0,0.5);
      content: '';
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
  > p {
    ${vw('margin', [10, 0, 25])}
    ${vw('font-size', 24)}
    text-align: center;
  }
`;

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: { Wrapper },
};
</script>
