<template>
  <HomePageHeader />
  <main>
    <PokemonList />
  </main>
  <PokemonDetailsModal/>
</template>

<script setup lang="ts">
import HomePageHeader from './HomePageHeader.vue';
import PokemonList from './PokemonList/PokemonList.vue';
import PokemonDetailsModal from './PokemonDetailsModal/PokemonDetailsModal.vue';
</script>

<style scoped>
main {
  margin-top: 48px;
}
</style>
