export const formatDate = (date) => {
  const expandVersion = new Date(date);
  const day = expandVersion.getDate();
  const month = expandVersion.getMonth();
  const year = expandVersion.getFullYear();
  return `${day}/${month + 1}/${year}`;
};
