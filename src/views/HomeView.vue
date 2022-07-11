<template>
  <wrapper>
    <choose-studio-type />
    <choose-interior-type />
  </wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import ChooseStudioType from '@/components/ChooseStudioType.vue';
import ChooseInteriorType from '@/components/ChooseInteriorType.vue';

const Wrapper = styled.div`
`;

export default {
  components: { Wrapper, ChooseStudioType, ChooseInteriorType },
};
</script>
