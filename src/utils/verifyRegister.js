export const verifyRegister = (formData, setErrors) => {
  let errors = {};
  if (!formData.firstName) {
    errors.firstName = "firstName is required";
  }
  if (!formData.lastName) {
    errors.lastName = "lastName is required";
  }
  if (!formData.email) {
    errors.email = "email is required";
  }
  if (!formData.password) {
    errors.password = "password is required";
  }
  if (!formData.mobile) {
    errors.mobile = "mobile is required";
  }
  if (!formData.confrimPassword) {
    errors.confrimPassword = "confrim password is required";
  }
  if (formData.password != formData.confrimPassword) {
    errors.mismatch = "password & confrim Password is mismatch";
  }

  setErrors(errors);
  return Object.keys(errors).length === 0;
};
