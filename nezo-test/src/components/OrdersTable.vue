<template>
    <div class="flex items-center justify-center">
        <table class="table-auto">
            <thead>
                <tr class="flex">
                    <th class="p-4 bg-F2F2F2 flex gap-4 flex-col rounded-l-lg">
                        <div class="flex gap-1">
                            <span class="text-sm text-222222">Order #ID</span>
                            <button @click="changeColOrder(0)">
                                <img v-if="colOrder[0]" src="@/assets/tab-zero/sort-arrow-down.svg"/>
                                <img v-else src="@/assets/tab-zero/sort-arrow-up.svg"/>
                            </button>
                        </div>
                        <div class="flex gap-3 w-134px border border-D4D4D4 rounded-lg h-36px items-center bg-white">
                            <input class="outline-none ml-3 w-78px" type="text" placeholder="Search #ID"/>
                            <img src="@/assets/header/magnifier-glass.svg" class="w-5 h-5 mr-3"/>
                        </div>
                    </th>
                    <th class="p-4 bg-F2F2F2 flex gap-4 flex-col">
                        <div class="flex gap-1">
                            <span class="text-sm text-222222">Order Type</span>
                            <button @click="changeColOrder(1)">
                                <img v-if="colOrder[1]" src="@/assets/tab-zero/sort-arrow-down.svg"/>
                                <img v-else src="@/assets/tab-zero/sort-arrow-up.svg"/>
                            </button>
                        </div>
                        <custom-select class="relative w-165px h-36px" :options="orderTypes"/>
                    </th>
                    <th class="p-4 bg-F2F2F2 flex gap-4 flex-col">
                        <div class="flex gap-1">
                            <span class="text-sm text-222222">Order Date</span>
                            <button @click="changeColOrder(2)">
                                <img v-if="colOrder[2]" src="@/assets/tab-zero/sort-arrow-down.svg"/>
                                <img v-else src="@/assets/tab-zero/sort-arrow-up.svg"/>
                            </button>
                        </div>
                        <div class="flex gap-3 border border-D4D4D4 rounded-lg h-36px items-center bg-white">
                            <span class="ml-3 text-sm font-normal text-5E6278">23/9/2023 - 23/9/2023</span>
                            <button>
                                <img src="@/assets/tab-zero/calendar.svg" class="w-5 h-5 mr-3"/>
                            </button>
                        </div>
                    </th>
                    <th class="p-4 bg-F2F2F2 flex gap-4 flex-col">
                        <div class="flex gap-1">
                            <span class="text-sm text-222222">Customer</span>
                            <button @click="changeColOrder(3)">
                                <img v-if="colOrder[3]" src="@/assets/tab-zero/sort-arrow-down.svg"/>
                                <img v-else src="@/assets/tab-zero/sort-arrow-up.svg"/>
                            </button>
                        </div>
                        <div class="flex gap-3 border border-D4D4D4 h-36px items-center bg-white">
                            <input class="outline-none ml-3 w-200px" type="text" placeholder="Search name, email, country"/>
                            <img src="@/assets/header/magnifier-glass.svg" class="w-5 h-5 mr-3"/>
                        </div>
                    </th>
                    <th class="p-4 bg-F2F2F2 flex gap-4 flex-col">
                        <div class="flex gap-1">
                            <span class="text-sm text-222222">Order Status</span>
                            <button @click="changeColOrder(4)">
                                <img v-if="colOrder[4]" src="@/assets/tab-zero/sort-arrow-down.svg"/>
                                <img v-else src="@/assets/tab-zero/sort-arrow-up.svg"/>
                            </button>
                        </div>
                        <custom-select :options="orderSatuses" class="relative w-196px h-36px"/>
                    </th>
                    <th class="p-4 bg-F2F2F2 flex gap-4 flex-col">
                        <div class="flex gap-1">
                            <span class="text-sm text-222222">Total</span>
                            <button @click="changeColOrder(5)">
                                <img v-if="colOrder[5]" src="@/assets/tab-zero/sort-arrow-down.svg"/>
                                <img v-else src="@/assets/tab-zero/sort-arrow-up.svg"/>
                            </button>
                        </div>
                        <custom-filter/>
                    </th>
                    <th class="pl-2 pr-4 pb-12 bg-F2F2F2 rounded-r-lg">
                        <div class="flex">
                            <span class="self-center px-10 py-4">
                                Actions
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import customSelect from '@/components/customSelect.vue';
import CustomFilter from '@/components/CustomFilter.vue';

export default defineComponent({
    name: 'OrdersTable',
    components: {
        customSelect,
        CustomFilter,
    },
    data() {
        return {
            colOrder: [ true, true, true, true, true, true],
            orderSatuses: ['Completed', 'Canceled', 'On Dispute', 'Disputed', 'Partially Refunded', 'Refunded', 'Partially Shipped', 'Awaiting Payment', 'Payment Received', 'Partially Refunded', 'Processing', 'Awaiting Fulfillment'],
            orderTypes: ['Stock Order', 'Backorder', 'Mixed Order'],
        }
    },
    methods: {
        changeColOrder(col: number) {
            this.colOrder[col] = !this.colOrder[col];
        },
    },
});
</script>