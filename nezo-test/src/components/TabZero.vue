<template>
    <div>
        <div class="p-6 bg-white shadow-custom-1 rounded-xl flex flex-col gap-6">
            <div class="flex justify-between">
                <span class="font-semibold text-xl text-222222">Orders list</span>
                <div class="flex justify-between gap-4">
                    <button class="bg-F2F2F2 p-2 rounded-lg group hover:bg-yellow-300 transition duration-300">
                        <svg class="w-6 h-6 stroke-current text-5E6278 group-hover:text-gray-700 transition duration-300" viewBox="0 0 24 24">
                            <path :d="filterSvg" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <button @click="clearFilters()" class="bg-F2F2F2 pl-2 rounded-lg pr-4 flex hover:bg-red-400 transition duration-300 group">
                        <span class="text-sm p-2 self-center group-hover:text-white transition duration-300">Clear Filters</span>
                        <svg class="w-6 h-6 self-center stroke-current text-5E6278 group-hover:text-white transition duration-300" viewBox="0 0 24 24">
                            <path id="Vector" d="M5.00098 5L19 18.9991"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M4.99996 18.9991L18.999 5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex gap-4">
                <span>Filters:</span>
                <span v-if="getFilters.length === 0" class="text-xs text-5E6278 italic self-center">No filters applied</span>
                <div v-else class="flex gap-4">
                    <div v-for="filter in getFilters" :key="filter.value" class="bg-F2F2F2 flex items-center p-1 rounded-md gap-2">
                        <span class="text-sm">{{ filter.value }}</span>
                        <button @click="deleteFilter(filter)" class="group flex">
                            <svg class="w-4 h-4 self-center stroke-current text-5E6278 group-hover:text-007FFF transition duration-300" viewBox="0 0 24 24">
                                <path id="Vector" d="M5.00098 5L19 18.9991"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_2" d="M4.99996 18.9991L18.999 5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <pagination-control/>
            <div class="overflow-x-scroll pl-36">
                <orders-table/>
            </div>
            <pagination-control/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import filter from '@/assets/tab-zero/filter';
import PaginationControl from './PaginationControl.vue';
import OrdersTable from './OrdersTable.vue';

export default defineComponent({
    name: 'TabZero',
    components: {
        PaginationControl,
        OrdersTable,
    },
    computed: {
        ...mapGetters('orders', ['getFilters']),
        filterSvg() {
            const svg = filter.toString();
            return svg;
        },
    },
    methods: {
        ...mapActions('orders', ['clearFilters', 'setFilters']),
        ...mapActions('orders', ['recalculatePages']),
        deleteFilter(selectedFilter: object) {
            const newFilters = this.getFilters.filter((filter: object) => filter !== selectedFilter );
            this.setFilters(newFilters);
        },
    },
    mounted() {
        this.recalculatePages();
    },
});
</script>
<style scoped>
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
