import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        meta: {title: 'Главная', layout: 'Main'},
    },
    {
        path: '/scan',
        name: 'Scan',
        component: () => import('../views/Scan'),
        meta: {title: 'Сканирование', layout: 'Main'},
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((route) => route.meta?.auth)) {
//         if (Store.getters["login/isAuth"]) next()
//         else next('/login')
//     } else {
//         next()
//     }
// });

export default router