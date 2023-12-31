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
        orders: mockOrders as object[],
        filters: mockFilters,
        nrOfEntriesDisplayed: 10,
        pages: [] as object[][],
        currentPage: 1,
    },
    getters: {
        getOrders(state: { orders: [] }) {
            return state.orders;
        },
        getFilters(state: { filters: [] }) {
            return state.filters;
        },
        getNrOfEntriesDisplayed(state: { nrOfEntriesDisplayed: number }) {
            return state.nrOfEntriesDisplayed;
        },
        getPages(state: { pages: [] }) {
            return state.pages;
        },
        getCurrentPage(state: { currentPage: number }) {
            return state.currentPage;
        },
    },
    mutations: {
        setNewFilters(state: { filters: [] }, newFilters: []) {
            state.filters = newFilters;
        },
        changeNrOfEntries(state: { nrOfEntriesDisplayed: number }, newNumber: number) {
            state.nrOfEntriesDisplayed = newNumber;
        },
        setPages(state: { pages: object[][], nrOfEntriesDisplayed: number, orders: [], currentPage: object[] }) {
            const newPages: object[][] = [];
            const nrOfPages = Math.ceil(state.orders.length / state.nrOfEntriesDisplayed);
            for(let i = 0; i < state.orders.length; i+=state.nrOfEntriesDisplayed) {
                newPages.push(state.orders.slice(i, i+state.nrOfEntriesDisplayed));
            }
            state.pages = newPages;
        },
        setPage(state: { currentPage: number }, newPage: number) {
            state.currentPage = newPage
        },
    },
    actions: {
        clearFilters({ commit }: ActionContext<StaticRange, any>) {
            commit('setNewFilters', []);
        },
        setFilters({ commit }: ActionContext<StaticRange, any>, newFilters: []) {
            commit('setNewFilters', newFilters);
        },
        changeNrOfEntriesDisplayed({ commit }: ActionContext<StaticRange, any>, newNumber: number) {
            commit('changeNrOfEntries', newNumber);
        },
        recalculatePages({ commit }: ActionContext<StaticRange, any>) {
            commit('setPages');
        },
        setCurrentPage({ commit }: ActionContext<StaticRange, any>, newPage: number) {
            commit('setPage', newPage);
        },
    },
};