<script lang="ts" setup>
import { cartStore } from '@/stores/cart'
import { shopStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { Data } from '@/api/api'

const router = useRouter();
const route = useRoute();
console.log(router, route)
const cart = cartStore();
const shop = shopStore();
const {cartMsg} = storeToRefs(cart)
const {shopMsg} = storeToRefs(shop)
console.log(cartMsg.value, shopMsg.value)

const getData = async () => {
  const {data} = await Data.getLists()
  console.log(data)
}

getData()
</script>

<template>
  <div class="template">
    <el-button>Default</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
