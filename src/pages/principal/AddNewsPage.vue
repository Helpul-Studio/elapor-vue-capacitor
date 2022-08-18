<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';

import { useJobtaskPrincipalStore } from '../../store/jobtask-principal-store'
import { useNewsStore } from '../../store/news-store'
import { useSectorStore } from '../../store/sector-store';


import { reactive } from '@vue/reactivity';

import { computed, onMounted } from '@vue/runtime-core';
import { ref } from 'vue';

import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const editor = ClassicEditor
const ckeditor = CKEditor.component
const configEditor = {
    items: [ 'bold', 'italic', '|', 'undo', 'redo', '-', 'numberedList', 'bulletedList' ],
    shouldNotGroupWhenFull: true
}

let images = ref('')


const news = reactive({
    sector_id: null,
    news_title : null,
    news_field : null,
    news_image : images
})


const handleFileUpload = async(e) => {
    console.log(e.target.files[0])
    news.news_image = e.target.files[0]
    // file = e.target.files[0]
    images.value = e.target.files[0]
    console.log(images.value)
}


const newsStore = useNewsStore()
const sectorStore = useSectorStore()

const sectorDatas = computed(() => sectorStore.getSector)



onMounted(() => {
    sectorStore.fetchSector()
})

const send = () => {
    console.log('run')
    newsStore.sendNews(news)
}


</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" max-w-[512px] mx-5 mt-10 grid gap-y-4 mb-20 z-10 py-2">
            <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
        <div>
            <div class="md:grid md:gap-6">
                <div class="mt-5 ">
                    <form @submit.prevent="send" enctype="multipart/form-data">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <p class="text-xl text-center font-bold">Form Tambah Pengumuman </p>
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                
                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Judul Berita </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="news.news_title" placeholder="Judul Berita">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Bidang Berita</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <select class="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-sm
                                            font-normal
                                            text-slate-800
                                            bg-white bg-clip-padding bg-no-repeat
                                            border-none
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" v-model="news.sector_id">
                                                <option v-for="data in sectorDatas" :key="data" v-bind:value="data.sector_id">{{data.sector_name}}</option>
                                            </select>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Isi Berita </label>
                                    <ckeditor :editor="editor" class="w-full"  :config="configEditor" v-model="news.news_field"></ckeditor>
                                </div>

                                <div>
                                    <label class="block mb-2 bg-slate text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Gambar Berita</label>
                                    <input class="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300 p-2" id="file_input" type="file" ref="file" @change="handleFileUpload" >
                                </div>



                                
                                
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white btn focus:outline-none">Tambah Pengumuman</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>

<style>
.ck.ck-editor {
    max-width: 320px
}

.ck.ck-content ul,
.ck.ck-content ul li {
  list-style-type: inherit;
}

.ck.ck-content ul {
  /* Default user agent stylesheet, you can change it to your needs. */
  padding-left: 20px;
}

.ck.ck-content ol,
.ck.ck-content ol li {
  list-style-type: decimal;
}
.ck.ck-content ol {
  /* Default user agent stylesheet, you can change it to your needs. */
  padding-left: 20px;
}
</style>