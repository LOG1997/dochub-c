import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "./style.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";

import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPluginPersist);
createApp(App).use(pinia).use(router).mount("#app");
