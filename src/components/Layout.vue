<template>
    <div>
        <NavbarDesktop v-if="screenWidth > 768" />
        <NavbarMobile v-else />
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import NavbarDesktop from './NavbarDesktop.vue';
import NavbarMobile from "./NavbarMobile.vue";
import { useWindowSize } from "@vueuse/core";

const { width: screenWidth } = useWindowSize();

</script>

<style  scoped>
@media (min-width: 768px) {}
</style>