<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
import { useAuthStore } from '../../store/auth-store';

const authStore = useAuthStore()

const profile = computed(() => authStore.getUser)

const baseUrl = `https://elapor.helpulstudio.com/storage/`

onMounted(() => {
    authStore.fetchUser()
})

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            <div class="mx-auto">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img :src="`${baseUrl}${profile[0].user_photo}`" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 mt-10 justify-between text-center">
                <div>
                    <p class="font-semibold text-md mx-auto">Tugas Selesai</p>
                    <p class="text-sm mx-auto">{{profile[1].status_pekerjaan[0].selesai}}</p>
                </div>
                <div>
                    <p class="font-semibold text-md mx-auto">Ditugaskan</p>
                    <p class="text-sm mx-auto">{{profile[1].status_pekerjaan[1].ditugaskan}}</p>
                </div>
                <div>
                    <p class="font-semibold text-md mx-auto">Pending</p>
                    <p class="text-sm mx-auto">{{profile[1].status_pekerjaan[2].menunggu_konfirmasi}}</p>
                </div>
            </div>
            <div id="profile-section" class="mt-5 gap-y-4 grid">
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Nama</h4>
                    <p class="text-md">{{profile[0].name}}</p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Email</h4>
                    <p class="text-md">{{profile[0].email}}</p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Pangkat/Jabatan</h4>
                    <p class="text-md">{{profile[0].occupation}}</p>
                </div>
                <div>
                    <button class="btn w-full">Ubah Profil</button>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>