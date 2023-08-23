<template>
    <div class="flex flex-col justify-between w-342px h-220px p-6 shadow-custom-1 rounded-xl bg-white">
        <div class="flex justify-between">
            <div class="flex flex-col">
                <span class="text-sm">{{ chart.name }}</span>
                <span class="text-2xl">{{ chart.value }}</span>
            </div>
            <img :src="chartIconColor"/>
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