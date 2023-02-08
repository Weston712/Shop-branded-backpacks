<script setup>
import { ref } from "vue";
const { data: arrayProduct } = await useFetch(`https://frontend-test.idaproject.com/api/product`);

const sortActive = ref(false);
const openModal = () => {
  sortActive.value = !sortActive.value;
};

const filter = ref(arrayProduct);

const productFilter = (e) => {
  if (e === "price") {
    filter.value = filter.value.sort((a, b) => b.price - a.price);
  }
  if (e === "popular") {
    filter.value = filter.value.sort((a, b) => b.rating - a.rating);
  }
  sortActive.value = !sortActive.value;
};
</script>
<template>
  <div class="ml-[248px] pt-[163px] mr-[88px]">
    <div class="flex flex-wrap items-end">
      <div class="fixed top-[108px] z-50 right-[88px]">
        <div class="flex">
          <div class="font-normal text-base mr-[10px]">Сортировать по:</div>
          <div @click="openModal" class="relative font-normal text-base ml-[4px] text-gray-600 cursor-pointer">
            цене
            <svg
              class="absolute top-0 right-[-8px] w-[5px] h-[2.5px] mt-[13px]"
              width="5"
              height="3"
              viewBox="0 0 5 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D" />
            </svg>
          </div>
        </div>
        <div v-show="sortActive" class="w-[160px] h-[60px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.05)] rounded-lg">
          <div
            @click="productFilter('price')"
            class="pl-3 text-gray-400 hover:text-black hover:bg-slate-100 mt-2 cursor-pointer"
          >
            По цене
          </div>
          <div
            @click="productFilter('popular')"
            class="pl-3 text-gray-400 hover:text-black hover:bg-slate-100 cursor-pointer"
          >
            По популярности
          </div>
        </div>
      </div>
      <Product v-for="product in arrayProduct" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped></style>
