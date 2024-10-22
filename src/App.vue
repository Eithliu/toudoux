<script setup lang="ts">
import AppRouter from './components/AppRouter.vue';
import StorageService from './components/StorageService.vue';


</script>

<template>
  <StorageService>
    <AppRouter />
  </StorageService>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Helvetica, Arial, sans-serif;
  background: #ecf5ff;
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
