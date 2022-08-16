<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';

import { useJobtaskStore } from '../store/jobtask-store';

import { reactive } from '@vue/reactivity';

import { Geolocation } from '@capacitor/geolocation';
import { onMounted } from '@vue/runtime-core';
import { ref } from 'vue';


const jobtaskStore = useJobtaskStore()

let images = ref('')

const reporting = reactive({
    latitude: null,
    longitude: null,
    image: ''
})

let file = ref(null)

const getCurrentPosition = async () => {
      const pos = await Geolocation.getCurrentPosition();
    //   console.log(pos)
      reporting.longitude = pos.coords.longitude
      reporting.latitude = pos.coords.latitude
    };

getCurrentPosition()

const handleFileUpload = async(e) => {
    console.log(e.target.files[0].name)
    reporting.image = e.target.files[0].name
    file = e.target.files[0]
    images.value = URL.createObjectURL(file)
}

const send = () => {
    console.log('run')
    jobtaskStore.sendReport(reporting)
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
                            <p class="text-xl text-center font-bold">Form Laporan</p>
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Lokasi(Jangan Diubah) </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="reporting.longitude" placeholder="longitude" disabled>
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Lokasi(Jangan Diubah) </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="reporting.latitude" placeholder="latitude" disabled>
                                    </div>
                                </div>

                                <div>
                                    <img v-show="images" :src="images" />
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                                    <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" ref="file" @change="handleFileUpload" multiple="multiple">
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white btn focus:outline-none">Kirim Laporan</button>
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