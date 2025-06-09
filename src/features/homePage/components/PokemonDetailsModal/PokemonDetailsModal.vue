<template>
  <BaseModal
    :modalValue="homePageStore.pokemonModal"
    :header="pokemoDetails?.name"
    @updateModalValue="homePageStore.updatePokemonModal"
  >
    <div v-if="pokemoDetails" class="pokemon-details-container">
      <div class="left-container">
        <img :src="pokemoDetails?.sprites.front_default" alt="pokemon-image" />
        <div class="types">
          <Chip v-for="type in pokemoDetails?.types" :key="type.slot" class="type" :label="type.type.name"/>
        </div>
      </div>

      <div class="right-container">
        <p class="stats-title">Base Stats</p>
        <p>Height: {{ pokemoDetails?.height }}</p>
        <p>Weight: {{ pokemoDetails?.weight }}</p>
        <p>Abilities: {{ pokemoDetails?.abilities.map((ability) => ability.ability.name).join(', ') }}</p>
        <p>Types: {{ pokemoDetails?.types.map((type) => type.type.name).join(', ') }}</p>
        <p>Stats: {{ pokemoDetails?.stats.map((stat) => stat.stat.name).join(', ') }}</p>
      </div>

    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseModal from '@/common/components/BaseModal.vue';
import { useHomePageStore } from '../../store/homePage';
import { getPokemonDetails } from '../../services/api';
import Chip from '@/common/core-ui/components/Chip.vue';

const homePageStore = useHomePageStore()
const pokemoDetails = ref<PokemonDetails | null>(null)

watch(
  () => homePageStore.pokemonModal,
  async (newVal) => {
    if (newVal) {
      const res = await getPokemonDetails(homePageStore.currentPokemonId)
      pokemoDetails.value = res
    } else {
      pokemoDetails.value = null
    }
  }
)
</script>

<style scoped>
.pokemon-details-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.left-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
}

.types {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.stats-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}
</style>
