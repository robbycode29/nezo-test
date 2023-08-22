<template>
  <div class="w-screen h-screen flex">
    <!-- <div class="w-280px h-3/4 bg-222222"></div> -->
    <div class="w-1640px h-76px shadow-md flex items-center">
      <div class="mx-24px my-16px w-full flex justify-between">
        <div class="flex w-400px border rounded-lg h-44px items-center">
          <input class="outline-none flex-1 ml-3" type="text" placeholder="Search"/>
          <img src="@/assets/header/magnifier-glass.svg" class="w-5 h-5 mr-3"/>
        </div>
        <div class="flex-1"></div>
        <div class="w-396px flex items-center gap-8">
          <button class="h-6 w-6 p-1 bg-EBEBEB rounded-full flex items-center justify-center transform transition duration-500 hover:bg-007FFF">
            <img src="@/assets/header/plus.svg" class=""/>
          </button>
          <button class="h-6 w-6 flex items-center justify-center group">
            <img src="@/assets/header/setting-2.svg" class="group-hover:animate-spin-fast"/>
          </button>
          <button class="h-7 w-34px relative group">
            <img src="@/assets/header/notification.svg" class="h-6 w-6 hover:animate-ring group-hover:animate-ring"/>
            <div class="p-1 h-11px bg-FA4B4B rounded-full absolute top-0 left-3 flex items-center">
              <span class="text-10px">23</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
