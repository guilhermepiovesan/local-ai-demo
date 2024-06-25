import { ref, onMounted, onUnmounted, readonly } from 'vue'

export function useClock() {
    const currentTime = ref(new Date())
    let timer: ReturnType<typeof setInterval> | null = null

    const updateTime = () => {
        currentTime.value = new Date()
    }

    onMounted(() => {
        updateTime()
        timer = setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
        if (timer !== null) {
            clearInterval(timer)
        }
    })

    return readonly(currentTime)
}