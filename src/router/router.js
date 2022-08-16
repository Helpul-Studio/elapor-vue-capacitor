import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../pages/HomePage.vue'
import Loginpage from '../pages/LoginPage.vue'
import Historypage from '../pages/HistoryPage.vue'
import HistoryIsidentilPage from '../pages/HistoryIsidentilPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import WorkingPage from '../pages/WorkingPage.vue'
import ReportPage from '../pages/ReportPage.vue'
import DetailReportPage from '../pages/DetailReportPage.vue'
import ReportIsidentilPage from '../pages/ReportIsidentilPage.vue'
import DetailNewsPage from '../pages/DetailNewsPage.vue'
import { useAuthStore } from "../store/auth-store";

const routes = [
    {
        path: '/',
        component : Homepage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/working',
        component : WorkingPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/reporting',
        component: ReportPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/detail-reporting',
        component: DetailReportPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/reporting-isidentil',
        component: ReportIsidentilPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/reporting-history',
        component : Historypage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/reporting-history-isidentil',
        component : HistoryIsidentilPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/profile',
        component : ProfilePage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/login',
        component : Loginpage
    },
    {
        path: '/news-detail',
        component: DetailNewsPage,
        meta : {
            requireAuth: true
        }
    }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const requireAuth = to.matched.some(record => record.meta.requireAuth);

    if(requireAuth && !authStore.getToken) {
        next('login')
    } else {
        next();
    }
})

export default router;