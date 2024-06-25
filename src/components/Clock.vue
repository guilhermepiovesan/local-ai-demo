<script setup lang="ts">
import { computed } from 'vue';
import { useClock } from '../composables/clock'
import { formatTime } from '../helpers/time'

const clock = useClock()
const currentTime = computed(() => formatTime(clock.value))
</script>

<template>
  <time>{{ currentTime }}</time>
</template>

<style scoped>
time {
  text-align: center;
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
}
</style>
