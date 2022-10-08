import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "./style.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
const app = createApp(App);
// 全局svg组件
import svgIcon from "@/components/SvgIcon/index.vue";
import "virtual:svg-icons-register";
// animatecss
import "animate.css";
// 瀑布流
import { VueMasonryPlugin } from "vue-masonry";
app.use(VueMasonryPlugin);
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPluginPersist);
// svg全局组件
app.component("svg-icon", svgIcon);
app.use(pinia).use(router).mount("#app");
