<template>
  <div class="ml-[248px] pt-[163px] mr-[88px]">
    <div class="flex flex-wrap items-end">
      <div class="fixed top-[108px] right-[88px] z-50">
        <div class="flex">
          <div class="font-normal text-base">Сортировать по:</div>
          <div class="relative font-normal text-base ml-[6px] text-gray-600 cursor-pointer">
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
        <div class="hidden w-[160px] h-[60px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.05)] rounded-lg">
          <div class="pl-3 text-gray-400 hover:text-black hover:bg-slate-100 mt-2 cursor-pointer">По цене</div>
          <div class="pl-3 text-gray-400 hover:text-black hover:bg-slate-100 cursor-pointer">По популярности</div>
        </div>
      </div>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
