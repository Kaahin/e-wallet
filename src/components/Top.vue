<template>
  <h1>{{ props.header }}</h1>
  <h5>{{ props.subheader }}</h5>
</template>

<script setup>
const props = defineProps({
  header: String,
  subheader: String,
});
</script>

<style></style>
