<script setup>
import Bottombar from '../components/Bottombar.vue';
import Topbar from '../components/Topbar.vue';
</script>

<template>
    <div class="bg-white max-w-lg mx-auto">

        <!-- top bar -->
        <Topbar/>
        <!-- top bar -->

        <main class=" mx-5 mt-10 grid gap-y-4 mb-20 z-10 py-2">
            <div class="flex justify-between">
                <p>Pekerjaan yang telah dikerjakan</p>
                <p>Total pekerjaan : 3</p>
            </div>
            <input type="text" placeholder="cari pekerjaanmu disini" class="focus:outline-none input bg-gray-300 mb-4 input-sm" />
            <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md">
                <div class="card-body">
                    <h2 class="card-title">Mengawal Gubernur</h2>
                    <p>Melakukan Pengawalan gubernur yang akan datang</p>
                    <p>Tanggal : 20-01-2022</p>
                    <div class="card-actions justify-end grid">
                        <p class="badge badge-warning w-full">Menunggu Konfirmasi</p>
                        <button class="btn btn-sm">Cek Laporan</button>
                    </div>
                </div>
            </div>
            <div class="card border-l-4 border-red-500 card-sm bg-base-100 shadow-md">
                <div class="card-body">
                    <h2 class="card-title">Menertibkan Lalu Lintas</h2>
                    <p>Adapun lalu lintas yang ditertibkan yakni....</p>
                    <p>Tanggal : 17-05-2022</p>
                    <div class="card-actions justify-end grid">
                        <p class="badge badge-success w-full">Laporan diterima</p>
                        <button class="btn btn-sm">Cek Tindak Lanjut</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- bottom bar -->
        <Bottombar/>
        <!-- bottom bar -->
    </div>
</template>