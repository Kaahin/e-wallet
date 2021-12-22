<template>
  <!-- <Top msg="ADD A NEW BANK CARD" /> -->
  <Card msg="NEW CARD" :number="data" />
  <CardFormComp @child="alert"></CardFormComp>
</template>

<script setup>
// import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
// import CardForm from "../components/CardForm.vue";
import CardFormComp from "../components/CardFormComp.vue";
import { ref } from "vue";

let data = ref(null);

const alert = (number) => {
  data.value = number;
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
</style>
