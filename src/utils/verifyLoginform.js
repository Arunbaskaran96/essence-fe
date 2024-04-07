export const verifyLoginForm = (formData, setErrors) => {
  let errors = {};
  if (!formData.email) {
    errors.email = "Email Is Required";
  }
  if (!formData.password) {
    errors.password = "Password Is Required";
  }
  setErrors(errors);
  return Object.keys(errors).length === 0;
};
