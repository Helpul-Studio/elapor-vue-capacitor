<script setup>
import Bottombar from '../../components/Bottombar.vue';
import Topbar from '../../components/Topbar.vue';

import { useJobtaskPrincipalStore } from '../../store/jobtask-principal-store';
import { computed, onMounted } from 'vue';

const jobtaskPrincipalStore = useJobtaskPrincipalStore()

const jobtaskPrincipalDetail = computed(() => jobtaskPrincipalStore.getJobtaskPrincipalDetail)

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
				<p class="btn btn-xs capitalize text-base md:text-sm font-bold no-underline hover:underline">Ke Halaman Utama</p>
                <div class="justify-between my-2 text-sm">
                    <h4 class=" font-sans break-normal text-gray-900 "><span class="font-bold">Judul :</span></h4>
                    <p>{{jobtaskPrincipalDetail.job_task_name}}</p>
                </div>

                <div class="justify-between my-2 text-sm">
                    <h4 class=" font-sans break-normal text-gray-900 text-md "><span class="font-bold">Tempat :</span></h4>
                    <p>{{jobtaskPrincipalDetail.job_task_place}}</p>
                </div>

                <div class="justify-between my-2 text-sm">
                    <h4 class=" font-sans break-normal text-gray-900 text-md "><span class="font-bold">Tanggal :</span></h4>
                    <p>{{jobtaskPrincipalDetail.job_task_date}}</p>
                </div>

                <div class="justify-between my-2 text-sm">
                    <h4 class=" font-sans break-normal text-gray-900 text-md "><span class="font-bold">Status :</span></h4>
                    <p>{{jobtaskPrincipalDetail.job_task_status}}</p>
                </div>

                <p class="text-md md:text-base mt-10 font-bold text-slate-800 mb-3">Kategori : {{jobtaskPrincipalDetail.sector.sector_name}}</p>
                <div class="mb-4 space-y-6" v-if="jobtaskPrincipalDetail.jobtask_result.length > 0">
                    <div>
                        <img :src="`${baseUrl}${jobtaskPrincipalDetail.jobtask_result[0].jobtask_documentation}`" class="max-w-full my-10 h-auto rounded-lg" alt="">
                    </div>
                    
                    <div class="text-md">
                        <h4 class="font-bold">Sumber Informasi</h4>
                        <p v-html="jobtaskPrincipalDetail.jobtask_result[0].report_source_information"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Aktifitas</h4>
                        <div class="list-decimal" v-html="jobtaskPrincipalDetail.jobtask_result[0].report_activities"></div>
                    </div>

                    <div>
                        <h4 class="font-bold">Analisis</h4>
                        <div class="list-decimal" v-html="jobtaskPrincipalDetail.jobtask_result[0].report_analysis"></div>
                    </div>

                    <div>
                        <h4 class="font-bold">Prediksi</h4>
                        <p v-html="jobtaskPrincipalDetail.jobtask_result[0].report_prediction"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Langkah langkah yang diambil</h4>
                        <p v-html="jobtaskPrincipalDetail.jobtask_result[0].report_steps_taken"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Rekomendasi</h4>
                        <p v-html="jobtaskPrincipalDetail.jobtask_result[0].report_recommendation"></p>
                    </div>

                    <div>
                        <h4 class="font-bold">Arahan Kepala</h4>
                        <p v-html="jobtaskPrincipalDetail.jobtask_result[0].report_note"></p>
                    </div>
                </div>
			</div>


		</div>

		<!--Author-->
		<div class="flex w-full items-center mx-auto font-sans px-4 py-5">
			<!-- <img class="w-10 h-10 rounded-full mr-4" :src="`${baseUrl}${newsDetail.principal[0].user_photo}`" alt="Avatar of Author">
			<div class="flex-1 px-2">
				<p class="text-base font-bold md:text-xl leading-none mb-2">{{newsDetail.principal[0].name}}</p>
				<p class="text-gray-600 text-xs md:text-base">Jabatan : {{newsDetail.principal[0].occupation}}</p>
			</div> -->
            <div class=" flex" >
                <button class="btn btn-sm  bg-yellow-500 text-slate-800 border-none" v-if="jobtaskPrincipalDetail.jobtask_result.length > 0" @click="jobtaskPrincipalStore.deleteJobtaskPrincipal(jobtaskPrincipalDetail.job_task_id)">Beri Arahan</button>
                <button class="btn btn-sm  bg-rose-700 border-none" v-else-if="jobtaskPrincipalDetail.jobtask_result.length == 0" @click="jobtaskPrincipalStore.deleteJobtaskPrincipal(jobtaskPrincipalDetail.job_task_id)">Hapus Tugas</button>
            </div>
		</div>
		<!--/Author-->

		<!--Divider-->

        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>