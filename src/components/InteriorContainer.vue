<template>
  <wrapper>
    <div>
      <slot name="preview"></slot>
    </div>
    <div class="scrollbar">
      <slot></slot>
    </div>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.div`
  display: flex;
  ${vw('height', 495)}
  ${vw('margin-bottom', 40)}
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  > div {
    :nth-child(1) {
      ${vw('width', 840)}
    }
    :nth-child(2) {
      overflow-y: auto;
    }
  }
`;

export default {
  components: { Wrapper },
};
</script>
