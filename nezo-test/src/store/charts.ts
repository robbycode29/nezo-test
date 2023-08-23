const mockCharts = [
    { id: 0, name: 'Total Orders', value: 27, color: 'blue', data: [30, 341, 49, 320, 70, 550, 210, 49, 320, 70, 550] },
    { id: 1, name: 'Average CPC', value: '$0.87', color: 'green', data: [0.45, 0.91, 0.86, 0.12, 0.32, 0.99, 1.56, 1.21, 0.09, 0.54, 0.12] },
    { id: 2, name: 'Total clicks', value: '2172', color: 'yellow', data: [473, 118, 487, 42, 112, 346, 241, 73, 293, 255, 32] },
    { id: 3, name: 'Average ROI', value: '19.27%', color: 'red', data: [19, 19.5, 19.2, 19.3, 19.4, 19.1, 19.2, 19.3, 19.4, 19.5, 19.07] },
]

export default {
    namespaced: true,
    state: {
        charts: mockCharts,
    },
    getters: {
        getCharts(state: { charts: [] }) {
            return state.charts;
        },
    },
    mutations: {
    },
    actions: {
    },
}