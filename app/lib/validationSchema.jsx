// validationSchema.js
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Your Name is required"),
  email: Yup.string().email("Invalid email address").required("Your Email is required"),
  message: Yup.string().required("Your Message is required"),
});

export default validationSchema;
