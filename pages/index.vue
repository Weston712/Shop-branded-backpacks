<script setup>
import { ref } from "vue";
import states from "~~/consts/states";

const sortActive = ref(false);

const onModalButtonClick = () => {
  sortActive.value = !sortActive.value;
};

const productsState = useState(states.PROCUCTS);
const productListFiltered = ref(productsState.value.all);
const categoryState = useState(states.SELECTED_CATEGORY);

watch(categoryState, (value) => {
  console.log('> Index -> watch: categoryState =', value, productsState.value.categories);
  productListFiltered.value = productsState.value.categories[value.id];
})

const categoryFilter = () => {
  const categoryId = categoryState.value.id;
  productListFiltered.value = productsState.value.filter((p) => {
    return p.category === categoryId;
  });
}

const productFilter = (e) => {
  if (e === "price") {
    productListFiltered.value = productListFiltered.value.sort((a, b) => b.price - a.price);
  }
  if (e === "popular") {
    productListFiltered.value = productListFiltered.value.sort((a, b) => b.rating - a.rating);
  }
  sortActive.value = !sortActive.value;
};
</script>
<template>
  <div class="sm:ml-[248px] ml-40 pt-[163px] sm:mr-[88px] mr-7">
    <div class="flex flex-wrap items-end">
      <div class=" sm:fixed top-[108px] sm:z-50 right-[88px]">
        <div class="flex">
          <div class="font-normal text-base mr-[10px]">Сортировать по:</div>
          <div @click="onModalButtonClick" class="relative font-normal text-base ml-[4px] text-gray-600 cursor-pointer">
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
      <Product v-for="product in productListFiltered" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped></style>
