<script setup lang="ts">
import { inject } from 'vue';
import { RouterKey, StorageKey } from '../types.ts';

const router = inject(RouterKey);
const storage = inject(StorageKey);
const toudoux = storage.getAllToudoux();

function goToNewToudou() {
  router!.navigate('new-toudou');
}
function goToToudouDetails(id: string) {
  router!.navigate('toudou-details', { id });
}

</script>

<template>
  <div class="wrapper">
    <h1>My Toudoux</h1>
    <ul v-for="toudou in toudoux">
      <li :style="`color: ${toudou.color}`" @click="goToToudouDetails(toudou.id)">{{toudou.title}}</li>
    </ul>
    <button @click="goToNewToudou()">Créer une toudoux</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  color: #54577C;
}
</style>
