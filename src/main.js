import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
