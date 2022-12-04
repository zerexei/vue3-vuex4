<script setup>
import { useFlash } from '../composables/flash';

const { isFlash, flashData } = useFlash();

</script>

<template>
    <div v-show="isFlash">
        <h2>FLASH</h2>
        <p>message: {{ flashData.message }}</p>
        <p>level: {{ flashData.level }}</p>
    </div>
</template>