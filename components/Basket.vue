<template>
  <div class="fixed left-0 top-0 w-full h-full z-50 overflow-hidden">
    <div class="absolute left-0 top-0 w-full h-full bg-white opacity-80"></div>
    <div
      class="overflow-y-auto h-screen absolute w-[460px] top-0 right-0 bg-white shadow-[-4px_0px_16px_rgba(0,0,0,0.05)] rounded-l-lg"
    >
      <div>
        <div class="flex items-center justify-between">
          <div class="font-bold text-3xl mt-[52px] ml-12">Корзина</div>
          <div class="mt-[65px] mr-[53px] rotate-45 text-2xl"><button>+</button></div>
        </div>
        <div class="font-normal text-lg leading-[23px] mt-6 ml-12 text-[#59606D]">Товары в корзине</div>
        <div>
          <BasketProduct />
        </div>
        <div>
          <BasketFormInp />
        </div>
      </div>
    </div>
  </div>
</template>
