<script setup>
import { useLoadingOverlay } from '../../composables/LoadingOverlay';
import CxComponent from './CxComponent.vue'
const { isLoading } = useLoadingOverlay();
</script>
<template>
    <h1>B loading: {{ isLoading }}</h1>
    <cx-component></cx-component>
</template>