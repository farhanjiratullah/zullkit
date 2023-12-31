<script setup>
    import axios from "axios";
    import InputLabel from "@/components/InputLabel.vue";
    import TextInput from "@/components/TextInput.vue";
    import { RouterLink } from "vue-router";
    import Button from "@/components/Button.vue";
    import { ref } from "vue";
    import Benefit from "@/components/Benefit.vue";
    import { useAuthStore } from "@/stores/auth";

    const benefits = ref([
        {
            id: 1,
            svg: `<svg
                    width="45"
                    height="45"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline align-middle"
                >
                    <circle
                        cx="30"
                        cy="30"
                        r="30"
                        fill="#642DFB"
                    />
                    <path
                        d="M20 35L30 40L40 35"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 30L30 35L40 30"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M30 20L20 25L30 30L40 25L30 20Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>`,
            title: "Customizeable",
            description: `
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
            `,
        },
        {
            id: 2,
            svg: `<svg
                    width="45"
                    height="45"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline align-middle"
                >
                    <circle
                        cx="30"
                        cy="30"
                        r="30"
                        fill="#1BA37A"
                    />
                    <path
                        d="M30 33C33.866 33 37 29.866 37 26C37 22.134 33.866 19 30 19C26.134 19 23 22.134 23 26C23 29.866 26.134 33 30 33Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M26.21 31.89L25 41L30 38L35 41L33.79 31.88"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>`,
            title: "500 Fortune",
            description: `
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
            `,
        },
        {
            id: 3,
            svg: `<svg
                    width="45"
                    height="45"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline align-middle"
                >
                    <circle
                        cx="30"
                        cy="30"
                        r="30"
                        fill="#FF6D90"
                    />
                    <path
                        d="M40 21H34C32.9391 21 31.9217 21.4214 31.1716 22.1716C30.4214 22.9217 30 23.9391 30 25V39C30 38.2044 30.3161 37.4413 30.8787 36.8787C31.4413 36.3161 32.2044 36 33 36H40V21Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 21H26C27.0609 21 28.0783 21.4214 28.8284 22.1716C29.5786 22.9217 30 23.9391 30 25V39C30 38.2044 29.6839 37.4413 29.1213 36.8787C28.5587 36.3161 27.7956 36 27 36H20V21Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>`,
            title: "Documentation",
            description: `
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
            `,
        },
    ]);

    const form = ref({
        name: "",
        email: "",
        password: "",
        title: "Designer",
    });

    const auth = useAuthStore();
</script>

<template>
    <main>
        <div class="relative overflow-hidden bg-white">
            <div class="mx-auto">
                <div
                    class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
                >
                    <div class="w-full p-5 mx-auto md:max-w-4xl">
                        <h2 class="mb-10 text-5xl font-bold text-center">
                            <span class="block lg:mb-2">Join & Get Our</span>
                            <span class="block">Pro Benefits</span>
                        </h2>
                    </div>
                    <div class="w-full p-5 mx-auto md:max-w-4xl">
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div class="mx-auto md:mx-0">
                                <Benefit
                                    v-for="benefit in benefits"
                                    :key="benefit.id"
                                    :svg="benefit.svg"
                                    :title="benefit.title"
                                    :description="benefit.description"
                                ></Benefit>
                            </div>
                            <div>
                                <form
                                    @submit.prevent="auth.handleRegister(form)"
                                    method="post"
                                >
                                    <div class="mb-4">
                                        <InputLabel htmlFor="name"
                                            >Name</InputLabel
                                        >
                                        <TextInput
                                            placeholder="Type your full name"
                                            id="name"
                                            type="text"
                                            name="name"
                                            v-model="form.name"
                                        >
                                        </TextInput>
                                    </div>
                                    <div class="mb-4">
                                        <InputLabel htmlFor="email"
                                            >Email Address</InputLabel
                                        >
                                        <TextInput
                                            placeholder="Type your email"
                                            id="email"
                                            type="email"
                                            name="email"
                                            v-model="form.email"
                                        >
                                        </TextInput>
                                    </div>
                                    <div class="mb-4">
                                        <InputLabel htmlFor="password"
                                            >Password</InputLabel
                                        >
                                        <TextInput
                                            placeholder="Type your password"
                                            id="password"
                                            type="password"
                                            name="password"
                                            v-model="form.password"
                                        ></TextInput>
                                    </div>
                                    <div class="mt-6">
                                        <Button
                                            type="submit"
                                            variant="dark"
                                            size="lg"
                                            className="hidden"
                                            >Sign In</Button
                                        >
                                        <Button
                                            @click="auth.handleRegister(form)"
                                            variant="dark"
                                            size="lg"
                                            className="inline-flex"
                                            >Continue Sign Up</Button
                                        >
                                        <RouterLink :to="{ name: 'login' }">
                                            <Button
                                                variant="light"
                                                size="lg"
                                                className="mt-2 inline-flex"
                                                >Sign In</Button
                                            >
                                        </RouterLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
