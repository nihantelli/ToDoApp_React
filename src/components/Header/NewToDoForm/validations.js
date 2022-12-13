import * as Yup from "yup";
const validations = Yup.object().shape({
  text: Yup.string().required("text is a required field"),
});
export default validations;
