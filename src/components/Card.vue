<template>
  <div class="card" :id="props.id">
    <div class="logo">
      <img id="vendor" :src="logo" alt="logo" />
      <img id="wifi" :src="getWifi(props.vendor)" alt="wifi" />
    </div>
    <div class="chip">
      <img id="chip" src="@/assets/chip.svg" alt="chip" />
    </div>
    <div class="card_number">
      {{ props.number === null ? "XXXX XXXX XXXX XXXX" : props.number }}
    </div>
    <div class="grid">
      <div class="card_space left">
        <span class="card_label left"> CARDHOLDER NAME </span>
        <p class="card_info left">
          {{ props.name === null ? "FIRSTNAME LASTNAME" : props.name }}
        </p>
      </div>
      <div class="card_space right">
        <span class="card_label right"> VALID THRU </span>
        <p class="card_info right">
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
  id: String,
});

let logo = ref(null);
let wifi = ref(null);
onMounted(() => {
  logo.value = getLogoPath(props.vendor);
  wifi.value = getWifi(props.vendor);
});
onBeforeUpdate(() => {
  logo.value = getLogoPath(props.vendor);
  wifi.value = getWifi(props.vendor);
});

const getWifi = (vendor) => {
  let obj = "";
  if (vendor == null || vendor == undefined || vendor == "") {
    obj = "wifi";
  } else {
    vendor.split(" ")[0] === "BITCOIN" ? (obj = "wifi") : (obj = "wifi-white");
  }
  var images = require.context("../assets/", false, /\.svg$/);
  return images("./" + obj + ".svg");
};
const getLogoPath = (vendor) => {
  let obj = "";
  vendor == null || vendor == undefined || vendor == ""
    ? (obj = "BITCOIN")
    : (obj = vendor.split(" ")[0]);
  var images = require.context("../assets/", false, /\.svg$/);
  return images("./" + obj + ".svg");
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 16px 40px 16px;
  width: 382px;
  height: 241px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
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
  width: 382px;
}
#vendor {
  margin: 28px 25px 0px 0px;
}
#wifi {
  margin: 23px 0px 0px 19px;
}
.chip {
  width: 366px;
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px 13px 16px;
}
.card_number {
  margin: 0px 16px 16px 16px;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.03em;
  width: 350px;
  height: 42px;
  text-align: center;
}
#card-number {
  width: 350px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 382px;
  margin-bottom: 17px;
}
.card_space.left {
  margin-left: 16px;
}
.card_space.right {
  margin-right: 20px;
}
.card_info {
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin: 0;
  height: 32px;
  text-transform: uppercase;
}
.card_label {
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  display: flex;
  align-items: center;
  opacity: 0.8;
}
.right {
  justify-content: flex-end;
}
</style>
