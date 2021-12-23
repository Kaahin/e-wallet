<template>
  <Top header="E-WALLET" subheader="ACTIVE CARD" />
  <!-- <Card :number="number" :name="name" :valid="valid" :vendor="vendor" /> -->
  <CardStack :cards="stacks" />
</template>

<script setup>
import Top from "../components/Top.vue";
// import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";

import { onMounted, ref } from "vue";

let stacks = ref([]);

onMounted(() => {
  stacks.value = [
    ...stacks.value,
    JSON.parse(localStorage.getItem("card_items"))._value,
  ];
});

// let number = ref(null);
// let name = ref(null);
// let valid = ref(null);
// let vendor = ref(null);
</script>
