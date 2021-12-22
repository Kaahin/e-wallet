<template>
  <label>{{ props.msg }}</label>
  <div class="card">
    <div class="logo">
      <img src="@/assets/Bitcoin-logo.svg" alt="logo" />
      <img src="@/assets/wifi.svg" alt="wifi" />
    </div>
    <img class="chip" src="@/assets/chip.svg" alt="chip" />

    <p class="card_number">{{ props.number }}</p>
    <div class="grid">
      <div class="card_space left">
        <span class="card_label"> CARDHOLDER NAME </span>
        <p class="card_info">FIRST LAST</p>
      </div>
      <div class="card_space right">
        <span class="card_label"> EXPIRES </span>
        <p class="card_info">MM/YY</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface props {
  msg?: string;
  number?: string;
}
const props = withDefaults(defineProps<props>(), {
  msg: "",
  number: "XXXX XXXX XXXX XXXX",
});

// export default {
//   data() {
//     return {
//       logo: "Bitcoin",
//       imgClicked: false,
//     };
//   },
//   props: {
//     msg: String,
//     number: String,
//   },
// };
</script>

<style scoped>
.card {
  position: relative;
  width: 382px;
  height: 241px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  /* filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.12)); */
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
