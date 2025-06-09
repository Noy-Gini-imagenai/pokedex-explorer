<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" v-if="modalValue" @click.self="close">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-header-title">{{ header }}</p>
                    <button class="modal-close" @click="close">X</button>
                </div>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ header?: string, modalValue?: boolean }>(), {
  header: 'Modal Header',
  modalValue: false
})


const emit = defineEmits<{
    (e: 'updateModalValue', value: boolean): void
}>()

function close() {
    emit('updateModalValue', false)
}
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 24px;
    border-radius: 8px;
    min-width: 652px;
    min-height: 292px;
    max-width: 90%;
    position: relative;
    color: black;
    max-width: 700px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
}

.modal-header-title {
    font-size: 1.5rem;
    font-weight: 700;
}

.modal-close {
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>
