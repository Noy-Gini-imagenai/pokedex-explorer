<template>
  <header class="pokemon-list-header">
    <p>Showing Pokémon from {{ fromPokemon }} to {{ toPokemon }} of {{ totalPokemons }}</p>
    <div class="buttons-container">
      <button v-show="showPreviousButton" :disabled="isLoading" @click="emit('onPreviousClick')">Previous</button>
      <button v-show="showNextButton" :disabled="isLoading" @click="emit('onNextClick')">Next</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LIMIT } from '../../services/consts';

const props = defineProps({
  currPage: {
    type: Number,
    required: true
  },
  totalPokemons: {
    type: Number,
    required: true
  },
  isLoading: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['onPreviousClick', 'onNextClick'])

const fromPokemon = computed(() => props.currPage * LIMIT + 1)
const toPokemon = computed(() => Math.min(props.currPage * LIMIT + LIMIT, props.totalPokemons))
const showPreviousButton = computed(() => props.currPage > 0)
const showNextButton = computed(() => props.currPage < Math.ceil(props.totalPokemons / LIMIT) - 1)
</script>

<style scoped>
.pokemon-list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.buttons-container button {
  all: unset;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  color: #000;
  font-size: 14px;
  font-weight: 600;
}
</style>
