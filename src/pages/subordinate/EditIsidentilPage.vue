<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';

import { useIsidentilStore } from '../../store/isidentil-store';
import { useSectorStore } from '../../store/sector-store';
import { computed, onMounted } from 'vue';
import { reactive,ref } from 'vue';

import { Geolocation } from '@capacitor/geolocation';

import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const isidentilStore = useIsidentilStore()
const isidentilDetail = computed(() => isidentilStore.getIsidentilReporting)
const sectorStore = useSectorStore()
const sectorData = computed(() => sectorStore.getSector)

onMounted(() => {
    sectorStore.fetchSector()
})

let images = ref('')

const reporting = reactive({
    location_latitude : null,
    location_longitude : null,
    sector_id : isidentilDetail.value.sector_id,
    jobtask_documentation : images,
    report_about : isidentilDetail.value.report_about,
    report_source_information : isidentilDetail.value.report_source_information,
    report_date : isidentilDetail.value.report_date,
    report_place : isidentilDetail.value.report_place,
    report_activities : isidentilDetail.value.report_activities,
    report_analysis : isidentilDetail.value.report_analysis,
    report_prediction : isidentilDetail.value.report_prediction,
    report_steps_taken : isidentilDetail.value.report_steps_taken,
    report_recommendation : isidentilDetail.value.report_recommendation,
    report_teamwise : isidentilDetail.value.report_teamwise
})

const sectorDatas = computed(() => sectorStore.getSector)

const handleFileUpload = async(e) => {
    console.log(e.target.files[0])
    reporting.jobtask_documentation = e.target.files[0]
}

const editor = ClassicEditor
const ckeditor = CKEditor.component
const configEditor = {
    items: [ 'bold', 'italic', '|', 'undo', 'redo', '-', 'numberedList', 'bulletedList' ],
    shouldNotGroupWhenFull: true
}

const getCurrentPosition = async () => {
      const pos = await Geolocation.getCurrentPosition();
    //   console.log(pos)
      reporting.location_longitude = pos.coords.longitude
      reporting.location_latitude = pos.coords.latitude
    };

getCurrentPosition()

</script>

<template>
    <div>
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
                    <form @submit.prevent="isidentilStore.editIsidentil(isidentilDetail.job_task_result_id,reporting)" method="POST">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <p class="text-xl text-center font-bold">Form Edit</p>
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Perihal </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="perihal" v-model="reporting.report_about">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Bidang </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <select name="" id="" class="w-full p-2 text-sm rounded-md" v-model="reporting.sector_id">
                                            <option v-for="data in sectorData" :key="data" v-bind:value="data.sector_id">{{data.sector_name}}</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Sumber Informasi </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="sumber informasi" v-model="reporting.report_source_information">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Tempat Kejadian </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="reporting.report_place" placeholder="Tempat Kejadian">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Waktu Kejadian </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="date" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="waktu pelaksanaan" v-model="reporting.report_date">
                                    </div>
                                </div>

                                <div>
                                    <label class="block mb-2 bg-slate text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                                    <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" ref="file" @change="handleFileUpload" >
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Fakta - fakta </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.report_activities"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Analisa </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.report_analysis"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Prediksi </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.report_prediction"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Anggota Terlibat </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.report_teamwise"></ckeditor>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700"> Langkah - Langkah yang diambil </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.report_steps_taken"></ckeditor>
                                </div>

                                <div>
                                    {{reporting.report_recomendation}}
                                    <label class="block text-sm font-medium text-gray-700"> Rekomendasi </label>
                                    <ckeditor :editor="editor" class="w-20"  :config="configEditor" v-model="reporting.report_recommendation"></ckeditor>
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
    max-width: 300px
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