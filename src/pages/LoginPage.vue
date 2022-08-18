<script setup>
import { reactive } from '@vue/reactivity';
import { useAuthStore } from '../store/auth-store';

const authStore = useAuthStore()

const user = reactive({
    nrp: '',
    password: ''
})

const login = () => {
    authStore.login(user)
}

</script>

<template>
    <div class="max-w-lg mx-auto">
        <div class="min-h-full mt-20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full space-y-8">
            <div>
            <img class="mx-auto h-12 w-auto" src="../../public/logo-polri.png" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Masuk E-Lapor</h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="login">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="email-address" class="sr-only">Nrp</label>
                <input id="email-address" name="nrp" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nrp Kerja" v-model="user.nrp">
                </div>
                <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model="user.password">
                </div>
            </div>

            <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn">
                 Masuk
                </button>
            </div>
            </form>
        </div>
    </div>        
    </div>
</template>