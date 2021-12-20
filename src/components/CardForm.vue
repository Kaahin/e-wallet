<template>
  <form @submit="addCard">
    <label
      >CARD NUMBER
      <input type="text" v-model="card_nr" name="nr" />
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
          <input type="text" v-model="card_ccv" name="ccv" />
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
import {v4 as uuid} from "uuid";
export default {
  name: "CardForm",
  data() {
    return this.initialState();
  },
  methods: {
    initialState() {
      return {
        card_nr: "",
        card_name: "",
        card_valid: "",
        card_ccv: "",
        card_vendor: "",
      };
    },
    reset() {
      Object.assign(this.$data, this.initialState());
    },
    addForm(e) {
      e.preventDefault();
      const newCard = {
        card_nr: this.card_nr,
        card_name: this.card_name,
        card_valid: this.card_valid,
        card_ccv: this.card_ccv,
        card_vendor: this.card_vendor,
        id: uuid(),
      };
      console.log(this.card_nr);
      // send to parent
      this.$emit("add-card-event", newCard);
      // clear the field
      this.reset();
      console.log(this.card_nr);
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
