<template>
  <div class="card-form">
    <form @submit.prevent>
      <label
        >CARD NUMBER
        <input
          required
          oninValid="this.setCustomValidity('Enter 16 digits number')"
          pattern="[0-9]{16}"
          name="nr"
          type="Number"
          v-model="card.nr"
          @input="updateNumber"
        />
      </label>

      <label
        >CARDHOLDER NAME
        <input
          type="text"
          name="names"
          v-model="card.name"
          @input="updateName"
        />
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
        <div class="dropdown">
          <select name="vendor" v-model="card.vendor" @input="updateVendor">
            <option>BITCOIN INC</option>
            <option>NINJA BANK</option>
            <option>BLOCK CHAIN INC</option>
            <option>EVIL CORP</option>
          </select>
        </div>
      </label>
    </form>

    <button @click="onSubmit" class="btn">ADD CARD</button>
  </div>
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
    ...card,
    id: uuidv4(),
    color: getColor(card.vendor),
  };
  emits("item", newCardItem);
  reset();
};

const getColor = (vendor) => {
  switch (vendor.split(" ")[0]) {
    case "BITCOIN":
      return {
        background:
          "linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34",
        color: "#000000",
      };
    case "BLOCK":
      return {
        background:
          "linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9",
        color: "#ffffff",
      };
    case "NINJA":
      return {
        background:
          "linear-gradient(248.3deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222",
        color: "#ffffff",
      };
    case "EVIL":
      return {
        background:
          "linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355",
        color: "#ffffff",
      };
    default:
      return { background: "", color: "" };
  }
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
.card-form {
  width: 382px;
  margin: 0px 16px 0px 16px;
}
label,
input {
  display: flex;
  flex-direction: column;
  text-align: left;
}
label {
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
}
input,
.dropdown {
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 11px;
}

select {
  border: 1px solid #ffffff;
  border-radius: 8px;
  height: 52px;
  width: 363px;
  outline: none;
}

.column-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
form {
  margin-bottom: 48px;
}
.btn {
  margin-bottom: 16px;
  width: 382px;
  height: 72px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 8px;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 32px;
  letter-spacing: 0.03em;
}
</style>
