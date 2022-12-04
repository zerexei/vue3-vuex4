<script setup>
import { reactive, watch } from 'vue'
import { useLoadingOverlay } from '../composables/LoadingOverlay';

import TheWelcome from '../components/TheWelcome.vue'
import AxComponent from '../components/nested/AxComponent.vue';

const { isLoading, setIsLoading } = useLoadingOverlay();

const obj = reactive({
  label: "My Counter",
  counter: 0,
});

// () => obj.counter: getter
watch(() => obj.counter, (newObjCounterValue) => {
  console.log(newObjCounterValue);
});
watch()


</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <button @click="setIsLoading(false)">HomeView: false</button>
    <ax-component></ax-component>
  </main>
</template>
