<script setup>
import { ref } from "vue";
import states from "@/consts/states";

const categoriesState = useState(states.ALL_CATEGORIES);
const selectedCategoryState = useState(states.SELECTED_CATEGORY);

const tabsList = ref(categoriesState.value);
const onCategorySelected = (category) => {
  console.log("> Tabs -> onCategorySelected -> category:", category);
  selectedCategoryState.value = category;
};
</script>

<template>
  <div class="fixed w-[161px] h-[95px]">
    <!-- <div class="font-bold text-3xl sm:ml-[88px] ml-[27px] mt-[32px]">Каталог</div> -->
    <div class="sm:ml-[88px] ml-[27px] mt-[98px]">
      <div class="font-bold text-3xl">Каталог</div>
      <div
        v-for="tabs in tabsList"
        :key="tabs"
        @click="onCategorySelected(tabs)"
        class="font-normal text-base flex items-end mt-4 text-[#959DAD] hover:underline hover:text-gray-700 cursor-pointer"
      >
        <b v-if="selectedCategoryState.id == tabs.id"> {{ tabs.name }}</b>
        <span v-else>{{ tabs.name }}</span>
      </div>
      <!-- <div class="font-normal text-base flex items-end mt-4 text-gray-400 hover:text-gray-700 cursor-pointer"></div>
      <div class="font-normal text-base flex items-end mt-4 text-gray-400 hover:text-gray-700 cursor-pointer"></div> -->
    </div>
  </div>
</template>
