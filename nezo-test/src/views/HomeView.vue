<template>
  <div class="home my-24px px-100px w-full">
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
        <h2>Orders</h2>
      </div>
      <button class="w-185px h-44px pl-6 pr-4 bg-EBEBEB rounded-lg flex items-center transition duration-500 hover:bg-007FFF group">
        <svg class="w-6 h-6 fill-current text-5E6278 transition duration-500 group-hover:text-white">
          <path :d="archiveSvg"/>
        </svg>
        <span class="px-2 text-16px transition duration-500 group-hover:text-white">Download All</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import archiveDownloadSvgPath from '@/assets/body/archive';

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

  },
  computed: {
    archiveSvg() {
      const svg: string = archiveDownloadSvgPath.toString();
      return svg;
    }
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
