<script setup lang="ts">
import { useLocalAI } from '../composables/local-ai'

const { inputText, result, processText } = useLocalAI()
</script>

<template>
  <section class="local-ai">
    <input v-model="inputText" @input="processText" placeholder="Type something..." />
    <pre :v-if="result" :class="{ 'long-content': result.length > 100 }">{{ result }}</pre>
  </section>
</template>

<style scoped>
.local-ai {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  overflow: auto;

  input {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    font-size: 1.2rem;
  }

  pre {
    font-size: 1.4rem;
    text-wrap: pretty;
    overflow: auto;

    &.long-content {
      text-align: left;
    }
  }
}
</style>
