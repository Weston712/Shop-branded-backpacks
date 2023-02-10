import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("productCard", {
  state: () => ({
    cartStore: [],
    countBasket: 0,
  }),
  actions: {
    async onAdd(product) {
      const item = this.cartStore.find((p) => p.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        this.cartStore.push({ ...product, quantity: 1 });
      }
      this.countBasket++;
    },
  },
});
