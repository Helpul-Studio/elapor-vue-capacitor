<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';

import { useIsidentilPrincipalStore } from '../../store/isidentil-principal-store';
import { computed, onMounted, reactive } from 'vue';

const isidentilPrincipalStore = useIsidentilPrincipalStore()
const isidentilDetail = computed(() => isidentilPrincipalStore.getIsidentilDataDetail)

const baseUrl = `https://elapor.helpulstudio.com/storage/`

const instruction = reactive({
    report_note: ''
})

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
				<p class="btn btn-xs capitalize text-base md:text-sm font-bold no-underline hover:underline">Ke Halaman Utama</p>
                <div class="flex justify-between my-2">
                    <h4 class=" font-sans break-normal text-gray-900 text-md "><span class="font-bold">Kejadian :</span> {{isidentilDetail.report_place}}</h4>
                    <p>{{isidentilDetail.report_date}}</p>
                </div>
                <!-- <p class="text-sm md:text-base font-normal text-gray-600 mb-3">Kategori : {{newsDetail.sector.sector_name}}</p> -->
                <div class="mb-4 space-y-6">
                    <div>
                        <img :src="`${baseUrl}${isidentilDetail.jobtask_documentation}`" class="max-w-full my-10 h-auto rounded-lg" alt="">
                    </div>
                    
                    <div class="text-md">
                        <h4 class="font-bold">Sumber Informasi</h4>
                        <p v-html="isidentilDetail.report_source_information"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Aktifitas</h4>
                        <div class="list-decimal" v-html="isidentilDetail.report_activities"></div>
                    </div>

                    <div>
                        <h4 class="font-bold">Analisis</h4>
                        <div class="list-decimal" v-html="isidentilDetail.report_analysis"></div>
                    </div>

                    <div>
                        <h4 class="font-bold">Prediksi</h4>
                        <p v-html="isidentilDetail.report_prediction"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Langkah langkah yang diambil</h4>
                        <p v-html="isidentilDetail.report_steps_taken"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Anggota Terlibat</h4>
                        <p v-html="isidentilDetail.report_teamwise"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Rekomendasi</h4>
                        <p v-html="isidentilDetail.report_recommendation"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Arahan Kepala</h4>
                        <p v-html="isidentilDetail.report_note"></p>
                    </div>
                </div>
			</div>


		</div>

		<!--Author-->
        <div class="mx-5">
            <img class="w-10 h-10 rounded-full mr-4" :src="`${baseUrl}${isidentilDetail.subordinate.user_photo}`" alt="Avatar of Author">
            <div class="flex-1 px-2">
                <p class="text-base font-bold md:text-xl leading-none mb-2">{{isidentilDetail.subordinate.name}}</p>
                <p class="text-gray-600 text-xs md:text-base">Jabatan : {{isidentilDetail.subordinate.occupation}}</p>
            </div>
        </div>
		<div class="flex w-full items-center mx-auto font-sans px-4 py-5">
            <div class=" flex" >
                <form @submit.prevent="isidentilPrincipalStore.addInstruction(isidentilDetail.job_task_result_id, instruction)" enctype="multipart/form-data" v-if="isidentilDetail.report_note === null">
                    <div class="">
                        <p class="text-xl text-center font-bold">Form Pengarahan</p>
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div class="grid">
                                <label for="company-website" class="block text-sm font-medium text-gray-700"> Pengarahan </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" placeholder="pengarahan" v-model="instruction.report_note">
                                </div>
                            </div>     
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="btn-sm capitalize inline-flex justify-center  border border-transparent shadow-sm bg-yellow-500 text-slate-800 border-none text-sm font-medium rounded-md btn focus:outline-none">Beri Pengarahan</button>
                        </div>
                    </div>
                </form>
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