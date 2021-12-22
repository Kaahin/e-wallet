<template>
  <label></label>
  <div class="card">
    <div class="logo">
      <img :src="logo" alt="logo" />
      <img src="@/assets/wifi.svg" alt="wifi" />
    </div>
    <img class="chip" src="@/assets/chip.svg" alt="chip" />

    <p class="card_number">
      {{ props.number === null ? "XXXX XXXX XXXX XXXX" : props.number }}
    </p>
    <div class="grid">
      <div class="card_space left">
        <span class="card_label"> CARDHOLDER NAME </span>
        <p class="card_info">
          {{ props.name === null ? "FIRSTNAME LASTNAME" : props.name }}
        </p>
      </div>
      <div class="card_space right">
        <span class="card_label"> EXPIRES </span>
        <p class="card_info">
          {{ props.valid === null ? "MM/YY" : props.valid }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref } from "vue";

const props = defineProps({
  msg: String,
  number: String,
  name: String,
  valid: String,
  vendor: String,
});

let logo = ref(null);
onMounted(() => {
  logo.value = getLogoPath(props.vendor);
});
onBeforeUpdate(() => {
  logo.value = getLogoPath(props.vendor);
});

const getLogoPath = (vendor) => {
  let logo = "";
  vendor === null ? (logo = "BITCOIN") : (logo = vendor.split(" ")[0]);
  var images = require.context("../assets/", false, /\.svg$/);
  return images("./" + logo + ".svg");
};
</script>

<style scoped>
.card {
  position: relative;
  width: 382px;
  height: 241px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  /* filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.12)); */
  background: linear-gradient(
      248.3deg,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #d0d0d0;
}
.logo {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0 1.5rem;
}
.chip {
  display: flex;
  justify-content: flex-start;
  padding-left: 1.5em;
  margin-bottom: 2em;
}
.card_number {
  padding: 0 1em;
  margin: 0;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.03em;
}

.grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 1em 0 1em;
}

.card_info {
  display: flex;
  margin-top: 0;
}
</style>
