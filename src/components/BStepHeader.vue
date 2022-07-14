<template>
  <wrapper>
    <button :class="{'hide': !prevText}" @click="prevCallback">{{ prevText }}</button>
    <h1>
      {{ title }}
      <p>{{ step[0] }} / <span>{{ step[1] }}</span></p>
    </h1>
    <button
      :class="{'hide': !nextText}"
      :disabled="nextDisabled"
      @click="nextCallback"
    >{{ nextText }}</button>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  ${vw('grid-column-gap', 20)}
  ${vw('padding', [0, 90])}
  > h1 {
    ${vw('font-size', 28)}
    ${vw('line-height', 32)}
    font-family: 'SamsungSharpSans';
    font-weight: bold;
    > p {
      ${vw('font-size', 18)}
      font-family: 'SamsungOne';
      > span {
        opacity: 0.5;
      }
    }
  }
  > button {
    :nth-child(1),
    :nth-child(3) {
      position: relative;
      ${vw('font-size', 20)}
      ${vw('line-height', 24)}
      ${vw('height', 50)}
      display: flex;
      justify-content: center;
      align-items: center;
      :before {
        content: '';
        display: inline-block;
        position: absolute;
        ${vw('width', 8)}
        ${vw('height', 16)}
        top: 50%;
        transform: translateY(-50%);
      }
      &.hide {
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
      }
    }
    :nth-child(1) {
      :before {
        background: url(/images/icon-arw-left.svg) center / cover;
        ${vw('left', -8)}
      }
    }
    :nth-child(3) {
      :disabled {
        opacity: 0.5;
      }
      :before {
        background: url(/images/icon-arw-right.svg) center / cover;
        ${vw('right', -8)}
      }
    }
  }
`;

export default {
  components: { Wrapper },
  props: {
    prevText: {
      type: String,
      default: '',
    },
    nextDisabled: {
      type: Boolean,
      default: false,
    },
    nextText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    prevCallback: {
      type: Function,
      default: () => {},
    },
    nextCallback: {
      type: Function,
      default: () => {},
    },
    step: {
      type: Array,
      default: () => ['01', '02'],
    },
  },
};
</script>
