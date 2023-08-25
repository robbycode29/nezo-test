<template>
    <div class="flex justify-between items-center">
        <div>
            <span class="text-sm text-5E6278">Showing 1 to {{ getNrOfEntriesDisplayed }} of {{ getOrders.length }} entries</span>
        </div>
        <div></div>
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
        };
    },
    computed: {
        ...mapGetters('orders', ['getOrders', 'getNrOfEntriesDisplayed']),
    },
    methods: {
        ...mapActions('orders', ['changeNrOfEntriesDisplayed', 'recalculatePages']),
    },
    watch: {
        getNrOfEntriesDisplayed(newVal) {
            this.nrOfEntriesSelected = newVal;
            this.recalculatePages();
        },
    },
});
</script>