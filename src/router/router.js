import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../pages/HomePage.vue'
import Loginpage from '../pages/LoginPage.vue'

const routes = [
    {
        path: '/',
        component : Homepage
    },
    {
        path: '/reporting'
    },
    {
        path: '/reporting-history'
    },
    {
        path: '/reporting-detail'
    },
    {
        path: '/profile'
    },
    {
        path: '/edit-profile'
    },
    {
        path: '/login',
        component : Loginpage
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;