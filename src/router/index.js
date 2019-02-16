import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';
import BodyContent from '@/components/BodyContent'
import NewClient from '@/components/NewClient'
import Clients from '@/components/Clients'
import Clist from '@/components/clientList'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
Vue.use(Router)
Vue.use(NProgress)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: BodyContent
        },
        {
            path: '/addclient',
            name: 'added',
            component: NewClient
        },
        {
            path: '/clients',
            name: 'clientsData',
            component: Clients
        },
        {
            path: '/clientlist',
            name: 'clientslist',
            component: Clist
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }



    ],
    mode: 'history',

})

export default router

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
        console.log("fire");
    }
    next()
})
router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})
