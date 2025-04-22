<script setup lang="ts">
import { inject, ref } from "vue";
import { RouterKey, StorageKey } from "../types.ts";


const router = inject(RouterKey);
const storage = inject(StorageKey);

const props = defineProps<{
  id: string,
  title: string,
}>();

const toudou = storage.getToudouById(props.id);
const isEditMode = ref(false);
const newTitle = ref(toudou.title);

function validateChange() {
  isEditMode.value = false;
  storage.updateToudouById(toudou.id, newTitle.value);
}

function discardChange() {
  isEditMode.value = false;
}

function goBack() {
  router!.navigate('title-page');
}

function goToEditMode() {
  isEditMode.value = true;
}
</script>

<template>
  <div class="details-container">
    <button class="return-button" @click="goBack">< Retour vers mes Toudoux</button>
    <div v-if="toudou">
      <div v-if="isEditMode" class="edit-mode">
        <input :value="toudou.title" class="edit-input" />
        <button @click="validateChange" class="button-check">✅</button>
        <button @click="discardChange" class="button-check">❌</button>
      </div>
      <div v-else>
        <button @click.prevent="goToEditMode">
          <h1 :style="`color: ${toudou.color}`">{{toudou.title}}</h1>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

}
button {
  cursor: pointer;
}
.return-button {
  border: none;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 3px;
  padding: 1rem 2rem 1rem .4rem;
}

.edit-mode {
  display: flex;
  margin-top: 50px;
  gap: .5rem;
}

.edit-input {
  padding: 1rem 2rem 1rem .5rem;
}

.button-check {
  border: solid 1px grey;
}
</style>
