<template>
  <canvas ref="canvasRef" class="fixed inset-0 w-full h-full -z-10"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number

interface Star {
  x: number
  y: number
  z: number
  radius: number
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const stars: Star[] = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width - canvas.width / 2,
    y: Math.random() * canvas.height - canvas.height / 2,
    z: Math.random() * canvas.width,
    radius: Math.random() * 1.5
  }))

  const animate = () => {
    ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)

    stars.forEach(star => {
      star.z -= 2

      if (star.z <= 0) {
        star.z = canvas.width
        star.x = Math.random() * canvas.width - canvas.width / 2
        star.y = Math.random() * canvas.height - canvas.height / 2
      }

      const k = 128 / star.z
      const px = star.x * k
      const py = star.y * k

      const size = (1 - star.z / canvas.width) * star.radius
      const opacity = 1 - star.z / canvas.width

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.beginPath()
      ctx.arc(px, py, size, 0, Math.PI * 2)
      ctx.fill()
    })

    ctx.restore()
    animationId = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resizeCanvas)
  })
})
</script>
