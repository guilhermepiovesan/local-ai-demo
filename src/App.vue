<script setup lang="ts">
import Clock from './components/Clock.vue'
import LiveLocalAI from './components/LiveLocalAI.vue'
</script>

<template>
  <main class="app">
      <header>
        <Clock />
      </header>
      <LiveLocalAI />
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
