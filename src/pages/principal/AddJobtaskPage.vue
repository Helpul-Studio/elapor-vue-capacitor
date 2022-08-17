<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';
import Multiselect from '@vueform/multiselect'

import { useJobtaskPrincipalStore } from '../../store/jobtask-principal-store'
import { useSectorStore } from '../../store/sector-store';
import {useSubordinateStore} from '../../store/subordinate-store'


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

const jobtaskPrincipalStore = useJobtaskPrincipalStore()
const subordinateStore = useSubordinateStore()
const sectorStore = useSectorStore()

const sectorDatas = computed(() => sectorStore.getSector)
const subordinateDatas = computed(() => subordinateStore.subordinate)

const jobtask = reactive({
    sector_id: null,
    job_task_name : null,
    job_task_place : null,
    job_task_date : null,
    subordinate : []
})

const option = [
    ,
]

let value = ref([])

onMounted(() => {
    sectorStore.fetchSector()
    subordinateStore.fetchSubordinate()
})

const send = () => {
    console.log('run')
    jobtaskPrincipalStore.addJobtask(jobtask)
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
                            <p class="text-xl text-center font-bold">Form Pekerjaan</p>
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                
                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Judul Tugas </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="jobtask.job_task_name" placeholder="Judul tugas">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Lokasi Tugas </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="jobtask.job_task_place" placeholder="Lokasi tugas">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Tanggal </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="date" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" v-model="jobtask.job_task_date" placeholder="Tanggal">
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Bidang</label>
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
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" v-model="jobtask.sector_id">
                                                <option v-for="data in sectorDatas" :key="data" v-bind:value="data.sector_id">{{data.sector_name}}</option>
                                            </select>
                                    </div>
                                </div>

                                <div class="grid">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Penugasan </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">

                                            <Multiselect
                                            v-model="jobtask.subordinate"
                                            mode="tags"
                                            :close-on-select="false"
                                            :searchable="true"
                                            :create-option="true"
                                            :options="subordinateDatas"
                                            />
                                    </div>
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
<style src="@vueform/multiselect/themes/default.css"></style>