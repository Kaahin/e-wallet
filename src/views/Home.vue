<template>
  <div class="home">
    <div class="components">
      <Top header="E-WALLET" subheader="ACTIVE CARD" />
      <Card
        :number="card.nr"
        :name="card.name"
        :valid="card.valid"
        :vendor="card.vendor"
        :style="{ background: card.color.background, color: card.color.color }"
      />
      <CardStack @activate="activeCard" />
    </div>
  </div>
</template>

<script setup>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";
import { reactive } from "vue";

const card = reactive({
  nr: "",
  name: "",
  valid: "",
  vendor: "",
  color: "",
});
const activeCard = (data) => {
  if (data) {
    Object.assign(card, data);
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
