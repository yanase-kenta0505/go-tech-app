<template>
  <v-container>
    <h1>this is Go-Tech Project</h1>
    <v-btn @click="ready = !ready" color="primary">ready?</v-btn>
    <div calss="py-3">ready: {{ ready }}</div>
  </v-container>
</template>

<script setup lang="ts">
  const ready = ref(false)
</script>