<script setup lang="ts">
import { inject } from "vue";
import { RouterKey, StorageKey } from "../types.ts";

const router = inject(RouterKey);
const storage = inject(StorageKey);
const toudoux = storage.getAllToudoux();

function goToNewToudou() {
  router!.navigate("new-toudou");
}
function goToToudouDetails(id: string) {
  router!.navigate("toudou-details", { id });
}
</script>

<template>
  <div class="wrapper">
    <main class="main">
      <h1>My Toudoux</h1>
      <div class="card">
        <ul>
          <li
            v-for="toudou in toudoux"
            @click="goToToudouDetails(toudou.id)"
            class="list-point line"
          >
            <span
              class="pastille"
              :style="`background-color: ${toudou.color}`"
            ></span>
            {{ toudou.title }}
            <span> > </span>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <button @click="goToNewToudou()" class="new-toudou-btn">
        <span class="plus">+</span> Créer une toudoux
      </button>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  color: #54577c;
  width: 100%;
  min-height: 95vh;
}

ul {
  list-style-type: none;
  margin-block-end: 1em;
  padding-inline-start: 0.4rem;
}

.list-point {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.6rem;
}

.line {
  border-bottom: solid 1px #dedede;
  display: flex;
}

.list-point:last-child {
  border-bottom: none;
}

.main {
  display: flex;
  flex-direction: column;
}

.pastille {
  width: 25px;
  height: 25px;
  border-radius: 15px;
}

.card {
  background: white;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px #e3e3e3;
  text-align: left;
}
footer {
  display: flex;
  justify-content: flex-end;
  //flex-direction: row-reverse;
  margin-right: 1rem;
}
.new-toudou-btn {
  font-size: 15px;
}
</style>
