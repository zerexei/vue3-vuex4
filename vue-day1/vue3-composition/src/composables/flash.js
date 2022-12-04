import { reactive, ref } from 'vue';

const isFlash = ref(false);
const flashData = reactive({
  message: '',
  level: 'success',
});

export const useFlash = () => {
  const flash = (message, level) => {
    isFlash.value = true;
    flashData.message = message;
    flashData.level = level;

    setTimeout(() => {
      isFlash.value = false;
    }, 3000);
  };

  return { isFlash, flash, flashData };
};
