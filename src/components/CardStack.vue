<template>
  <div class="card-stack">
    <ul class="card-stack ul">
      <li v-for="card in cards" :key="card.id">
        <span>{{ card.id }}</span>
        <span>{{ card.nr }}</span>
        <span>{{ card.name }}</span>
        <span>{{ card.valid }}</span>
        <span>{{ card.ccv }}</span>
        <span>{{ card.vendor }}</span>
      </li>
    </ul>
  </div>
  <!-- <Card /> -->
</template>

<script setup>
//todo :: use activated-hook to activate card in the card stack

import { onBeforeUpdate, onMounted, ref } from "vue";
// import Card from "../components/Card.vue";

const props = defineProps({
  cards: Array,
});

const cards = ref([props.cards]);

const display = () => {
  console.log(cards.value);

  cards.value = cards.value[Object.keys(cards.value)[0]];
  console.log(cards.value);
};

onMounted(() => {
  display();
});

onBeforeUpdate(() => {});
</script>

<style></style>
