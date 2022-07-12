<template>
  <theme-provider :theme="DefaultTheme">
    <choose-studio-type />
    <choose-interior-type />
    <simulator-container />
    <router-view/>
  </theme-provider>
</template>

<script>
import { ThemeProvider } from 'vue3-styled-components';
import DefaultTheme from '@/styles/theme';
import SimulatorContainer from '@/components/SimulatorContainer.vue';
import ChooseStudioType from '@/components/ChooseStudioType.vue';
import ChooseInteriorType from '@/components/ChooseInteriorType.vue';
import '@/styles/global';

export default {
  components: {
    ThemeProvider,
    SimulatorContainer,
    ChooseStudioType,
    ChooseInteriorType,
  },
  setup() {
    return {
      DefaultTheme,
    };
  },
};
</script>
