export const verifyAddress = (formData, setErrors) => {
  let errors = {};
  if (!formData.name) {
    errors.name = "Name is required";
  }
  if (!formData.street) {
    errors.street = "Street is required";
  }
  if (!formData.city) {
    errors.city = "City is required";
  }
  if (!formData.pincode) {
    errors.pincode = "Pincode is required";
  }
  if (!formData.mobile) {
    errors.mobile = "Mobile is required";
  }
  if (!formData.state) {
    errors.state = "State is required";
  }
  setErrors(errors);
  Object.keys(errors).length === 0;
};
