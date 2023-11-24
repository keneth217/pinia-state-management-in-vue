import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      { id: 1, name: "Shoe", price: 500 },
      { id: 2, name: "Clothes", price: 30 },
    ],
  }),
  getters: {
    productCount(state) {
      return state.products.length;
    },
    productsCheaperThan: (state) => (price) => {
      return state.products.filter((product) => product.price < 50);
    },
  },
  actions: {
    addProduct(newProduct) {
      const productToAdd = {
        id: state.products.length + 1,

        name: newProduct.name,
        price: newProduct.price,
      };
      state.products.push(productToAdd);
    },
  },
});
