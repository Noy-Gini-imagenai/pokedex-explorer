<template>
  <div class="pokemon-card" @click="emit('onCardClick', pokemon)">
    <div class="image-container">
      <img :src="pokemon.image" alt="pokemon image" />
    </div>
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Pokemon } from '../../services/types';

defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true
  }
})

const emit = defineEmits(['onCardClick'])
</script>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 420px;
  height: 260px;
  gap: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.pokemon-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 0 15px rgba(246, 247, 248, 0.909);
}

.image-container {
  width: 108px;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

p {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
