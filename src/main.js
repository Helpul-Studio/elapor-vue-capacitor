import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { CKEditor } from '@ckeditor/ckeditor5-vue'
import router from './router/router'
import App from './App.vue'
import './index.css'

import {App as CapacitorApp} from '@capacitor/app'

CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
        CapacitorApp.exitApp();
    } else {
        window.history.back();
    }
})

// createApp(App).mount('#app')

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(CKEditor)
app.use(router)
app.mount('#app')