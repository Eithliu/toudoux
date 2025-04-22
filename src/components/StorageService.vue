<script setup lang="ts">
import { provide } from 'vue';
import { StorageKey } from "../types.ts";
import type { NewToudou, NewTachounette } from '../types.ts';

function saveNewTachounette({title, tag = ''}: NewTachounette, toudouId: String) {
  const newTachounette = {
    title,
    tag,
    toudouId,
    id: self.crypto.randomUUID(),
  }

}

function saveNewToudou({title, color}: NewToudou) {
  const newToudou = {
    title,
    color,
    id: self.crypto.randomUUID(),
  }
  const toudoux = getAllToudoux();
  const existingToudouIndex = toudoux.findIndex((toudou: any) => {
    return toudou.id === newToudou.id;
  })
  if (existingToudouIndex !== -1) {
    toudoux[existingToudouIndex] = newToudou;
  } else {
    toudoux.push(newToudou);
  }
  persistToudoux(toudoux);
  return newToudou.id;
}
function getToudouById(id: string) {
  const toudoux = getAllToudoux();
  const toudou = toudoux.find((toudou: any) => {
    return id === toudou.id;
  });
  return toudou;
}

function updateToudouById(id: string, newTitle: string) {
  const toudou = getToudouById(id);
  toudou.name = newTitle;
  persistToudoux(toudou);
}

function getAllToudoux() {
  const rawToudoux = localStorage.getItem('toudoux') ?? '[]';
  return JSON.parse(rawToudoux);
}

function persistToudoux(toudoux: any[]) {
  localStorage.setItem('toudoux', JSON.stringify(toudoux));
}

provide(StorageKey, { saveNewToudou, getToudouById, getAllToudoux, saveNewTachounette, updateToudouById });
</script>

<template>
  <slot />
</template>
