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

function goBack() {
  router!.navigate('new-toudou');
}
</script>

<template>
<form class="form">
  <div class="actions">
    <button @click="goBack">Annuler</button>
    <button @click="createNewToudou">Ok</button>
  </div>
  <div class="card">
    <label for="toudouTitle" class="hidden">
      Choisis le titre de ta Toudou
    </label>
    <input id="toudouTitle" v-model="title" class="title-user" placeholder="Nom de la toudou" />
  </div>
  <input type="color" v-model="color" class="color-picker" />
</form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  background: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px #b9b9b9;
  align-items: center;
}
.form > button, .title-user {
  width: 100%;
}
input.title-user {
  background: #f1f1f1;
  border: none;
  border-radius: 0;
  font-size: 15px;
  text-align: center;
  padding: .5rem 0;

}
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
 }
.actions > button {
  font-size: 15px;
}
.card {
  background: white;
  border-radius: 5px;
  margin: 1rem;
  width: 100%;
}
button {
 padding: 0;
}
</style>
