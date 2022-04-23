import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import FlagList from './pages/CountryList.vue';
// import FlagDetail from './pages/FlagDetail.vue';

const routes = [
    { path: '/', component: FlagList },
    // { path: '/country/:id', component: FlagDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { routes, router };
