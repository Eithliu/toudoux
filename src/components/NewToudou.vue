<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');

</script>

<template>
<form>
  <label for="toudouTitle">
    Choisis le titre de ta Toudou
  </label>
  <input id="toudouTitle" v-model="title" />
  <button>Ok !</button>
</form>
</template>

<style scoped>

</style>
