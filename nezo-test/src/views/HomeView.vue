<template>
  <div class="home py-6 px-100px w-full bg-F9F9F9 flex flex-col">
    <div class="flex justify-between">
      <div class="w-190px h-58px self-start flex flex-col justify-between gap-3">
        <div class="flex text-12px items-center gap-1">
          <img class="w-18px h-18px mr-2" src="@/assets/breadcrumbs/home.svg"/>
          <div v-for="bc in breadcrumbs" :key="bc.route">
            <router-link v-if="notLastBreadcrumb(bc)" :to="bc.route" class="transition duration-200 hover:text-007FFF focus:text-007FFF">{{ bc.name }}</router-link>
            <router-link v-else :to="bc.route" class="transition duration-200 text-007FFF">{{ bc.name }}</router-link>
            <span v-if="notLastBreadcrumb(bc)" class="ml-1">/</span>
          </div>
        </div>
        <h2 class="font-semibold text-xl text-222222">Orders</h2>
      </div>
      <button class="w-185px h-44px pl-6 pr-4 bg-EBEBEB rounded-lg flex items-center transition duration-500 hover:bg-007FFF group">
        <svg class="w-6 h-6 fill-current text-5E6278 transition duration-500 group-hover:text-white">
          <path :d="archiveSvg"/>
        </svg>
        <span class="px-2 text-16px transition duration-500 group-hover:text-white">Download All</span>
      </button>
    </div>
    <div class="flex pt-6 mb-9 gap-9 justify-between overflow-x-scroll pl-1 pb-1">
      <div v-for="chart in getCharts" :key="chart.id">
        <chart-one :chart="chart"/>
      </div>
    </div>
    <div>
      <orders-menu/>
    </div>
    <div class="py-6">
      <transition name="slide-fade" mode="out-in">
        <component :is="currentTab" :key="currentTab.name"/>
      </transition>
    </div>
    <div class="inline-flex justify-center items-center gap-1">
      <span class="text-5E6278 text-xs font-normal">Made with</span>
      <img src="@/assets/body/heart.svg"/>
      <span class="text-5E6278 text-xs font-normal">for Nezo Digital</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import archiveDownloadSvgPath from '@/assets/body/archive';
import ChartOne from '@/components/ChartOne.vue';
import OrdersMenu from '@/components/OrdersMenu.vue';
import TabZero from '@/components/TabZero.vue';
import TabOne from '@/components/TabOne.vue';
import TabTwo from '@/components/TabTwo.vue';
import TabThree from '@/components/TabThree.vue';
import TabFour from '@/components/TabFour.vue';
import TabFive from '@/components/TabFive.vue';
import TabSix from '@/components/TabSix.vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      breadcrumbs: [
        { route: '/', name: 'Home'},
        { route: '/', name: 'Orders'},
        { route: '/', name: 'All Orders'},
      ],
    };
  },
  components: {
    ChartOne,
    OrdersMenu,
    TabZero,
  },
  computed: {
    ...mapGetters('charts', ['getCharts']),
    ...mapGetters(['getCurrentTab']),
    archiveSvg() {
      const svg: string = archiveDownloadSvgPath.toString();
      return svg;
    },
    currentTab() {
      switch(this.getCurrentTab) {
        case 0:
          return TabZero;
        case 1:
          return TabOne;
        case 2:
          return TabTwo;
        case 3:
          return TabThree;
        case 4:
          return TabFour;
        case 5:
          return TabFive;
        case 6:
          return TabSix;
        default:
          return TabZero;
      }
    },
  },
  methods: {
    notLastBreadcrumb(bc: { route: string; name: string; }) {
      if(this.breadcrumbs.length-1 === this.breadcrumbs.indexOf(bc)) {
        return false;
      }
      return true;
    },
  },
});
</script>
<style scoped>
/* For the component that's entering */
.slide-fade-enter-active {
  transition: transform 0.2s ease-out, opacity 1s ease-out;
}
.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* For the component that's leaving */
.slide-fade-leave-active {
  transition: transform 0.3s ease-in, opacity 0.2s ease-in;
}
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
/* This is the scrollbar track (the background) */
::-webkit-scrollbar {
    width: 4px; 
    height: 8px; 
}

/* This is the handle (or the 'thumb') */
::-webkit-scrollbar-thumb {
    background: #EBEBEB;
    border-radius: 8px;
}

/* This makes the scrollbar slim */
html {
    scrollbar-width: thin;
    scrollbar-color: rgba(128, 128, 128, 0.5) transparent; /* Thumb and Track */
}

/* These are for Internet Explorer */
body {
    scrollbar-face-color: grey;
    scrollbar-track-color: transparent;
    scrollbar-width: thin;
    scrollbar-arrow-color: grey;
    scrollbar-highlight-color: grey;
    scrollbar-3dlight-color: transparent;
    scrollbar-darkshadow-color: transparent;
    scrollbar-shadow-color: transparent;
}
</style>