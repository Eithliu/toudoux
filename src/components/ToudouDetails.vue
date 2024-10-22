<script setup lang="ts">
import { inject } from "vue";
import { RouterKey, StorageKey } from "../types.ts";


const router = inject(RouterKey);
const storage = inject(StorageKey);

const props = defineProps<{
  id: string,
}>();

const toudou = storage.getToudouById(props.id);


function goBack() {
  router!.navigate('title-page');
}
</script>

<template>
  <div class="details-container">
    <div v-if="toudou">
      <h1>{{toudou.title}}</h1>
      <p>{{toudou.color}}</p>
    </div>
    <button @click="goBack">ICI RETOUR VERS LE FUTUR</button>
  </div>
</template>

<style scoped>
.details-container {

}
</style>
