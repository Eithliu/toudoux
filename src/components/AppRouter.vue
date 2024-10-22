<script setup lang="ts">
import TitlePage from './TitlePage.vue';
import NewToudou from './NewToudou.vue';
import ToudouDetails from './ToudouDetails.vue';
import ErrorPage from "./ErrorPage.vue";

import { RouterKey } from '../types.ts';

import { computed, ref, provide } from 'vue';

const currentViewName = ref('title-page');
const currentView = computed(() => {
  switch (currentViewName.value) {
    case 'title-page':
      return TitlePage;
    case 'new-toudou':
      return NewToudou;
    case 'toudou-details':
      return ToudouDetails;
    default:
      return ErrorPage;
  }
})
const viewProps = ref({});
function setView(view: string, props?: any) {
  currentViewName.value = view;
  if (props) {
    viewProps.value = props;
  }
}
provide(RouterKey, { view: currentViewName, props: viewProps, navigate: setView });
</script>

<template>
  <component :is="currentView" v-bind="viewProps" />
</template>

<style scoped>

</style>
