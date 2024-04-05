export const isWished = (prod, wishlist) => {
  return wishlist.some((item) => item._id === prod._id);
};
