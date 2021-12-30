<template>
  <h1>{{ props.header }}</h1>
  <h2>{{ props.subheader }}</h2>
</template>

<script setup>
const props = defineProps({
  header: String,
  subheader: String,
});
</script>

<style>
h1 {
  width: 250px;
  height: 98px;
  margin: 9px 82px 1px 82px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 100%;
  /* or 35px */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #222222;
}
h2 {
  width: 304px;
  height: 26px;
  margin: 0px 55px 4px 55px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba(34, 34, 34, 0.6);
}
</style>
