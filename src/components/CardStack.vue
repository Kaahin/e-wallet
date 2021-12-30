<template>
  <div class="card-stack">
    <ul class="card-stack ul">
      <li v-for="card in cards" :key="card.id">
        <button :id="card.id" @click="deleteCard(card.id)">x</button>
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
  cards.value.map((value, index) => {
    if (value.id.toString() == event.target.closest(".card").id) {
      activeCard.value = [cards.value[index]];
    }
  });
  emits("activate", activeCard.value[0]);
};

const deleteCard = (id) => {
  cards.value.map((value, index) => {
    if (value.id.toString() == id) {
      console.log(index);
      let storedCards = ref();
      storedCards.value = JSON.parse(localStorage.getItem("card_items"));
      console.log(JSON.stringify(storedCards.value._value[index]));
      console.log(storedCards.value._value.splice(index, 1));
      console.log(JSON.stringify(storedCards.value._value));
      localStorage.setItem("card_items", JSON.stringify(storedCards.value));
      window.location.reload();
    }
  });
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
