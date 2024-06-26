import { ref, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'

export function useLocalAI() {
    const inputText = ref('')
    const result = ref('')
    let session: any = null

    const createSession = async () => {
        if (!session) {
            session = await window.ai.createTextSession()
        }
    }

    const destroySession = () => {
        if (session) {
            session.destroy()
            session = null
        }
    }

    const processText = async () => {
        if (inputText.value.length <= 2) return result.value = ''

        try {
            let promptResult = await session.prompt(inputText.value) as string
            promptResult = promptResult.trim()
            if (promptResult) result.value = promptResult
        } catch (error) {
            if (!(error instanceof DOMException && error.name === 'AbortError')) {
                console.error('Error processing text:', error)
            }
        }
    }

    const debouncedProcessText = useThrottleFn(processText, 800, true, false)

    onMounted(async () => {
        await createSession()
    })

    onUnmounted(() => {
        destroySession()
    })

    return {
        inputText,
        result,
        processText: debouncedProcessText,
    }
}