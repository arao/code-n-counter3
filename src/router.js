import Vue from 'vue'
import Router from 'vue-router'
import workerLogin from './components/workerLogin'
import providerLogin from './components/providerLogin'
import mainProvider from './components/mainProvider'
import mainWorker from './components/mainWorker'

import index from './components/index'
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name:'home',
            component:index
        },
        {
            path: '/workerLogin',
            name:'workerLogin',
            component:workerLogin
        },
        {
            path: '/providerLogin',
            name:'providerLogin',
            component:providerLogin
        },
        {
            path: '/mainProvider',
            name:'mainProvider',
            component:mainProvider
        },
        {
            path: '/mainWorker',
            name:'mainWorker',
            component:mainWorker
        }
    ]

})
