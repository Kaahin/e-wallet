<template>
  <div class="home">
    <Top msg="E-WALLET" />
    <Card msg="ACTIVE CARD" />
    <CardStack />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },
};
</script>
