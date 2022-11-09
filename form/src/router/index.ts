import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: '/HelloWorld',
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'border-b-2 border-white',
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    from.name = ""
    next();
});

export default router;
