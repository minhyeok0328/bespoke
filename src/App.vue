<template>
  <theme-provider :theme="DefaultTheme">
    <simulator-container />
    <router-view/>
  </theme-provider>
</template>

<script>
import { ThemeProvider } from 'vue3-styled-components';
import DefaultTheme from '@/styles/theme';
import SimulatorContainer from '@/components/SimulatorContainer.vue';
import '@/styles/global';

export default {
  components: { ThemeProvider, SimulatorContainer },
  setup() {
    return {
      DefaultTheme,
    };
  },
};
</script>
