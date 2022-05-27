import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', {
  state: () => {
    return {
      cartMsg: "cart"
    }
  },
  getters: {},
  actions: {}
})
