<template>
  <Top header="ADD A NEW BANK CARD" subheader="NEW CARD" />
  <Card :number="number" :name="name" :valid="valid" :vendor="vendor" />
  <CardForm
    @nr="getNumber"
    @name="getName"
    @valid="getValid"
    @vendor="getVendor"
    @item="getItem"
  ></CardForm>
</template>

<script setup>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardForm from "../components/CardForm.vue";
import { onMounted, ref, watch } from "vue";

// CardForm: Event.Target.Values => Card
let number = ref(null);
let name = ref(null);
let valid = ref(null);
let vendor = ref(null);

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

// CardForm: Submitted Card Item =>  Local Storage

let items = ref([]);
const getItem = (data) => {
  items.value = [...items.value, data];
};

onMounted(() => {
  console.log("App Mounted");
  if (localStorage.getItem("card_items")) {
    items.value = JSON.parse(localStorage.getItem("card_items"))._value;
  }
});

watch(
  () => [...items.value],
  (currValue, prevValue) => {
    console.log("Current values : " + JSON.stringify(currValue));
    console.log("Previous values : " + JSON.stringify(prevValue));
    console.log("Card Items Array Changed");

    localStorage.setItem("card_items", JSON.stringify(items));
  },
  { deep: true }
);
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
