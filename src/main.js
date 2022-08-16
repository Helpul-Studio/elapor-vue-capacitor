import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { CKEditor } from '@ckeditor/ckeditor5-vue'
import router from './router/router'
import App from './App.vue'
import './index.css'
import {Select2} from 'select2-vue-component'

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

app.component('select2', Select2)

app.use(pinia)
app.use(CKEditor)
app.use(router)
app.mount('#app')