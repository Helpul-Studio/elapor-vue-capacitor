<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';

import { useNewsStore } from '../store/news-store';
import { computed, onMounted } from 'vue';

const newsStore = useNewsStore()

const newsS = computed(() => newsStore.getNews)

onMounted(() => {
    newsStore.fetchNews()
})

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box">
                <div class="carousel-item">
                    <img src="https://polressorong.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-20-at-09.40.31.jpeg" class="rounded-box h-48 w-60" />
                </div>
                <div class="carousel-item">
                    <img src="https://polressorong.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-20-at-09.40.31.jpeg" class="rounded-box h-48 w-60" />
                </div>
                <div class="carousel-item">
                    <img src="https://polressorong.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-20-at-09.40.31.jpeg" class="rounded-box h-48 w-60" />
                </div>
            </div>
            <div class="flex justify-between">
                <p class="text-md font-bold text-center border-rose-800 bg-slate-800 w-full border-y-2 py-2 text-white">Pengumuman/Berita</p>
            </div>
            <div class="card card-side bg-base-100 shadow-xl" v-for="news in newsS" :key="news.news_id">
                <figure><img src="https://akcdn.detik.net.id/community/media/visual/2022/01/17/mahfud-md_169.jpeg?" class="w-32 h-full" alt="Movie"></figure>
                <div class="card-body">
                    <h2 class="card-title">Mahfud soal Ferdy Sambo: Pemeriksaan Etik Mudahkan Pengusutan Pidana</h2>
                    <p>Klik tombol dibawah untuk membaca.</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-sm capitalize">Selengkapnya</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>