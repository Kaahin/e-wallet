<template>
  <Top header="ADD A NEW BANK CARD" subheader="NEW CARD" />
  <Card :number="number" :name="name" :valid="valid" :vendor="vendor" />
  <CardFormComp
    @nr="getNumber"
    @name="getName"
    @valid="getValid"
    @vendor="getVendor"
    @item="getItem"
  ></CardFormComp>
</template>

<script setup>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
// import CardForm from "../components/CardForm.vue";
import CardFormComp from "../components/CardFormComp.vue";
import { ref, watch } from "vue";

let number = ref(null);
let name = ref(null);
let valid = ref(null);
let vendor = ref(null);
let card_items = ref([]);

const getNumber = (event) => {
  number.value = event;
};
const getName = (event) => {
  name.value = event;
};
const getValid = (event) => {
  valid.value = event;
};
const getVendor = (event) => {
  vendor.value = event;
};
const getItem = (data) => {
  card_items.value.push(data)
  console.log(card_items.value.length);
};

watch(() => [...card_items.value], (currValue, prevValue) => {
  console.log(currValue);
  console.log(prevValue);
  console.log("Card Items Array Changed");
  localStorage.setItem("card_items", JSON.stringify(card_items));
});
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
