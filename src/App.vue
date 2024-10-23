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
html {
  background: #ecf5ff;
}
body {
  margin: 0;
}
#app {
  display: flex;
  align-items: flex-start;
  width: 100vw;
  font-family: Helvetica, Arial, sans-serif;
}
.hidden {
  display: none;
}
button {
  background: transparent;
  border: none;
  color: #1294e1;
  font-weight: bold;
  padding: 0;
}
button:active {
  background: #366788;
}
h1 {
  font-size: 20px;
  color: black;
  margin-left: 1rem;
}
</style>
