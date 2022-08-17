<script setup>
import { computed } from '@vue/runtime-core';
import { useAuthStore } from '../store/auth-store';

const authStore = useAuthStore()

const role = computed(() => authStore.getRole)

const logout = () => {
    authStore.logout()
}

</script>

<template>
    <div class="bg-base-100 fixed px-5 py-3 bottom-0 left-0 right-0">
        <div class="flex justify-between" v-if="role == 'subordinate'">
            <router-link to="/" class="btn btn-ghost btn-circle capitalize my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white" height="24" width="24"><path d="M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"/></svg>
                Home
            </router-link>
            <router-link to="/working" class="btn btn-ghost btn-circle capitalize my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"/></svg>
                Pekerjaan
            </router-link>
            <router-link to="/reporting-history" class="btn btn-ghost btn-circle capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"/></svg>
                Histori
            </router-link>
            <router-link to="/reporting-history-isidentil" class="btn btn-ghost btn-circle capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"/></svg>
                Isidentil
            </router-link>
            <button @click="logout" class="btn btn-ghost btn-circle capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"/></svg>
                Keluar
            </button>
        </div>
        <div class="flex justify-between" v-else>
            <router-link to="/principal" class="btn btn-ghost btn-circle capitalize my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white" height="24" width="24"><path d="M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"/></svg>
                Home
            </router-link>
            <router-link to="/working-principal" class="btn btn-ghost btn-circle capitalize my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"/></svg>
                Pekerjaan
            </router-link>
            <button @click="logout" class="btn btn-ghost btn-circle capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"/></svg>
                Keluar
            </button>
        </div>
    </div>
</template>