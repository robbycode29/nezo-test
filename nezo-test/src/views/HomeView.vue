<template>
  <div class="home my-24px px-100px w-full">
    <div class="flex">
      <div class="w-190px h-58px self-start flex flex-col justify-between gap-3">
        <div class="flex text-12px items-center gap-1">
          <img class="w-18px h-18px mr-2" src="@/assets/breadcrumbs/home.svg"/>
          <div v-for="bc in breadcrumbs" :key="bc.route">
            <router-link v-if="notLastBreadcrumb(bc)" :to="bc.route" class="transition duration-200 hover:text-007FFF focus:text-007FFF">{{ bc.name }}</router-link>
            <router-link v-else :to="bc.route" class="transition duration-200 text-007FFF">{{ bc.name }}</router-link>
            <span v-if="notLastBreadcrumb(bc)" class="ml-1">/</span>
          </div>
          <!-- <router-link to="/" class="transition duration-200 hover:text-007FFF">Orders</router-link>
          <span>/</span>
          <router-link to="/" class="text-007FFF">All Orders</router-link> -->
        </div>
        <h2>Orders</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
