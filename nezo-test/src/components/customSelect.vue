<template>
    <div>
        <div>
            <div @click="toggleDropdown" ref="dropdownContainer" class="flex w-full h-full rounded-lg m-1.5px bg-white text-5E6278 border border-D4D4D4 appearance-none pl-3 pr-8 py-1 focus:outline-none cursor-pointer">
                <span v-if="selectedOption !== ''" class="font-normal text-5E6278">{{ selectedOption }}</span>
                <span v-else class="font-normal text-BDBDBD">Select</span>
                <img class="absolute top-1/2 right-3 transform -translate-y-1/2" src="@/assets/tab-zero/arrow-down.svg"/>
            </div>
            <div v-if="isOpen" class="absolute w-full mt-2 bg-white border border-D4D4D4 rounded-lg max-h-60 overflow-y-auto">
                <div v-for="option in options" :key="option" @click="selectOption(option)" class="flex px-3 py-2 hover:bg-gray-200 cursor-pointer">
                    <span class="text-222222 font-medium text-sm">{{ option }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'customScroll',
    props: ['options'],
    data() {
        return {
            isOpen: false,
            selectedOption: '',
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option: string) {
            this.selectedOption = option;
            this.isOpen = false;
        },
        closeDropdown(event: MouseEvent) {
            const dropdownElement = this.$refs.dropdownContainer as HTMLElement | undefined;

            if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
                this.isOpen = false;   
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.closeDropdown);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeDropdown);
    }
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