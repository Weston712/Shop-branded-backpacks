<script setup>
const { data: arrayTabs } = await useFetch(`https://frontend-test.idaproject.com/api/product-category`);

const sortCat = (e) => {
  console.log(e);
}
</script>

<template>
  <div class="fixed w-[161px] h-[95px]">
    <!-- <div class="font-bold text-3xl sm:ml-[88px] ml-[27px] mt-[32px]">Каталог</div> -->
    <div class="sm:ml-[88px] ml-[27px] mt-[98px]">
      <div class="font-bold text-3xl">Каталог</div>
      <NuxtLink
        v-for="tabs in arrayTabs"
        :key="tabs"
        @click="sortCat(tabs.id)"
        class="font-normal text-base flex items-end mt-4 text-[#959DAD] hover:underline hover:text-gray-700 cursor-pointer"
        >{{ tabs.name }}
      </NuxtLink>
      <!-- <div class="font-normal text-base flex items-end mt-4 text-gray-400 hover:text-gray-700 cursor-pointer"></div>
      <div class="font-normal text-base flex items-end mt-4 text-gray-400 hover:text-gray-700 cursor-pointer"></div> -->
    </div>
  </div>
</template>
