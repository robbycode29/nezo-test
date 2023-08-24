<template>
    <div>
        <div class="px-6 h-92px bg-white shadow-custom-1 rounded-xl flex justify-between">
            <div class="flex self-end relative" ref="tabsContainer">
                <div class="h-14 flex justify-between gap-8">
                    <button @click="setCurrentTab(0)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 0" class="flex">
                            <span class="text-007FFF">All Orders</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">All Orders</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                    <button @click="setCurrentTab(1)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 1" class="flex">
                            <span class="text-007FFF">Active</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">Active</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                    <button @click="setCurrentTab(2)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 2" class="flex">
                            <span class="text-007FFF">Processing</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">Processing</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                    <button @click="setCurrentTab(3)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 3" class="flex">
                            <span class="text-007FFF">Unfulfilled</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">Unfulfilled</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                    <button @click="setCurrentTab(4)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 4" class="flex">
                            <span class="text-007FFF">Fulfilled</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">Fulfilled</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                    <button @click="setCurrentTab(5)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 5" class="flex">
                            <span class="text-007FFF">Completed</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">Completed</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                    <button @click="setCurrentTab(6)" class="flex flex-col justify-between">
                        <div v-if="getCurrentTab === 6" class="flex">
                            <span class="text-007FFF">Canceled</span>
                            <div class="bg-007FFF rounded-3xl px-2 text-white ml-3">287</div>
                        </div>
                        <div v-else class="flex">
                            <span class="">Canceled</span>
                            <div class="bg-EBEBEB rounded-3xl px-2 text-5E6278 ml-3">287</div>
                        </div>
                        <div></div>
                    </button>
                </div>
                <div :style="{ left: lineLeft + 'px', width: lineWidth + 'px' }" class="absolute bottom-0 h-1 bg-007FFF transition-all duration-300 rounded-t-lg"></div>
            </div>
            <div class="h-full flex">
                <button class="self-center h-11 w-165px bg-007FFF rounded-lg flex justify-center items-center group transition duration-300 hover:bg-green-400">
                    <svg class="w-6 h-6 stroke-current text-white" viewBox="0 0 24 24">
                        <path :d="plusSimpleSvg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="text-white text-base">New Order</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import plusSimple from '@/assets/orders-menu/plus-simple';

export default defineComponent({
    name: 'OrdersMenu',
    data() {
        return {
            lineLeft: 0,
            lineWidth: 124,
        };
    },
    computed: {
        ...mapGetters(['getCurrentTab']),
        plusSimpleSvg() {
            const svg = plusSimple.toString();
            return svg;
        },
    },
    methods: {
        ...mapActions(['setTab']),
        setCurrentTab(index: number) {
            this.setTab(index)
            this.$nextTick(() => {
                const container = this.$refs.tabsContainer as HTMLElement;
                const buttons = container.querySelectorAll('button');
                const selectedButton = buttons[index];
                this.lineLeft = selectedButton.offsetLeft;
                this.lineWidth = selectedButton.offsetWidth;
            });
        },
    },
});
</script>