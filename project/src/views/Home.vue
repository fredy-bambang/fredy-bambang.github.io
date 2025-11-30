<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <StarfieldBackground />
    
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
      <div ref="heroRef" class="container mx-auto text-center">
        <div class="space-y-6">
          <h2 class="text-xl md:text-2xl text-blue-400 font-medium opacity-0" ref="subtitleRef">
            Full Stack Engineer
          </h2>
          <h1 class="text-5xl md:text-7xl font-bold opacity-0" ref="titleRef">
            Hi, I'm <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Fredy Bambang</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto opacity-0" ref="descRef">
            Software Engineer with 13+ years of experience in building scalable systems, 
            from enterprise ERP to fintech microservices
          </p>
          
          <div class="flex flex-wrap gap-4 justify-center pt-8 opacity-0" ref="ctaRef">
            <a 
              href="#projects" 
              class="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              class="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105 border border-gray-700"
            >
              Get In Touch
            </a>
          </div>

          <!-- Tech Stack Icons -->
          <div class="flex flex-wrap justify-center gap-6 pt-12 opacity-0" ref="techRef">
            <div v-for="tech in ['Go', 'PHP', 'TypeScript', 'Vue.js', 'MySQL', 'Kafka']" 
                 :key="tech"
                 class="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              {{ tech }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-6">
      <div class="container mx-auto">
        <div ref="expTitleRef" class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p class="text-gray-400 text-lg">13+ years of professional software development</p>
        </div>

        <div ref="timelineRef" class="max-w-5xl mx-auto">
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            class="relative pl-8 pb-12 border-l-2 border-blue-500/30 last:pb-0 experience-item"
          >
            <!-- Timeline Dot -->
            <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            
            <!-- Content -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-[1.02]">
              <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-blue-400">{{ exp.position }}</h3>
                  <p class="text-xl text-gray-300">{{ exp.company }}</p>
                  <p class="text-sm text-gray-500">{{ exp.type }} · {{ exp.location }}</p>
                </div>
                <div class="text-right">
                  <p class="text-gray-400">{{ exp.period }}</p>
                  <p class="text-sm text-gray-500">{{ exp.duration }}</p>
                </div>
              </div>

              <ul class="space-y-2 mb-4">
                <li v-for="(desc, i) in exp.description" :key="i" class="text-gray-300 flex gap-2">
                  <span class="text-blue-400 mt-1">•</span>
                  <span>{{ desc }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in exp.skills" 
                  :key="skill"
                  class="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-gray-900/50">
      <div class="container mx-auto">
        <div ref="projTitleRef" class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p class="text-gray-400 text-lg">Key projects that showcase my technical expertise</p>
        </div>

        <div ref="projectsRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div 
            v-for="project in featuredProjects" 
            :key="project.id"
            class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 project-card"
          >
            <h3 class="text-2xl font-bold mb-3 text-blue-400">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6">
      <div class="container mx-auto">
        <div ref="skillsTitleRef" class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p class="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div ref="skillsRef" class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div 
            v-for="(skillList, category) in skills" 
            :key="category"
            class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 skill-card"
          >
            <h3 class="text-2xl font-bold mb-4 capitalize text-blue-400">{{ category }}</h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="skill in skillList" 
                :key="skill"
                class="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-900/50">
      <div class="container mx-auto max-w-4xl">
        <div ref="contactRef" class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p class="text-gray-300 text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div class="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://linkedin.com/in/fredy-bambang" 
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a 
              href="https://github.com/fredy-bambang" 
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105 border border-gray-700 flex items-center gap-2"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-gray-800">
      <div class="container mx-auto text-center text-gray-400">
        <p>&copy; 2025 Fredy Bambang. Built with Vue 3, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import anime from 'animejs'
import StarfieldBackground from '@/components/StarfieldBackground.vue'
import { experiences, projects, skills } from '@/data/professional'

const featuredProjects = computed(() => projects.filter(p => p.featured))

// Refs for animations
const heroRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const techRef = ref<HTMLElement | null>(null)
const expTitleRef = ref<HTMLElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)
const projTitleRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const skillsTitleRef = ref<HTMLElement | null>(null)
const skillsRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Hero animations
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  })

  timeline
    .add({
      targets: subtitleRef.value,
      opacity: [0, 1],
      translateY: [30, 0]
    })
    .add({
      targets: titleRef.value,
      opacity: [0, 1],
      translateY: [30, 0]
    }, '-=600')
    .add({
      targets: descRef.value,
      opacity: [0, 1],
      translateY: [30, 0]
    }, '-=600')
    .add({
      targets: ctaRef.value,
      opacity: [0, 1],
      translateY: [20, 0]
    }, '-=400')
    .add({
      targets: techRef.value,
      opacity: [0, 1],
      translateY: [20, 0]
    }, '-=400')

  // Scroll animations dengan IntersectionObserver
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  // Experience section
  const expObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: expTitleRef.value,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutCubic'
        })

        anime({
          targets: '.experience-item',
          opacity: [0, 1],
          translateX: [-30, 0],
          delay: anime.stagger(150),
          duration: 800,
          easing: 'easeOutCubic'
        })
        expObserver.disconnect()
      }
    })
  }, observerOptions)

  if (timelineRef.value) expObserver.observe(timelineRef.value)

  // Projects section
  const projObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: projTitleRef.value,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutCubic'
        })

        anime({
          targets: '.project-card',
          opacity: [0, 1],
          scale: [0.9, 1],
          delay: anime.stagger(100),
          duration: 600,
          easing: 'easeOutCubic'
        })
        projObserver.disconnect()
      }
    })
  }, observerOptions)

  if (projectsRef.value) projObserver.observe(projectsRef.value)

  // Skills section
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: skillsTitleRef.value,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutCubic'
        })

        anime({
          targets: '.skill-card',
          opacity: [0, 1],
          translateY: [30, 0],
          delay: anime.stagger(150),
          duration: 600,
          easing: 'easeOutCubic'
        })
        skillsObserver.disconnect()
      }
    })
  }, observerOptions)

  if (skillsRef.value) skillsObserver.observe(skillsRef.value)

  // Contact section
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: contactRef.value,
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 800,
          easing: 'easeOutCubic'
        })
        contactObserver.disconnect()
      }
    })
  }, observerOptions)

  if (contactRef.value) contactObserver.observe(contactRef.value)
})
</script>