<template>
  <wrapper :close="close" ref="wrapper">
    <div>
      <choose-card @click="closePopup">
        <div>
          <p>BE<span>SPOKE</span> Design Studio</p>
        </div>
        <div>
          Design your own Bespoke
        </div>
      </choose-card>
    </div>
    <div>
      <choose-card onclick="location.href='/viewer/#/smartthings'">
        <div>
          <img src="/images/SmartThings.png" alt="SmartThings">
        </div>
        <div>
          Experience SmartThings Home Life
        </div>
      </choose-card>
    </div>
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import { vw } from '@/styles/mixin';
import { ref } from 'vue';

const Wrapper = styled('div', { close: Boolean })`
  background: url('/images/landing-bg.png') center / cover;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  transition: .5s all;
  opacity: 1;
  z-index: 100;
  ${({ close }) => close && `
    opacity: 0;
  `}
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ChooseCard = styled.div`
  width: 65%;
  height: 31.5%;
  background-color: rgba(255, 255, 255, 0.9);
  ${vw('padding', [15, 40, 0])}
  ${vw('border-radius', 20)}
  text-align: center;
  display: flex;
  flex-direction: column;
  > div {
    font-family: 'SamsungSharpSans';
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      ${vw('width', 432)}
    }
    :first-child {
      flex: 0.6;
      ${vw('padding-top', 10)}
    }
    :last-child {
      flex: 0.4;
      font-weight: 500;
      ${vw('font-size', 24)}
      ${({ theme }) => `
        ${vw('border-top', [1, 'solid', theme.colors.gray])}
      `}
    }
    > p {
      color: ${({ theme }) => theme.colors.lightblack};
      ${vw('font-size', 52)}
      font-weight: bold;
      > span {
        font-weight: 500;
      }
    }
  }
`;

export default {
  components: { Wrapper, ChooseCard },
  setup() {
    const close = ref(false);
    const wrapper = ref(null);

    const closePopup = () => {
      close.value = true;

      setTimeout(() => {
        wrapper.value.$el.remove();
      }, 500);
    };

    return {
      wrapper,
      close,
      closePopup,
    };
  },
};
</script>
