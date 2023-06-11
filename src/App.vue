<template>
    <div class="container flex sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <div v-if="mobileDevice" class="mobile-device">
            <MobileNavBar />
            <router-view class="max-sm:w-full" />
        </div>
        <div v-else class="large-device flex w-full max-sm:w-screen">
            <div class="left top-0 w-72">
                <NavBar class="sticky top-0" />
            </div>
            <div class="right w-full">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import MobileNavBar from "@/components/MobileNavBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {
        MobileNavBar,
        NavBar,
    },
    data() {
        return {
            mobileDevice: false,
        };
    },
    methods: {
        handleMediaQuery(event) {
            this.mobileDevice = event.matches;
        },
    },
    mounted() {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        this.mobileDevice = mediaQuery.matches;
        mediaQuery.addEventListener("change", this.handleMediaQuery);
    },
    beforeDestroy() {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        mediaQuery.removeEventListener("change", this.handleMediaQuery);
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
}

@media (min-width: 641px) {
    .mobile-device {
        display: none;
    }
}
</style>
