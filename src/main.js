import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
