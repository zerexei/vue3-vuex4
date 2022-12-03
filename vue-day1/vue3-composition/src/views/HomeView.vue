<script setup>
import { reactive, watch } from 'vue'

import TheWelcome from '../components/TheWelcome.vue'

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
    <TheWelcome />
  </main>
</template>
