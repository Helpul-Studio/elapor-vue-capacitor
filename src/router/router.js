import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../pages/HomePage.vue'
import Loginpage from '../pages/LoginPage.vue'
import Historypage from '../pages/HistoryPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import WorkingPage from '../pages/WorkingPage.vue'
import ReportPage from '../pages/ReportPage.vue'
import ReportIsidentilPage from '../pages/ReportIsidentilPage.vue'
import DetailNewsPage from '../pages/DetailNewsPage.vue'

const routes = [
    {
        path: '/',
        component : Homepage
    },
    {
        path: '/working',
        component : WorkingPage
    },
    {
        path: '/reporting',
        component: ReportPage
    },
    {
        path: '/reporting-isidentil',
        component: ReportIsidentilPage
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
    {
        path: '/news-detail',
        component: DetailNewsPage
    }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;