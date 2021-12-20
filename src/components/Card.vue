<template>
  <label>{{ msg }}</label>
  <div class="card">
    <img :src="{ logo }" alt="logo" />
    <img :src="{ chip }" alt="chip" />
    <img :src="{ wifi }" alt="wifi" />
    <p class="card_number">XXXX XXXX XXXX XXXX XXXX</p>
    <div class="card_space left">
      <span class="card_label"> CARD HOLDER </span>
      <p class="card_info">First Last</p>
    </div>
    <div class="card_space right">
      <span class="card_label"> EXPIRES </span>
      <p class="card_info">MM/YY</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/Bitcoin logo.svg").default,
      chip: require("../assets/chip.svg").default,
      wifi: require("../assets/noun_wifi_159786 1.svg").default,

    };
  },
  props: {
    msg: String,
  },
  created() {
    this.svg =
  }
};
</script>

<style></style>
