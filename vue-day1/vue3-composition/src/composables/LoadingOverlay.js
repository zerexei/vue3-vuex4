import { ref } from 'vue';

const isLoading = ref(false);

export const useLoadingOverlay = () => {
  const setIsLoading = (state) => {
    isLoading.value = state;
  };

  return { isLoading, setIsLoading };
};
