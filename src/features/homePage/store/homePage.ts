import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomePageStore = defineStore('homePage', () => {
    const pokemonModal = ref(false)
    const currentPokemonId = ref<number | null>(null)

    function updatePokemonModal(value: boolean) {
        pokemonModal.value = value
    }

    function updateCurrentPokemonId(id: number) {
        currentPokemonId.value = id
    }

  return { pokemonModal, currentPokemonId, updatePokemonModal, updateCurrentPokemonId }
})
