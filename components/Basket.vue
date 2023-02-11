<script setup>
import { storeToRefs } from 'pinia';
import { cart } from '/src/open';
import { useProductStore } from "~~/stores/ProductStore";
const productStore = useProductStore();
const { cartStore, countBasket, totalPrice } = storeToRefs(productStore);
</script>

<template>
  <div v-show="cart.isOpen" class="fixed left-0 top-0 w-full h-full z-50 overflow-hidden">
    <div class="absolute left-0 top-0 w-full h-full bg-white opacity-80"></div>
    <div
      class="overflow-y-auto h-screen absolute w-[460px] top-0 right-0 bg-white shadow-[-4px_0px_16px_rgba(0,0,0,0.05)] rounded-l-lg"
    >
      <div>
        <div class="flex items-center justify-between">
          <div class="font-bold text-3xl mt-[52px] ml-12">Корзина</div>
          <div @click="cart.setisOpened(false)" class="mt-[65px] mr-[53px] rotate-45 text-2xl"><button>+</button></div>
        </div>
        <div v-if="countBasket > 0">
          <div class="font-normal text-lg leading-[23px] mt-6 ml-12 text-[#59606D]">Товары в корзине</div>
          <BasketProduct v-for="product in cartStore" :key="product" :product="product" />
          <div>Полная стоимость: {{ totalPrice }}</div>
        </div>
        <div v-else>
          <div class="ml-12 mt-6 font-normal text-[22px] leading-[28px]">
            Пока что вы ничего не добавили<br />
            в корзину.
          </div>
          <div
            @click="cart.setisOpened(false)"
            class="w-[364px] h-[50px] mb-[32px] mt-6 ml-12 bg-black rounded-lg cursor-pointer"
          >
            <button class="mt-[14px] ml-[118px] text-white">Перейти к выбору</button>
          </div>
        </div>

        <div>
          <BasketFormInp v-if="productStore.countBasket > 0" />
        </div>
      </div>
    </div>
  </div>
</template>
