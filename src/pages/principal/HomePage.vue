<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';

import { useNewsStore } from '../../store/news-store';
import { computed, onMounted } from 'vue';

const newsStore = useNewsStore()

const newsS = computed(() => newsStore.getNews)

onMounted(() => {
    newsStore.fetchNews()
})

const baseUrl = `https://elapor.helpulstudio.com/storage/`

const newsDetail = (index) => {
    newsStore.fetchDetailNews(index)
}

</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            <div class="flex justify-between">
                <p class="text-md font-bold text-center border-rose-800 bg-slate-800 w-full border-y-2 py-2 text-white">Pengumuman/Berita</p>
            </div>
            <div class="card card-side bg-base-100 shadow-xl" v-for="(news, index) in newsS" :key="news.news_id">
                <figure><img :src="`${baseUrl}${news.news_image}`" class="w-32 h-full" alt="Movie"></figure>
                <div class="card-body">
                    <h2 class="card-title text-sm">{{news.news_title.substring(0,40)+".."}}</h2>
                    <p class="text-sm">Klik tombol dibawah untuk membaca.</p>
                    <div class="card-actions justify-end">
                    <button @click="newsDetail(index)" class="btn btn-sm capitalize">Selengkapnya</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>