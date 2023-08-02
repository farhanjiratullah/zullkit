<script setup>
    import InputLabel from "@/components/InputLabel.vue";
    import TextInput from "@/components/TextInput.vue";
    import { RouterLink } from "vue-router";
    import Button from "@/components/Button.vue";
</script>

<template>
    <main>
        <div class="relative overflow-hidden bg-white">
            <div class="mx-auto max-w-7xl">
                <div
                    class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
                >
                    <div class="w-full p-5 mx-auto sm:max-w-md">
                        <h2 class="mb-20 text-5xl font-bold text-center">
                            Welcome Back
                        </h2>
                        <form>
                            <div class="mb-4">
                                <InputLabel htmlFor="email"
                                    >Email Address</InputLabel
                                >
                                <TextInput
                                    placeholder="Type your email"
                                    id="email"
                                    type="email"
                                    name="email"
                                ></TextInput>
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
                                ></TextInput>
                            </div>
                            <div class="mt-6">
                                <Button
                                    type="submit"
                                    variant="dark"
                                    size="lg"
                                    className="inline-flex"
                                    >Sign In</Button
                                >
                                <RouterLink :to="{ name: 'register' }">
                                    <Button
                                        variant="light"
                                        size="lg"
                                        className="mt-2 inline-flex"
                                        >Create New Account</Button
                                    >
                                </RouterLink>
                            </div>
                        </form>
                    </div>
                    <div class="w-full mx-auto mt-20 sm:max-w-2xl">
                        <img
                            src="@/assets/img/brand-logo.svg"
                            alt=""
                            class="w-full px-10 md:px-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
