import { TAX_PRICE, SHIPPING_CHARGES } from "../config";
export const calGrandTotal = (total) => {
  const taxprice = (TAX_PRICE / 100) * total;
  const addTaxPrice = total + taxprice;
  const grandTotal =
    total > 1000 ? addTaxPrice : addTaxPrice + SHIPPING_CHARGES;
  return Math.floor(grandTotal);
};
