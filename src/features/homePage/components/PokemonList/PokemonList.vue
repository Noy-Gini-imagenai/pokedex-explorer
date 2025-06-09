<template>
  <div class="pokemon-list">
    <div class="list-container">
      <PokemonListHeader
        :currPage="currPage"
        :totalPokemons="totalPokemons"
        :isLoading="isLoading"
        @onPreviousClick="onPreviousClick"
        @onNextClick="onNextClick"
      />
      <div class="cards-container">
        <PokemonCard
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          @onCardClick="onCardClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { getPokemons } from '../../services/api';
import type { Pokemon } from '../../services/types';
import PokemonListHeader from './PokemonListHeader.vue';
import PokemonCard from './PokemonCard.vue';
import { useHomePageStore } from '../../store/homePage';

const homePageStore = useHomePageStore()

const currPage = ref(0)
const totalPokemons = ref(0)
const pokemons = ref(null)
const isLoading = ref(false)

async function updatePokemons(page: number) {
  isLoading.value = true;
  const res = await getPokemons(page);

  totalPokemons.value = res.count;
  pokemons.value = res.results;
  isLoading.value = false;
}

onMounted(() => {
  updatePokemons(currPage.value);
});

watch(currPage, (newPage) => {
  updatePokemons(newPage);
});

function onNextClick() {
  currPage.value++;
}

function onPreviousClick() {
  currPage.value--;
}

function onCardClick(item: Pokemon) {
  homePageStore.updatePokemonModal(true)
  homePageStore.updateCurrentPokemonId(item.id)
}
</script> 

<style scoped>
.pokemon-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
</style>
