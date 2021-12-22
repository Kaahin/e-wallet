import useValidators from "./useValidators";
import { reactive } from "@vue/reactivity";
const errors = reactive({});

export default function useFormValidation() {
  const { isEmpty, minLength } = useValidators();
  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 4);
  };
  return { errors, validateNameField };
}
