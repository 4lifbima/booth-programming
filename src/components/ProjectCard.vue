<template>
  <div 
    class="group relative rounded-xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 reveal cursor-pointer"
    :class="delayClass"
  >
    <div class="absolute top-4 right-4 z-10">
      <span class="px-3 py-1 bg-black/50 backdrop-blur text-xs font-bold text-white rounded-full">{{ project.category }}</span>
    </div>
    <div class="h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      >
    </div>
    <div class="p-6 relative bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 transition-colors">
      <h3 class="text-lg font-bold mb-2 group-hover:text-ksl-primary transition-colors">{{ project.title }}</h3>
      <p class="text-sm text-slate-500 mb-4 line-clamp-2">{{ project.description }}</p>
      <div class="flex items-center justify-between">
        <div class="flex -space-x-2">
          <div 
            v-for="n in project.team" 
            :key="n"
            class="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"
          ></div>
        </div>
        <a 
          :href="project.link" 
          target="_blank" 
          class="px-3 py-1 bg-ksl-primary text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity"
        >
          Visit
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})

const delayClass = computed(() => {
  if (props.delay === 100) return 'delay-100'
  if (props.delay === 200) return 'delay-200'
  return ''
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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
</style>