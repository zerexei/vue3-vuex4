<script setup>
import { useLoadingOverlay } from '../../composables/LoadingOverlay';
const { isLoading, setIsLoading } = useLoadingOverlay();
</script>

<template>
    <h1>C loading: {{ isLoading }}</h1>
    <button @click="setIsLoading(true)">CxComponent: true</button>
</template>