<script setup>
import { ref } from "vue";
import { useProductStore } from "~~/stores/ProductStore";

const productStore = useProductStore();
const { product, cartStore } = defineProps(["product", "cartStore"]);
</script>

<template>
  <div>
    <div
      class="w-[264px] h-[272px] left-[248px] top-[163px] mr-4 mt-4 bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.05)] rounded-lg"
      :data-cat="product.category"
    >
      <div class="relative flex justify-between">
        <div class="absolute top-[20px] left-[20px] flex">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42842 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89123 9.95731 7.10881 9.95731 7.29092 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z"
              fill="#F2C94C"
            />
          </svg>
          <div class="font-bold text-[10px] ml-[3px] text-yellow-500">{{ product.rating }}</div>
        </div>
        <div
          @click="productStore.onAdd(product)"
          class="absolute top-[20px] right-[20px] hover:stroke-black cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.92 1.74C4.03331 1.58892 4.21115 1.5 4.4 1.5H11.6C11.7889 1.5 11.9667 1.58892 12.08 1.74L13.88 4.14C13.9579 4.24386 14 4.37018 14 4.5V12.9C14 13.3774 13.8104 13.8352 13.4728 14.1728C13.1352 14.5104 12.6774 14.7 12.2 14.7H3.8C3.32261 14.7 2.86477 14.5104 2.52721 14.1728C2.18964 13.8352 2 13.3774 2 12.9V4.5C2 4.37018 2.04211 4.24386 2.12 4.14L3.92 1.74ZM4.7 2.7L3.2 4.7V12.9C3.2 13.0591 3.26321 13.2117 3.37574 13.3243C3.48826 13.4368 3.64087 13.5 3.8 13.5H12.2C12.3591 13.5 12.5117 13.4368 12.6243 13.3243C12.7368 13.2117 12.8 13.0591 12.8 12.9V4.7L11.3 2.7H4.7Z"
              fill="#959DAD"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 4.5C2 4.16863 2.26863 3.9 2.6 3.9H13.4C13.7314 3.9 14 4.16863 14 4.5C14 4.83137 13.7314 5.1 13.4 5.1H2.6C2.26863 5.1 2 4.83137 2 4.5Z"
              fill="#959DAD"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.6 6.3C5.93137 6.3 6.2 6.56863 6.2 6.9C6.2 7.37739 6.38964 7.83523 6.72721 8.17279C7.06477 8.51036 7.52261 8.7 8 8.7C8.47739 8.7 8.93523 8.51036 9.27279 8.17279C9.61036 7.83523 9.8 7.37739 9.8 6.9C9.8 6.56863 10.0686 6.3 10.4 6.3C10.7314 6.3 11 6.56863 11 6.9C11 7.69565 10.6839 8.45871 10.1213 9.02132C9.55871 9.58393 8.79565 9.9 8 9.9C7.20435 9.9 6.44129 9.58393 5.87868 9.02132C5.31607 8.45871 5 7.69565 5 6.9C5 6.56863 5.26863 6.3 5.6 6.3Z"
              fill="#959DAD"
            />
          </svg>
        </div>
      </div>
      <div class="pl-[61px] mr-[60.29px]">
        <img
          class="pt-[18px]"
          :src="`https://frontend-test.idaproject.com${product.photo}`"
          loading="lazy"
          :alt="product.name"
        />
      </div>
      <div class="font-normal text-sm pl-4 pt-8 items-end text-gray-500">{{ product.name }}</div>
      <div class="font-bold text-sm pl-4 pt-[8px]">{{ product.price }} ???</div>
    </div>
  </div>
</template>

<style scoped></style>
