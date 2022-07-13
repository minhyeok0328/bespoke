<template>
  <wrapper
    :isFridge="isFridge"
  >
    <img :src="icon" :alt="title">
    <p>{{ title }}</p>
    <span>{{ subtitle }}</span>
    <input
      v-show="false"
      type="checkbox"
      :name="name"
      value="true"
      ref="input"
      @change="activeProduct"
    >
  </wrapper>
</template>

<script>
import { vw } from '@/styles/mixin';
import { ref } from 'vue';
import styled from 'vue3-styled-components';

const Wrapper = styled('label', { isFridge: Boolean })`
  cursor: pointer;
  ${({ theme }) => `
    color: ${theme.colors.white};
    transition: 0.5s all;
    ${vw('outline', [3, 'solid transparent'])}
    &.active {
      ${vw('outline', [3, 'solid', theme.border.active])}
      ${vw('border-radius', 3)}
    }
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
    name: {
      type: String,
      default: 'fridge',
      required: true,
    },
  },
  setup(props) {
    const input = ref(null);
    const activeProduct = () => {
      Array.from(document.querySelectorAll(`input[name="${props.name}"]`)).forEach((item) => {
        const checkbox = item;

        checkbox.checked = false;
        checkbox.closest('label').classList.remove('active');
      });

      input.value.checked = true;
      input.value.closest('label').classList.add('active');
    };

    return {
      input,
      activeProduct,
    };
  },
};
</script>
