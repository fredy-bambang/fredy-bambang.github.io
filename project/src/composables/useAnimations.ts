import { ref, onMounted, Ref } from 'vue'
import anime from 'animejs'

export function useScrollReveal(elementRef: Ref<HTMLElement | null>, options = {}) {
  const isVisible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          
          if (elementRef.value) {
            anime({
              targets: elementRef.value,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutCubic',
              ...options
            })
          }
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    return () => observer.disconnect()
  })

  return { isVisible }
}

export function useStaggerAnimation(containerRef: Ref<HTMLElement | null>, selector: string) {
  onMounted(() => {
    if (!containerRef.value) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = containerRef.value?.querySelectorAll(selector)
          
          anime({
            targets: elements,
            opacity: [0, 1],
            translateY: [40, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutCubic'
          })
          
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.value)
  })
}

export function useTypewriter(text: string, speed = 50) {
  const displayText = ref('')
  const isComplete = ref(false)

  onMounted(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        displayText.value += text[index]
        index++
      } else {
        isComplete.value = true
        clearInterval(interval)
      }
    }, speed)
  })

  return { displayText, isComplete }
}
