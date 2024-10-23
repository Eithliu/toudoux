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
    <main class="main">
      <h1>My Toudoux</h1>
      <div class="card">
        <ul v-for="toudou in toudoux">
          <li :style="`color: ${toudou.color}`" @click="goToToudouDetails(toudou.id)">{{toudou.title}}</li>
        </ul>
      </div>
    </main>
    <footer>
      <button @click="goToNewToudou()" class="new-toudou-btn"><span class="plus">+</span> Créer une toudoux</button>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  color: #54577C;
  width: 100%;
  min-height: 85vh;
}
.main {
  display: flex;
  flex-direction: column;

}
.card {
  background: white;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px #d3d3d3;
}
footer {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 1rem;
}
.new-toudou-btn {
  font-size: 15px;
}
</style>
