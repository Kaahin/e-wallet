<template>
  <div class="card-stack">
    <ul class="card-stack ul">
      <li v-for="card in cards" :key="card.id">
        <Card
          @click="select"
          :number="card.nr"
          :name="card.name"
          :valid="card.valid"
          :vendor="card.vendor"
          :id="card.id"
          :style="{
            background: card.color.background,
            color: card.color.color,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";

let activeCard = ref([]);
const emits = defineEmits(["activate"]);

const select = (event) => {
  console.log(event.target.parentElement.id);
  cards.value.map((value, index) => {
    if (value.id.toString() == event.target.parentElement.id) {
      activeCard.value = [cards.value[index]];
    }
  });
  emits("activate", activeCard.value[0]);
};

let cards = ref([]);

const getCards = () => {
  if (localStorage.getItem("card_items")) {
    let temp = ref([]);
    temp.value = [
      ...temp.value,
      JSON.parse(localStorage.getItem("card_items"))._value,
    ];
    temp.value = temp.value[Object.keys(temp.value)[0]];
    cards.value = temp.value;
  }
};

onMounted(() => {
  getCards();
});
</script>

<style>
.card-stack {
  margin-top: 40px;
}
.card-stack.ul {
  padding: 0;
}
li {
  cursor: pointer;
  list-style: none;
}
</style>
