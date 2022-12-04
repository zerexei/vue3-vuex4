<script setup>
import { useLoadingOverlay } from '../../composables/LoadingOverlay';
import BxComponent from './BxComponent.vue'
const { isLoading } = useLoadingOverlay();
</script>
<template>
    <h1>A loading: {{ isLoading }}</h1>
    <bx-component></bx-component>
</template>