

<template>
    <!-- Hero Section -->
    <section class="-mt-12 min-h-screen flex items-center justify-center px-4 py-10">
        <div class="max-w-4xl text-center">
            <div class="mb-8">
                <div class="inline-block p-4 rounded-full bg-navy-700 mb-6 glow">
                    <i class="fas fa-laptop-code text-4xl text-blue-300"></i>
                </div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 hero-text">
                    BOOTH DIVISI <span class="text-blue-300">PROGRAMMING</span>
                </h1>
                <div class="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
                <p class="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Pagelaran Karya PKKMB Jurusan Teknik Informatika <br>
                    Fakultas Teknik Universitas Negeri Gorontalo
                </p>
                
                <div class="flex justify-center space-x-3 mb-6">
                    <div class="glass justify-center flex rounded-full px-6 py-3 text-blue-200">
                        <i class="fas fa-code mr-2 mt-1 lg:text-xs text-md"></i> Website
                    </div>
                    <div class="glass justify-center flex   rounded-full px-6 py-3 text-blue-200">
                        <i class="fas fa-robot mr-2 mt-1 lg:text-xs text-md"></i> AI
                    </div>
                    <div class="glass justify-center flex  rounded-full px-6 py-3 text-blue-200">
                        <i class="fas fa-mobile-alt mr-2 mt-1 lg:text-xs text-md"></i> Apps
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Showcase Section -->
    <section class="px-4 mb-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-14">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">PAGELARAN <span class="text-blue-300">KARYA</span></h2>
                <div class="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
                <p class="mt-6 text-blue-100 max-w-2xl mx-auto">Kumpulan karya terbaik mahasiswa Divisi Programming dalam berbagai bidang teknologi</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                <Card />
            </div>
        </div>
    </section>

    <!-- Widget -->
    <Widget />
</template>

<script setup>
import Card from '../components/Card.vue';
import Widget from '../components/Widget.vue';
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.product-card').forEach(card => {
                observer.observe(card);
            });
        });
</script>