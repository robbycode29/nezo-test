<template>
    <div class="flex flex-col justify-between w-342px h-220px p-6 shadow-custom-1 rounded-xl bg-white group">
        <div class="flex justify-between">
            <div class="flex flex-col">
                <span class="text-sm text-222222">{{ chart.name }}</span>
                <span class="text-2xl text-222222">{{ chart.value }}</span>
            </div>
            <div class="relative">
                <img class="relative z-10" :src="chartIconColor"/>
                <div v-if="chart.color === 'blue'" class="absolute top-2 left-2 w-10 h-10 bg-blue-500 rounded-full opacity-100 group-hover:animate-ping-custom"></div>
                <div v-else-if="chart.color === 'green'" class="absolute top-2 left-2 w-10 h-10 bg-green-500 rounded-full opacity-100 group-hover:animate-ping-custom"></div>
                <div v-else-if="chart.color === 'yellow'" class="absolute top-2 left-2 w-10 h-10 bg-yellow-500 rounded-full opacity-100 group-hover:animate-ping-custom"></div>
                <div v-else-if="chart.color === 'red'" class="absolute top-2 left-2 w-10 h-10 bg-red-500 rounded-full opacity-100 group-hover:animate-ping-custom"></div>
            </div>
        </div>
        <div class="flex justify-center w-full self-end">
            <apexchart height="100" type="line" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'ChartOne',
    props: ['chart'],
    computed: {
        chartIconColor() {
            const color = this.chart.color.toString();
            const image = require.context('@/assets/charts/',false,/\.svg$/);
            return image('./doc-' + color + '.svg');
        },
    },
    data() {
        return {
            options: {
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                grid: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    }
                },
                tooltip: {
                    enabled: false,
                },
                chart: {
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                    dropShadow: {
                        enabled: true,
                        top: 5,
                        left: 5,
                        blur: 3,
                        color: '#d9d9d9',
                        opacity: 0.35,
                    },
                    width: '100%',
                },
                colors: ['#00D395'],
            },
            series: [{
                name: 'series-1',
                data: this.chart.data,
            }],
        };
    },
});
</script>