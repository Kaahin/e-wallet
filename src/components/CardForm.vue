<template>
  <form @submit.prevent="onSubmit">
    <label
      >CARD NUMBER
      <input type="text" v-model.number="card_nr" name="nr" />
    </label>
    <label
      >CARDHOLDER NAME
      <input type="text" v-model="card_name" name="name" />
    </label>
    <div class="column-grid">
      <div class="column-grid item">
        <label
          >VALID THRU
          <input type="text" v-model="card_valid" name="valid" />
        </label>
      </div>
      <div class="column-grid item">
        <label
          >CCV
          <input type="text" v-model.number="card_ccv" name="ccv" />
        </label>
      </div>
    </div>
    <label
      >VENDOR
      <select name="vendor" v-model="card_vendor">
        <option>BITCOIN INC</option>
        <option>NINJA BANK</option>
        <option>BLOCK CHAIN INC</option>
        <option>EVIL CORP</option>
      </select>
    </label>
  </form>
  <button type="submit" value="Submit" class="btn">ADD CARD</button>
</template>

<script>
// import { v4 as uuid } from "uuid";

export default {
  name: "CardForm",
  data() {
    return this.initialState();
  },

  methods: {
    onSubmit() {
      let card_item = {
        card_nr: this.card_nr,
        card_name: this.card_name,
        card_valid: this.card_valid,
        card_ccv: this.card_ccv,
        card_vendor: this.card_vendor,
      };
      this.$emit("card-submitted", card_item);
      initialState();
    },

    initialState() {
      return {
        card_nr: null,
        card_name: "",
        card_valid: "",
        card_ccv: null,
        card_vendor: "",
      };
    },
    reset() {
      Object.assign(this.$data, this.initialState());
    },
    onClicked() {
      console.log(
        this.card_nr,
        this.card_name,
        this.card_valid,
        this.card_ccv,
        this.card_vendor
      );
    },
  },
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
