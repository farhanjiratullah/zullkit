import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
    }),
    getters: {
        user: (state) => state.authUser,
        isLoggedIn: (state) => state.authUser !== null,
    },
    actions: {
        async handleLogin(form) {
            try {
                const {
                    data: { data: data },
                } = await axios.post("login", {
                    email: form.email,
                    password: form.password,
                });

                this.authUser = data.user;

                localStorage.setItem("access_token", data.access_token);

                this.router.push({ name: "home" });
            } catch (error) {
                console.error(error);
            }
        },
        async handleRegister(form) {
            try {
                const {
                    data: { data: data },
                } = await axios.post("register", {
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    title: form.title,
                });

                this.authUser = data.user;

                localStorage.setItem("access_token", data.access_token);

                this.router.push({ name: "home" });
            } catch (error) {
                console.error(error);
            }
        },
        async getUser() {
            const accessToken = localStorage.getItem("access_token");

            try {
                const {
                    data: { data: data },
                } = await axios.get("user", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                this.authUser = data;
            } catch (error) {
                console.error(error);
            }
        },
    },
});
