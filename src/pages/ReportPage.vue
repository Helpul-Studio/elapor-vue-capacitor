<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';



import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { reactive } from '@vue/reactivity';

const reporting = reactive({
    factos: ''
})


const data = ['karyawan1', 'karyawan2', 'karyawan3']
    
const editor = ClassicEditor
const ckeditor = CKEditor.component
const configEditor = {
    items: [ 'bold', 'italic', '|', 'undo', 'redo', '-', 'numberedList', 'bulletedList' ],
    shouldNotGroupWhenFull: true
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
                    <form action="#" method="POST">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <p class="text-xl text-center font-bold">Form Laporan</p>
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Perihal </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="perihal">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Bidang </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <select name="" id="" class="w-full p-2 text-sm rounded-md">
                                            <option value="">Sosial Budaya</option>
                                            <option value="">Keamanan</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Sumber Informasi </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="sumber informasi">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Waktu Pelaksanaan </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="date" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="sumber informasi">
                                    </div>
                                </div>

                                <!-- diganti dengan select 2 -->
                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Anggota Pelaksana </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <select2 :data="data" :value="data"></select2>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Fakta - fakta </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.factos"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Analisa </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Prediksi </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Langkah - Langkah yang diambil </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Rekomendasi </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Foto Laporan </label>
                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <router-link to="/reporting-history" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white btn focus:outline-none">Kirim Laporan</router-link>
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
    max-width: 350px
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