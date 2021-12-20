<template>
  <Top msg="ADD A NEW BANK CARD" />
  <Card msg="NEW CARD"/>
  <CardForm />
</template>

<script>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardForm from "../components/CardForm.vue";

export default {
  components: {
    Top,
    Card,
    CardForm,
  },
};
</script>

<style></style>
