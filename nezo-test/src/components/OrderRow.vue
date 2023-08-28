<template>
    <div class="flex">
        <div class="flex p-6 self-stretch items-center gap-1 w-166px">
            <span class="text-007FFF text-sm font-medium">{{ order.orderId }}</span>
        </div>
        <div class="p-5 flex flex-col justify-center items-start gap-1 w-197px">
            <div v-if="order.type === 'Stock Order'" class="px-3 py-1 rounded-md flex justify-center items-center gap-2 bg-00D39526">
                <span class="text-006D4D text-sm font-medium">{{ order.type }}</span>
            </div>
            <div v-if="order.type === 'Backorder'" class="px-3 py-1 rounded-md flex justify-center items-center gap-2 bg-FF8A0026">
                <span class="text-FF8A00 text-sm font-medium">{{ order.type }}</span>
            </div>
            <div v-if="order.type === 'Mixed Order'" class="px-3 py-1 rounded-md flex justify-center items-center gap-2 bg-007FFF26">
                <span class="text-023F7E text-sm font-medium">{{ order.type }}</span>
            </div>
        </div>
        <div class="flex p-6 self-stretch items-center gap-1 w-231px">
            <span class="text-222222 text-sm font-normal">{{ order.date }}</span>
        </div>
        <div class="flex px-5 py-3 w-289px">
            <div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <img v-if="order.country === 'US'" src="@/assets/tab-zero/US.svg"/>
                    <img v-if="order.country === 'UK'" src="@/assets/tab-zero/UK.svg"/>
                    <img v-if="order.country === 'UA'" src="@/assets/tab-zero/UA.svg"/>
                    <img v-if="order.country === 'RO'" src="@/assets/tab-zero/RO.svg"/>
                    <span class="text-222222 text-sm font-semibold">{{ order.customer }}</span>
                </div>
                <span>madalina.popescu@company.com</span> <!-- to be replaced with {{ order.email }} -->
            </div>
        </div>
        <div class="flex py-5 px-6 w-228px">
            <div v-if="order.status === 'Abandoned Checkout'" class="px-3 py-1 rounded-md bg-5E627826">
                <span class="text-5E6278 text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Awaiting Payment'" class="px-3 py-1 rounded-md bg-FF8A0026">
                <span class="text-FF8A00 text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Partially Refunded'" class="px-3 py-1 rounded-md bg-A460BC26">
                <span class="text-A460BC text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Completed'" class="px-3 py-1 rounded-md bg-00D39526">
                <span class="text-00D395 text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Partially Shipped'" class="px-3 py-1 rounded-md bg-007FFF26">
                <span class="text-007FFF text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Processing'" class="px-3 py-1 rounded-md bg-A460BC26">
                <span class="text-A460BC text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Payment Received'" class="px-3 py-1 rounded-md bg-00D39526">
                <span class="text-00D395 text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Payment Declined'" class="px-3 py-1 rounded-md bg-FA4B4B26">
                <span class="text-FA4B4B text-sm font-medium">{{ order.status }}</span>
            </div>
            <div v-if="order.status === 'Awaiting Fulfillment'" class="px-3 py-1 rounded-md bg-FF8A0026">
                <span class="text-FF8A00 text-sm font-medium">{{ order.status }}</span>
            </div>
        </div>
        <div class="flex p-6 pl-4 self-stretch items-center gap-1 w-152px">
            <span class="text-222222 text-sm font-semibold">$ {{ order.value }}</span>
        </div>
        <div class="py-22px pr-4 w-160px flex justify-end gap-6 items-center">
            <button class="group">
                <svg class="stroke-current text-5E6278 group-hover:text-007FFF transition duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 13H12" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 17H16" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="group">
                <svg class="stroke-current text-5E6278 group-hover:text-007FFF transition duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V6Z" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M17 7L7 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 12L7 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 17L7 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="group">
                <svg class="fill-current text-9296AA group-hover:text-007FFF transition duration-300" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2002 4.80001C10.2002 3.80589 11.0061 3 12.0002 3C12.9943 3 13.8002 3.80589 13.8002 4.80001C13.8002 5.79413 12.9943 6.60003 12.0002 6.60003C11.0061 6.60003 10.2002 5.79413 10.2002 4.80001ZM10.2002 12C10.2002 11.0059 11.0061 10.2 12.0002 10.2C12.9944 10.2 13.8002 11.0059 13.8002 12C13.8002 12.9941 12.9944 13.8 12.0002 13.8C11.0061 13.8 10.2002 12.9941 10.2002 12ZM12.0002 17.4C11.0061 17.4 10.2002 18.2059 10.2002 19.2C10.2002 20.1941 11.0061 21 12.0002 21C12.9944 21 13.8002 20.1941 13.8002 19.2C13.8002 18.2059 12.9944 17.4 12.0002 17.4Z"/>
                </svg>
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OrderRow',
    props: ['order'],
});
</script>