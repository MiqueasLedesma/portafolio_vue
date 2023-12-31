<template>
    <header>
        <span @click="handleMenu">
            <font-awesome-icon icon="fa-solid fa-bars" style="color: #000000;" size="xl" />
        </span>
    </header>
    <ul :class="active && 'active'">
        <li v-motion-pop-visible @click="() => scrollToSection('about')">Inicio</li>
        <li v-motion-pop-visible @click="() => scrollToSection('projects')">Proyectos</li>
        <li v-motion-pop-visible @click="() => scrollToSection('skills')">Habilidades</li>
        <li v-motion-pop-visible @click="() => scrollToSection('contact')">Contacto</li>
        <li v-motion-pop-visible>
            <a href="/public/Miqueas_Ledesma.pdf" target="_blank" rel="noopener noreferrer">Resumen</a>
        </li>
        <li v-motion-pop-visible>
            <font-awesome-icon icon="fa-solid fa-sun" />
        </li>
    </ul>
</template>

<script setup>

import { ref } from "vue";
const active = ref(false);

const handleMenu = () => active.value = !active.value;

const scrollToSection = (str) => {
    document.getElementById(str)?.scrollIntoView({
        behavior: 'smooth'
    })
    active.value = !active.value
}
</script>

<style scoped>
header {
    box-sizing: border-box;
    align-items: center;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    height: 50px;
    justify-content: flex-end;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 50;
}

ul {
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.5);
    height: calc(100vh - 50px);
    display: grid;
    gap: 2rem;
    list-style: none;
    place-content: center;
    position: fixed;
    text-align: center;
    top: 50px;
    transition: ease-in 300ms;
    width: 100vw;
    z-index: 45;
    transform: translateY(-100vh);
}

li {
    font-weight: bold;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
    text-transform: uppercase;
}

.active {
    transform: translateY(0vw);
}

a {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
    color: inherit;
}
</style>