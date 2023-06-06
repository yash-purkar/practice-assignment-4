import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "Mens Fashion",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "Womens Fashion"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Kids Fashion"
  },
];
