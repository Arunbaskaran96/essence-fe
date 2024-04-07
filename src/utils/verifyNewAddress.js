export const verifyAddress = (formData, setErrors) => {
  let errors = {};
  if (!formData.contactName) {
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
  if (!formData.contactNo) {
    errors.mobile = "Mobile is required";
  }
  if (!formData.state) {
    errors.state = "State is required";
  }
  setErrors(errors);
  return Object.keys(errors).length === 0;
};
