<template>
    <div class="flex justify-between items-center">
        <div>
            <span class="text-sm text-5E6278">Showing 1 to {{ 1 + nrOfEntriesSelected }} of {{ getOrders.length }} entries</span>
        </div>
        <div v-if="getPages.length >= 1" class="flex gap-2">
            <button class="py-2 px-2 m-1.5px rounded-md border-D4D4D4 border-1.5px bg-white group hover:bg-007FFF hover:border-007FFF transition duration-300">
                <svg class="w-4 h-4 stroke-current text-BDBDBD group-hover:text-white transition duration-300" viewBox="0 0 16 16" fill="none">
                    <path d="M9.3335 4.66663L6.66683 7.99996L9.3335 11.3333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div v-if="getPages.length <= 4" class="flex">
                <button class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px rounded-md border-1.5px border-007FFF bg-007FFF">
                    <span class="text-white">1</span>
                </button>
                <div v-for="i in getPages.length" :key="i" class="flex">
                    <button v-if="i>=2" class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px rounded-md bg-white group border-1.5px border-transparent hover:border-007FFF hover:bg-007FFF transition duration-300">
                        <span class="text-222222 group-hover:text-white transition duration-300">{{ i }}</span>
                    </button>
                </div>
            </div>
            <div v-else class="flex">
                <button class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px rounded-md border-1.5px border-007FFF bg-007FFF">
                    <span class="text-white">1</span>
                </button>
                <button class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px rounded-md bg-white group border-1.5px border-transparent hover:border-007FFF hover:bg-007FFF transition duration-300">
                    <span class="text-222222 group-hover:text-white transition duration-300">2</span>
                </button>
                <button class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px rounded-md bg-white group border-1.5px border-transparent hover:border-007FFF hover:bg-007FFF transition duration-300">
                    <span class="text-222222 group-hover:text-white transition duration-300">3</span>
                </button>
                <div class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px bg-white">
                    <span class="text-222222">...</span>
                </div>
                <button class="flex items-center justify-center w-8 h-8 py-2 px-2 m-1.5px rounded-md bg-white group border-1.5px border-transparent hover:border-007FFF hover:bg-007FFF transition duration-300">
                    <span class="text-222222 group-hover:text-white transition duration-300">{{ getPages.length }}</span>
                </button>
            </div>
            <button class="py-2 px-2 m-1.5px rounded-md border-D4D4D4 border-1.5px bg-white group hover:bg-007FFF hover:border-007FFF transition duration-300">
                <svg class="w-4 h-4 stroke-current text-BDBDBD group-hover:text-white transition duration-300" viewBox="0 0 16 16" fill="none">
                    <path d="M6.6665 11.3334L9.33317 8.00004L6.6665 4.66671" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="flex gap-4 items-center">
            <span class="text-sm text-5E6278">Entries on page</span>
            <div class="relative w-70px">
                <select v-model="nrOfEntriesSelected" @change="changeNrOfEntriesDisplayed(parseInt(nrOfEntriesSelected.toString()))" class="w-full border-D4D4D4 border rounded-md m-1.5px bg-transparent text-222222 appearance-none px-3 py-1 focus:outline-none cursor-pointer">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <img src="@/assets/tab-zero/arrow-down.svg"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions} from 'vuex';

export default defineComponent({
    name: 'PaginationControl',
    data() {
        return {
            nrOfEntriesSelected: 10,
            currentPage: 1,
        };
    },
    computed: {
        ...mapGetters('orders', ['getOrders', 'getNrOfEntriesDisplayed', 'getCurrentPage', 'getPages']),
    },
    methods: {
        ...mapActions('orders', ['changeNrOfEntriesDisplayed', 'recalculatePages', 'setCurrentPage']),
    },
    watch: {
        getNrOfEntriesDisplayed(newVal) {
            this.nrOfEntriesSelected = newVal;
            this.recalculatePages();
            this.currentPage = this.getCurrentPage;
        },
    },
    created() {
        this.recalculatePages();
        this.currentPage = this.getCurrentPage;
    },
});
</script>