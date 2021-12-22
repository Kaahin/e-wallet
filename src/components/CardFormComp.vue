<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label
        >CARD NUMBER
        <!-- <input
          required
          oninValid="this.setCustomValidity('Enter 16 digits number')"
          pattern=".*\S+.*"
          name="nr"
          type="text"
          @input="updateTitle"
        /> -->
      </label>
    </div>
    <!-- <label
      >CARDHOLDER NAME
      <input type="text" v-model="card.name" name="name" />
    </label>
    <div class="column-grid">
      <div class="column-grid item">
        <label
          >VALID THRU
          <input type="text" v-model="card.valid" name="valid" />
        </label>
      </div>
      <div class="column-grid item">
        <label
          >CCV
          <input type="text" v-model="card.ccv" name="ccv" />
        </label>
      </div>
    </div>
    <label
      >VENDOR
      <select name="vendor" v-model="card.vendor">
        <option>BITCOIN INC</option>
        <option>NINJA BANK</option>
        <option>BLOCK CHAIN INC</option>
        <option>EVIL CORP</option>
      </select>
    </label> -->
  </form>
  <button type="submit" value="Submit" class="btn">ADD CARD</button>
  <button @click="update">Alert</button>
  <input type="text" @input="update">
</template>

<script setup>

// let card = reactive({
//   nr: "",
//   name: "",
//   valid: "",
//   ccv: "",
//   vendor: "",
// });

// const props = defineProps({
//   title: String,
// });

const emits = defineEmits(["child"]);

// const onClick = () => {
//   console.log(card);
// };
const onSubmit = (event) => {
  console.log(event);
};
const update = (event) => {
  emits("child", event.target.value);
};
</script>

<style scoped>
label,
input {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.column-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
