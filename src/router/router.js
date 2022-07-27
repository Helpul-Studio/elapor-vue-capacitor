import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../pages/HomePage.vue'
import Loginpage from '../pages/LoginPage.vue'
import Historypage from '../pages/HistoryPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'

const routes = [
    {
        path: '/',
        component : Homepage
    },
    {
        path: '/reporting'
    },
    {
        path: '/reporting-history',
        component : Historypage
    },
    {
        path: '/reporting-detail'
    },
    {
        path: '/profile',
        component : ProfilePage
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