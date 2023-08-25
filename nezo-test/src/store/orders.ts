import mockOrders from '@/store/mockOrders';
import { ActionContext } from 'vuex';

const mockFilters = [
    { value: '0740333555' },
    { value: 'company.com' },
    { value: 'Lake District' },
    { value: 'United States' },
]

export default {
    namespaced: true,
    state: {
        orders: mockOrders,
        filters: mockFilters,
    },
    getters: {
        getOrders(state: { orders: [] }) {
            return state.orders;
        },
        getFilters(state: { filters: [] }) {
            return state.filters;
        },
    },
    mutations: {
        setNewFilters(state: { filters: [] }, newFilters: []) {
            state.filters = newFilters;
        },
    },
    actions: {
        clearFilters({ commit }: ActionContext<StaticRange, any>) {
            commit('setNewFilters', []);
        },
        setFilters({ commit }: ActionContext<StaticRange, any>, newFilters: []) {
            commit('setNewFilters', newFilters);
        },
    },
};