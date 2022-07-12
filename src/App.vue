<template>
  <theme-provider :theme="DefaultTheme">
    <choose-studio-type />
    <choose-interior-type />
    <simulator-container />
    <b-step>
      <router-view/>
    </b-step>
  </theme-provider>
</template>

<script>
import { ThemeProvider } from 'vue3-styled-components';
import DefaultTheme from '@/styles/theme';
import SimulatorContainer from '@/components/SimulatorContainer.vue';
import ChooseStudioType from '@/components/ChooseStudioType.vue';
import ChooseInteriorType from '@/components/ChooseInteriorType.vue';
import '@/styles/global';
import BStep from './components/BStep.vue';

export default {
  components: {
    ThemeProvider,
    SimulatorContainer,
    ChooseStudioType,
    ChooseInteriorType,
    BStep,
  },
  setup() {
    return {
      DefaultTheme,
    };
  },
};
</script>
