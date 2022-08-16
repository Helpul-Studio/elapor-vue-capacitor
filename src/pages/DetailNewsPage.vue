<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';

import { useNewsStore } from '../store/news-store';
import { computed, onMounted } from 'vue';

const newsStore = useNewsStore()

const newsDetail = computed(() => newsStore.getNewsDetails)


const baseUrl = `https://elapor.helpulstudio.com/storage/`


</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2">
            <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

			<!--Title-->
			<div class="font-sans">
				<p class="text-base md:text-sm font-bold"> <router-link to="/" href="#" class="btn btn-xs capitalize text-base md:text-sm font-bold no-underline hover:underline">Ke Halaman Utama</router-link></p>
                <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-2xl ">{{newsDetail.news_title}}</h1>
                <p class="text-sm md:text-base font-normal text-gray-600 mb-3">Kategori : {{newsDetail.sector.sector_name}}</p>
                <div class="mb-4">
                    <img :src="`${baseUrl}${newsDetail.news_image}`" class="max-w-full h-auto rounded-lg" alt="">
                </div>
			</div>


			<!--Post Content-->


			<!--Lead Para-->
			<p class="py-6">
				{{newsDetail.news_field}}
			</p>


			<!--/ Post Content-->

		</div>

		<!--Author-->
		<div class="flex w-full items-center mx-auto font-sans px-4 py-5">
			<img class="w-10 h-10 rounded-full mr-4" :src="`${baseUrl}${newsDetail.principal[0].user_photo}`" alt="Avatar of Author">
			<div class="flex-1 px-2">
				<p class="text-base font-bold md:text-xl leading-none mb-2">{{newsDetail.principal[0].name}}</p>
				<p class="text-gray-600 text-xs md:text-base">Jabatan : {{newsDetail.principal[0].occupation}}</p>
			</div>
		</div>
		<!--/Author-->

		<!--Divider-->
		<hr class="border-b-2 border-gray-400 mb-8 mx-4">

        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>