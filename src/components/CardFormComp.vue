<template>
  <form @submit.prevent>
    <label
      >CARD NUMBER
      <input
        required
        oninValid="this.setCustomValidity('Enter 16 digits number')"
        pattern=".*\S+.*"
        name="nr"
        type="Number"
        min="16"
        max="16"
        v-model="card.nr"
        @input="updateNumber"
      />
    </label>

    <label
      >CARDHOLDER NAME
      <input type="text" name="names" v-model="card.name" @input="updateName" />
    </label>

    <div class="column-grid">
      <div class="column-grid item">
        <label
          >VALID THRU
          <input
            type="text"
            name="valid"
            v-model="card.valid"
            @input="updateValid"
          />
        </label>
      </div>
      <div class="column-grid item">
        <label
          >CCV
          <input type="text" name="ccv" v-model="card.ccv" />
        </label>
      </div>
    </div>

    <label
      >VENDOR
      <select name="vendor" v-model="card.vendor" @input="updateVendor">
        <option>BITCOIN INC</option>
        <option>NINJA BANK</option>
        <option>BLOCK CHAIN INC</option>
        <option>EVIL CORP</option>
      </select>
    </label>
  </form>

  <button @click="onSubmit" class="btn">ADD CARD</button>
</template>

<script setup>
import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  nr: "",
  name: "",
  valid: "",
  ccv: "",
  vendor: "",
};
const card = reactive({ ...initialState });

const emits = defineEmits(["nr", "name", "valid", "vendor", "item"]);
const reset = () => {
  Object.assign(card, initialState);
};

const onSubmit = () => {
  const newCardItem = {
    card,
    id: uuidv4(),
  };
  emits("item", newCardItem);
  reset();
};

const updateNumber = (event) => {
  emits("nr", event.target.value);
};

const updateName = (event) => {
  emits("name", event.target.value);
};

const updateValid = (event) => {
  emits("valid", event.target.value);
};

const updateVendor = (event) => {
  emits("vendor", event.target.value);
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
