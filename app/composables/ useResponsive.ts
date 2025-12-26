import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export const useResponsive = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const smAndSmaller = ref<boolean>(false); // Default to false (desktop) on server

  onMounted(() => {
    smAndSmaller.value = breakpoints.smallerOrEqual("sm").value;
  });

  // Watch for changes after mount
  watchEffect(() => {
    if (import.meta.client) {
      smAndSmaller.value = breakpoints.smallerOrEqual("sm").value;
    }
  });

  return { smAndSmaller: readonly(smAndSmaller) };
};