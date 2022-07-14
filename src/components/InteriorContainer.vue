<template>
  <wrapper>
    <slot name="preview"></slot>
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
  > .preview {
    ${vw('width', 840)}
    ${vw('margin-right', 33)}
  }
`;

export default {
  components: { Wrapper },
};
</script>
