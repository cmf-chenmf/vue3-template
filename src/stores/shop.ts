import { defineStore } from 'pinia'

export const shopStore = defineStore('shop', {
  state: () => {
    return {
      shopMsg: "shop"
    }
  },
  getters: {},
  actions: {}
})
