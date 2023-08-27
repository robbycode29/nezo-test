<template>
    <div class="relative inline-block text-left">
      <!-- Filter Button -->
      <button @click="toggleDropdown" class="flex justify-between gap-3 w-120px border border-D4D4D4 rounded-lg h-36px items-center bg-white">
        <span class="ml-3 text-sm font-normal text-5E6278">Filter</span>
        <img src="@/assets/tab-zero/filter.svg" class="w-5 h-5 mr-3"/>
      </button>
  
      <!-- Dropdown Content -->
      <div v-if="isOpen" class="flex flex-col gap-6 origin-top-right absolute right-0 mt-2 w-358px rounded-lg shadow-custom-2 bg-white p-6">
        <span class="text-222222 text-sm font-semibold">Spent range</span>
        <div class="flex items-center gap-3">
          <label class="flex flex-col gap-1 text-sm font-normal text-5E6278">
            From:
            <div class="relative">
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-222222 text-sm font-medium">$</span>
              <input v-model="value[0]" type="number" class="border border-D4D4D4 py-2 pr-3 pl-5 w-full rounded-lg text-222222 text-sm font-normal no-spinners outline-none">
            </div>
          </label>
          <div class="pt-8 pb-2">
            <span class="text-sm font-normal">-</span>
          </div>
          <label class="flex flex-col gap-1 text-sm font-normal text-5E6278">
            To:
            <div class="relative">
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-222222 text-sm font-medium">$</span>
              <input v-model="value[1]" type="number" class="border border-D4D4D4 py-2 pr-3 pl-5 w-full rounded-lg text-222222 text-sm font-normal no-spinners outline-none">
            </div>
          </label>
        </div>
        <div class="flex flex-col gap-1 pb-8 pt-2">
          <div class="flex justify-between text-222222 text-sm font-medium">
            <span>$ {{ min }}</span>
            <span>$ {{ max }}</span>
          </div>
          <vue-slider
            v-model="value"
            :min="min"
            :max="max"
            :drag-click="true"
            :enable-cross="false"
          />
        </div>
        <div class="flex gap-4">
          <button @click="closeDropdown" class="px-6 bg-EBEBEB flex justify-center items-center rounded-lg hover:bg-gray-300 transition duration-300">
            <span class="p-2 text-5E6278 text-sm font-medium">Cancel</span>
          </button>
          <button @click="applyFilter(value)" class="px-6 bg-007FFF justify-center items-center rounded-lg flex flex-1 hover:bg-blue-400 transition duration-300">
            <span class="p-2 text-white text-sm font-medium">Apply Filter</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

  export default defineComponent({
    data() {
      return {
        isOpen: false,
        value: [78, 263],
        min: 0,
        max: 300,
      };
    },
    components: {
      VueSlider,
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      applyFilter(option: number[]) {
        // Logic to apply filter goes here
        console.log(`Filter applied for ${option}`);
        this.isOpen = false;
      },
      closeDropdown(event: MouseEvent) {
        this.isOpen = false; 
      },
    },
  });
</script>
<style>
.vue-slider {
  display: flex;
  align-items: center;
  gap: -12px;
  align-self: stretch;
}

/* Slider Rail */
.vue-slider-rail {
  display: flex;
  height: 8px;
  align-items: center;
  border-radius: 100px;
  background: #EBEBEB;
}

/* Progress portion of the slider */
.vue-slider-process {
    background-color: #007FFF; /* Blue progress color */
}

/* Slider Handle */
.vue-slider .vue-slider-dot {
    background-color: rgb(251, 251, 251) !important; /* White handle color */
    width: 24px !important;
    height: 24px;
    display: flex;
    align-items: center;
    
}

.vue-slider .vue-slider-dot-handle {
  border-radius: 100%;
  border: 1px solid #D4D4D4;
  background: #FFF;

  /* XS-Shadow */
  box-shadow: 0px 0px 8px 0px rgba(133, 133, 133, 0.25);
  width: 24px;
  height: 24px;
}

/* Tooltip above the handle */
.vue-slider-dot-tooltip-inner {
    visibility: hidden;
    background-color: #007FFF; /* Blue tooltip background */
    color: white; /* White text color */
}

/* If you want to style marks */
.vue-slider-mark-step {
    background-color: #D3D3D3; /* Light gray marks */
}

/* Remove arrows from number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield; /* For Firefox */
}

.no-spinners {
    @apply appearance-none;
    -moz-appearance: textfield;
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


</style>

  
  