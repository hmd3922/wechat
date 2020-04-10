import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/register.vue')
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log(localStorage)
    const isLogin = localStorage.wxToken ? true : false;
    console.log(isLogin)

    if (to.path == 'login' || to.path == 'register') {
        next()
    }
    else {
        isLogin ? next() : next('/login')
    }
})


export default router



