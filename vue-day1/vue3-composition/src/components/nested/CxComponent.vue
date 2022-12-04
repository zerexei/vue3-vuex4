<script setup>
import { useFlash } from '../../composables/flash';
import { useLoadingOverlay } from '../../composables/LoadingOverlay';
const { isLoading, setIsLoading } = useLoadingOverlay();

const { flash } = useFlash();
</script>

<template>
    <h1>C loading: {{ isLoading }}</h1>
    <button @click="setIsLoading(true)">CxComponent: true</button>
    <button @click="flash('Hello Composables from nested!', 'godly')">flash nested</button>
</template>