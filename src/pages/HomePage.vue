<template>
  <q-page padding>
    <q-ajax-bar
      ref="bar"
      position="top"
      size="4px"
      color="accent"
      skip-hijack
    />
    <q-btn
      color="green-7"
      icon="check"
      label="Start loading"
      @click="startLoading"
    />

    <q-btn
      color="green-7"
      :icon="$q?.fullscreen?.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q?.fullscreen?.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
      @click="$q?.fullscreen?.toggle()"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bar = ref<BarRef | null>(null)

function startLoading () {
  const barRef = bar.value
  if (barRef) {
    barRef.start()
  }
  setTimeout(() => {
    if (barRef) {
      barRef.stop()
    }
  }, 3000)
}
</script>

<script lang="ts">
type BarRef = {
  start: () => void
  stop: () => void
}
</script>