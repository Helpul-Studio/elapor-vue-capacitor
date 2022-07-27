<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';
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
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 mt-10 justify-between text-center">
                <div>
                    <p class="font-semibold text-md mx-auto">Tugas Total</p>
                    <p class="text-sm mx-auto">5</p>
                </div>
                <div>
                    <p class="font-semibold text-md mx-auto">Ditugaskan</p>
                    <p class="text-sm mx-auto">3</p>
                </div>
                <div>
                    <p class="font-semibold text-md mx-auto">Selesai</p>
                    <p class="text-sm mx-auto">2</p>
                </div>
            </div>
            <div id="profile-section" class="mt-5 gap-y-4 grid">
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Nama</h4>
                    <p class="text-md">Rudy Kurniawan</p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Email</h4>
                    <p class="text-md">rudykurniawan@gmail.com</p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Pangkat</h4>
                    <p class="text-md">Sersan 1</p>
                </div>
                <div>
                    <h4 class="text-md font-semibold text-gray-300">Atasan</h4>
                    <p class="text-md">Rahmed ilyas</p>
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