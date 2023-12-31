<template>
    <section id="about">
        <h2 v-motion-pop-visible>
            Bienvenido
        </h2>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import simpleParallax from 'simple-parallax-js';


const parallax_bg = ref(null);

onMounted(() => {
    const img_element = parallax_bg.value;
    new simpleParallax(img_element, {
        scale: 2
    })
})



</script>

<style scoped></style>