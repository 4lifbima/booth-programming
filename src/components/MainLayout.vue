<template>
  <div class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans overflow-x-hidden">
    <!-- Navbar -->
    <nav class="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-ksl-primary to-ksl-secondary rounded-lg flex items-center justify-center text-white font-bold">
            K
          </div>
          <span class="text-xl font-bold tracking-tight">KSL UNG <span class="text-ksl-primary font-light">Showcase</span></span>
        </div>
        
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" class="hover:text-ksl-primary transition-colors">Beranda</a>
          <a href="#stats" class="hover:text-ksl-primary transition-colors">Statistik</a>
          <a href="#gallery" class="hover:text-ksl-primary transition-colors">Galeri</a>
          <a href="#about" class="hover:text-ksl-primary transition-colors">Tentang</a>
        </div>

        <div class="flex items-center gap-4">
          <button id="theme-toggle" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" @click="toggleTheme">
            <i data-lucide="moon" class="w-5 h-5 hidden dark:block text-yellow-400"></i>
            <i data-lucide="sun" class="w-5 h-5 block dark:hidden text-orange-500"></i>
          </button>
          <a href="#gallery" class="hidden sm:block px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Jelajahi Karya
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <!-- Background Blobs -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-ksl-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-ksl-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left reveal">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live Exhibition 2025
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Inovasi Digital <br>
            <span class="gradient-text">Tanpa Batas.</span>
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Selamat datang di booth pameran Kelompok Studi Linux UNG. Menampilkan karya terbaik dari divisi Pemrograman, Jaringan, dan Multimedia.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#gallery" class="px-8 py-3 bg-gradient-to-r from-ksl-primary to-ksl-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1">
              Lihat Semua Karya
            </a>
            <a href="#stats" class="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 justify-center">
              <i data-lucide="bar-chart-2" class="w-4 h-4"></i> Data Project
            </a>
          </div>
        </div>

        <div class="relative reveal delay-200 hidden lg:block">
          <!-- Abstract 3D Illustration Representation -->
          <div class="relative w-full aspect-square max-w-md mx-auto">
            <div class="absolute inset-0 bg-gradient-to-tr from-ksl-primary/20 to-ksl-secondary/20 rounded-full animate-pulse blur-3xl"></div>
            <div class="relative z-10 w-full h-full glass-panel rounded-2xl border border-white/20 p-6 shadow-2xl animate-float">
              <!-- Mockup Code Interface -->
              <div class="flex gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="space-y-3 font-mono text-sm text-slate-600 dark:text-slate-300">
                <div class="flex"><span class="text-purple-500 mr-2">const</span> <span class="text-blue-500">innovation</span> = <span class="text-green-500">'KSL UNG'</span>;</div>
                <div class="flex"><span class="text-purple-500 mr-2">let</span> <span class="text-blue-500">projects</span> = [<span class="text-orange-400">60+</span>];</div>
                <div class="pl-4 text-slate-400">// Loading awesome projects...</div>
                <div class="h-32 bg-slate-100 dark:bg-slate-800/50 rounded-lg mt-4 flex items-center justify-center relative overflow-hidden group">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <i data-lucide="cpu" class="w-12 h-12 text-ksl-primary opacity-50"></i>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  <div class="h-20 bg-slate-100 dark:bg-slate-800/50 rounded-lg p-3 flex flex-col justify-between">
                    <i data-lucide="server" class="w-5 h-5 text-indigo-500"></i>
                    <span class="text-xs font-bold">Network</span>
                  </div>
                  <div class="h-20 bg-slate-100 dark:bg-slate-800/50 rounded-lg p-3 flex flex-col justify-between">
                    <i data-lucide="palette" class="w-5 h-5 text-pink-500"></i>
                    <span class="text-xs font-bold">Design</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute z-30 -bottom-6 -right-6 glass-panel p-4 rounded-xl shadow-xl animate-float" style="animation-delay: 1s;">
              <div class="flex items-center gap-3">
                <div class="bg-green-500/20 p-2 rounded-full">
                  <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500"></i>
                </div>
                <div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Status</p>
                  <p class="font-bold">100% Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats & Highlight Section -->
    <section id="stats" class="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 reveal">
          <h2 class="text-3xl font-bold mb-4">Statistik & Perkembangan</h2>
          <p class="text-slate-600 dark:text-slate-400">Overview aktivitas project dalam 60 hari terakhir.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          <!-- Highlight Card -->
          <div class="col-span-1 lg:col-span-1 glass-panel bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm reveal">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
              <i data-lucide="pie-chart" class="text-ksl-primary"></i> Proporsi Divisi
            </h3>
            <div class="relative h-64 w-full flex justify-center">
              <canvas ref="divisionChart"></canvas>
            </div>
            <div class="mt-4 text-center text-sm text-slate-500">
              Distribusi kontribusi karya per divisi
            </div>
          </div>

          <!-- Timeline Chart -->
          <div class="col-span-1 lg:col-span-2 glass-panel bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm reveal delay-100">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-bold flex items-center gap-2">
                <i data-lucide="activity" class="text-ksl-secondary"></i> Aktivitas Project (60 Hari)
              </h3>
              <span class="text-xs px-2 py-1 rounded bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 font-bold">+24% Peningkatan</span>
            </div>
            <div class="relative h-64 w-full">
              <canvas ref="timelineChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Highlights Numbers -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <div class="p-6 rounded-xl bg-blue-50 dark:bg-slate-800 text-center border border-blue-100 dark:border-slate-700">
            <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">12</div>
            <div class="text-sm text-slate-500">Web App Rilis</div>
          </div>
          <div class="p-6 rounded-xl bg-indigo-50 dark:bg-slate-800 text-center border border-indigo-100 dark:border-slate-700">
            <div class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">5</div>
            <div class="text-sm text-slate-500">Topologi Jaringan</div>
          </div>
          <div class="p-6 rounded-xl bg-pink-50 dark:bg-slate-800 text-center border border-pink-100 dark:border-slate-700">
            <div class="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-1">28</div>
            <div class="text-sm text-slate-500">Aset Multimedia</div>
          </div>
          <div class="p-6 rounded-xl bg-orange-50 dark:bg-slate-800 text-center border border-orange-100 dark:border-slate-700">
            <div class="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1">8</div>
            <div class="text-sm text-slate-500">Workshop</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20 relative">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 reveal">
          <div>
            <h2 class="text-3xl font-bold mb-2">Showcase Karya</h2>
            <p class="text-slate-600 dark:text-slate-400">Jelajahi inovasi terbaru dari anggota kami.</p>
          </div>
          <div class="flex gap-2">
            <button class="px-4 py-2 rounded-full bg-ksl-primary text-white text-sm">Semua</button>
            <button class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-colors">Dev</button>
            <button class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-colors">Net</button>
            <button class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-colors">Design</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            v-for="(project, index) in projects" 
            :key="index"
            :project="project"
            :delay="index * 100"
          />
        </div>

        <div class="mt-12 text-center">
          <button class="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </section>

    <!-- About / Info Section -->
    <section id="about" class="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <div class="uppercase tracking-widest text-ksl-primary text-sm font-bold mb-2">Tentang Kami</div>
            <h2 class="text-3xl font-bold mb-6">Kelompok Studi Linux UNG</h2>
            <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              KSL UNG adalah wadah bagi mahasiswa Universitas Negeri Gorontalo untuk mengembangkan minat dan bakat di bidang Teknologi Informasi, khususnya Open Source. Kami terbagi dalam beberapa divisi spesialis untuk memastikan setiap anggota berkembang sesuai passion mereka.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                  <i data-lucide="code-2" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold">Divisi Pemrograman</h4>
                  <p class="text-sm text-slate-500">Fokus pada Web, Mobile, dan Desktop Development.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-lg">
                  <i data-lucide="network" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold">Divisi Jaringan</h4>
                  <p class="text-sm text-slate-500">SysAdmin, Cloud Computing, dan Keamanan Siber.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-lg">
                  <i data-lucide="video" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold">Divisi Multimedia</h4>
                  <p class="text-sm text-slate-500">UI/UX Design, Video Editing, dan Graphic Design.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 reveal delay-100">
            <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-4xl font-bold gradient-text mb-2">200+</h3>
              <p class="text-sm font-semibold">Anggota Aktif</p>
            </div>
            <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow translate-y-8">
              <h3 class="text-4xl font-bold gradient-text mb-2">50+</h3>
              <p class="text-sm font-semibold">Penghargaan</p>
            </div>
            <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-4xl font-bold gradient-text mb-2">15th</h3>
              <p class="text-sm font-semibold">Tahun Berdiri</p>
            </div>
            <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow translate-y-8">
              <h3 class="text-4xl font-bold gradient-text mb-2">∞</h3>
              <p class="text-sm font-semibold">Inovasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div class="max-w-xs text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-ksl-primary to-ksl-secondary rounded-lg flex items-center justify-center text-white font-bold">K</div>
              <span class="text-xl font-bold">KSL UNG</span>
            </div>
            <p class="text-slate-500 text-sm">Open Source, Open Mind. Mengembangkan teknologi dari timur Indonesia.</p>
          </div>
          
          <div class="flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#" class="hover:text-ksl-primary">Instagram</a>
            <a href="#" class="hover:text-ksl-primary">GitHub</a>
            <a href="#" class="hover:text-ksl-primary">LinkedIn</a>
            <a href="#" class="hover:text-ksl-primary">Website Utama</a>
          </div>
        </div>
        
        <div class="text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8">
          &copy; 2025 Kelompok Studi Linux UNG. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import ProjectCard from './ProjectCard.vue'

// Theme toggle function
const toggleTheme = () => {
  const htmlElement = document.documentElement
  htmlElement.classList.toggle('dark')
  if (htmlElement.classList.contains('dark')) {
    localStorage.theme = 'dark'
  } else {
    localStorage.theme = 'light'
  }
}

// Sample project data
const projects = ref([
  {
    title: "Coders",
    description: "Aplikasi pembelajaran coding yang interaktif dan mudah digunakan, dan quiz yang membantu pengguna belajar coding dengan cara yang menyenangkan.",
    image: "/coders.png",
    category: "Mobile App",
    team: 1
  },
  {
    title: "Website KSL-UNG",
    description: "Website resmi KSL-UNG yang menampilkan berbagai informasi dan sebagai sarana pendaftaran bagi mahasiswa baru.",
    image: "/webksl.png",
    category: "Web Development",
    team: 4
  }
])

// Chart references
const divisionChart = ref(null)
const timelineChart = ref(null)

// Initialize icons
onMounted(() => {
  // Check for saved theme preference or respect OS setting
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons()
  }

  // Initialize charts
  initCharts()

  // Scroll animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el)
  })
})

onUpdated(() => {
  // Re-initialize icons when component updates
  if (window.lucide) {
    window.lucide.createIcons()
  }
})

// Initialize charts
const initCharts = () => {
  if (window.Chart && divisionChart.value && timelineChart.value) {
    // Division Chart (Pie)
    new window.Chart(divisionChart.value, {
      type: 'doughnut',
      data: {
        labels: ['Programming', 'Jaringan', 'Multimedia', 'Lainnya'],
        datasets: [{
          data: [45, 25, 20, 10],
          backgroundColor: [
            '#0ea5e9', // Blue
            '#6366f1', // Indigo
            '#ec4899', // Pink
            '#94a3b8'  // Slate
          ],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              color: '#94a3b8' // Slate 400
            }
          }
        },
        cutout: '70%',
      }
    })

    // Timeline Chart (Line)
    // Mock Data for 60 Days (simplified to weeks)
    const labels = ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4', 'Minggu 5', 'Minggu 6', 'Minggu 7', 'Minggu 8']
    const data = {
      labels: labels,
      datasets: [{
        label: 'Commit & Progres',
        data: [12, 19, 15, 25, 22, 30, 35, 45],
        fill: true,
        borderColor: '#0ea5e9',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 300)
          gradient.addColorStop(0, 'rgba(14, 165, 233, 0.3)')
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0)')
          return gradient
        },
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#0ea5e9',
        pointBorderWidth: 2
      }]
    }

    new window.Chart(timelineChart.value, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              color: '#94a3b8'
            }
          },
          y: {
            grid: {
              borderDash: [5, 5],
              color: 'rgba(148, 163, 184, 0.1)'
            },
            ticks: {
              display: false
            },
            border: {
              display: false
            }
          }
        }
      }
    })
  }
}
</script>

<style scoped>
/* Custom Utilities */
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .glass-panel {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.gradient-text {
  background: linear-gradient(to right, #0ea5e9, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Animation Classes for JS Observer */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.delay-100 {
  transition-delay: 0.1s;
}

.delay-200 {
  transition-delay: 0.2s;
}
</style>