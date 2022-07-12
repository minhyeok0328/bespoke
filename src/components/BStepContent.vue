<template>
  <wrapper>
    <div class="scrollbar">
      <slot></slot>
    </div>
    <div>
      <b-button v-if="preview">PREVIEW</b-button>
    </div>
  </wrapper>
</template>

<script>
import { useState } from '@/store/helper';
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';
import BButton from './BButton.vue';

const Wrapper = styled.div`
  height: 83%;
  > div {
    :nth-child(1) {
      ${vw('padding', [10, 60])}
      height: 100%;
      overflow-y: auto;
    }
    :nth-child(2) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      ${vw('bottom', 70)}
    }
  }
`;

export default {
  components: { Wrapper, BButton },
  setup() {
    const { preview } = useState();

    return {
      preview,
    };
  },
};
</script>
