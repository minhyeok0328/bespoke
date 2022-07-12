<template>
  <wrapper>
    <slot></slot>
    <button></button>
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import styled from 'vue3-styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  ${vw('width', 610)}
  height: 100%;
  overflow-y: auto;
  transition: right 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${({ theme }) => theme.colors.darkgray};
  ${vw('padding-top', 40)}
  > button {
    ${vw('width', 14)}
    ${vw('height', 25)}
    background: url(/images/toggle-button.svg);
    border: none;
    cursor: pointer;
    position: absolute;
    ${vw('left', 10)}
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default {
  components: { Wrapper },
};
</script>
