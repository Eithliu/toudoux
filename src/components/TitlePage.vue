<script setup>
import { inject } from 'vue';

const router = inject('router');

function goToNewToudou() {
  router.navigate('new-toudou');
}
</script>

<template>
  <div class="wrapper">
    <h1>My Toudoux</h1>
    <button @click="goToNewToudou()">Créer une toudoux</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  color: #54577C;
}
button {
  padding: 1rem .5rem;
  background: #4A7B9D;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}
button:active {
  background: #366788;
}
</style>
