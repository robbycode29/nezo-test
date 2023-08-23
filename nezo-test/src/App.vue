<template>
  <div class="flex w-screen h-screen">
    <!-- <div class="w-280px h-3/4 bg-222222"></div> -->
    <div class="flex flex-col items-center w-screen h-screen">
      <div class="w-full h-76px shadow-md flex items-center">
        <div class="mx-24px my-16px w-full flex justify-between">
          <div class="flex w-400px border rounded-lg h-44px items-center">
            <input class="outline-none flex-1 ml-3" type="text" placeholder="Search"/>
            <img src="@/assets/header/magnifier-glass.svg" class="w-5 h-5 mr-3"/>
          </div>
          <div class="flex-1"></div>
          <div class="w-396px flex items-center gap-8">
            <button class="h-6 w-6 p-1 bg-EBEBEB rounded-full flex items-center justify-center transform transition duration-500 hover:bg-007FFF group">
              <svg class="w-6 h-6 stroke-current stroke-2 text-5E6278 transition duration-500 group-hover:text-white" viewBox="0 0 14 14" fill="none">
                <path :d="plusSvg" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="h-6 w-6 flex items-center justify-center group">
              <img src="@/assets/header/setting-2.svg" class="group-hover:animate-spin-fast"/>
            </button>
            <button class="h-7 w-34px relative group">
              <img src="@/assets/header/notification.svg" class="h-6 w-6 hover:animate-ring group-hover:animate-ring"/>
              <div class="p-1 h-11px bg-FA4B4B rounded-full absolute top-0 left-3 flex items-center">
                <span class="text-10px text-white">23</span>
              </div>
            </button>
            <button class="h-44px w-210px flex items-center relative justify-center gap-4 group">
              <div class="relative">
                <img src="@/assets/header/profile.svg" class="z-10 relative"/>
              </div>
              <div class="flex flex-col flex-1 relative">
                <h3 class="text-base font-semibold self-start">Madalina Popescu</h3>
                <span class="text-xs self-start">Super Admin</span>
              </div>
              <div class="bg-007FFF z-0 absolute right-0 w-full scale-0 rounded-lg h-full opacity-0 group-hover:animate-grow-profile"></div>
            </button>
          </div>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import plusSvgPath from '@/assets/header/plus';

export default defineComponent({
  computed: {
    plusSvg() {
      const plus: string = plusSvgPath.toString()
      return plus;
    }
  },
})
</script>

<style>

</style>
