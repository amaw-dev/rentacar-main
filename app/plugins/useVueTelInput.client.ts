import { VueTelInput } from "vue-tel-input";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueTelInput", VueTelInput);
});
