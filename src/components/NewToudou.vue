<script setup lang="ts">
import { ref, inject } from 'vue';
import { RouterKey, StorageKey } from "../types.ts";

const title = ref('');
const color = ref('#ff00ff');

const router = inject(RouterKey);
const storage = inject(StorageKey);

async function createNewToudou() {
  const id = storage.saveNewToudou({
    title: title.value,
    color: color.value,
  });
  router!.navigate('toudou-details', { id });
}
</script>

<template>
<form class="form">
  <label for="toudouTitle">
    Choisis le titre de ta Toudou
  </label>
  <input id="toudouTitle" v-model="title" class="title-user" />
  <input type="color" v-model="color" />
  <button @click="createNewToudou">Ok !</button>
</form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
}
.form > button, .title-user {
  width: 100%;
}
</style>
