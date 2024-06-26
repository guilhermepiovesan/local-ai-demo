<script setup lang="ts">
import { computed } from 'vue';
import Clock from './components/Clock.vue'
import LiveLocalAI from './components/LiveLocalAI.vue'
import NotAvailable from './components/NotAvailable.vue'

const supportsLocalAI = computed(() =>
  window.ai?.canCreateTextSession()
    .then((result: string) => result === "readily")
)

</script>

<template>
  <main class="app">
    <NotAvailable v-if="!supportsLocalAI" />
    <template v-else>
      <header>
        <Clock />
      </header>
      <LiveLocalAI />
    </template>
  </main>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  gap: 32px;
  padding: 16px;
}
</style>
