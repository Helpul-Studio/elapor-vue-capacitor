import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth-store";

//principal
import HomepagePrincipal from '../pages/principal/HomePage.vue'
import DetailReportPagePrincipal from '../pages/principal/DetailReportPage.vue'
import AddJobtaskPage from '../pages/principal/AddJobtaskPage.vue'
import IsidentilPage from '../pages/principal/IsidentilPage.vue'
import DetailIsidentilPagePrincipal from '../pages/principal/DetailReportIsidentilPage.vue'

//subordinate
import Homepage from '../pages/subordinate/HomePage.vue'
import Loginpage from '../pages/LoginPage.vue'
import Historypage from '../pages/subordinate/HistoryPage.vue'
import HistoryIsidentilPage from '../pages/subordinate/HistoryIsidentilPage.vue'
import ProfilePage from '../pages/subordinate/ProfilePage.vue'
import EditProfilePage from '../pages/subordinate/EditProfilePage.vue'
import EditIsidentilPage from '../pages/subordinate/EditIsidentilPage.vue'
import WorkingPage from '../pages/subordinate/WorkingPage.vue'
import WorkingPrincipalPage from '../pages/principal/WorkingPage.vue'
import ReportPage from '../pages/subordinate/ReportPage.vue'
import ReportIsidentilPage from '../pages/subordinate/ReportIsidentilPage.vue'
import DetailReportPage from '../pages/subordinate/DetailReportPage.vue'
import DetailReportIsidentilPage from '../pages/subordinate/DetailReportIsidentilPage.vue'
import DetailNewsPage from '../pages/subordinate/DetailNewsPage.vue'

const routes = [
    {
        path: '/',
        component : Homepage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/news-detail',
        component: DetailNewsPage,
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
        path: '/detail-reporting-isidentil',
        component: DetailReportIsidentilPage,
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
        path: '/profile-edit',
        component : EditProfilePage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/edit-isidentil',
        component : EditIsidentilPage,
        meta : {
            requireAuth: true
        }
    },

    //principal
    {
        path: '/principal',
        component : HomepagePrincipal,
        meta : {
            requireAuth : true
        }
    },
    {
        path: '/working-principal',
        component : WorkingPrincipalPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/working-isidentil-principal',
        component : IsidentilPage,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/detail-reporting-principal',
        component: DetailReportPagePrincipal,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/detail-isidentil-principal',
        component: DetailIsidentilPagePrincipal,
        meta : {
            requireAuth: true
        }
    },
    {
        path: '/add-jobtask',
        component: AddJobtaskPage,
        meta : {
            requireAuth: true
        }
    },


    //all
    {
        path: '/login',
        component : Loginpage
    },
    
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