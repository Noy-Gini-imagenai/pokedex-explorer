<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="chip">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<style scoped>
.chip {
  font-size: 0.8rem;
  font-weight: 400;
  background-color: lightblue;
  padding: 5px 10px;
  border-radius: 30px;
  color: black;
}
</style>
