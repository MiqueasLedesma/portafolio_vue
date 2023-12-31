<template>
    <header>
        <button :style="screenWidth > 768 && 'display: none;'" @click="handleMenu">Menu</button>
        <ul>
            <li @click="() => scrollToSection('about')">Inicio</li>
            <li @click="() => scrollToSection('projects')">Proyectos</li>
            <li @click="() => scrollToSection('skills')">Habilidades</li>
            <li @click="() => scrollToSection('contact')">Contacto</li>
            <li>
                <a href="/public/Miqueas_Ledesma.pdf" target="_blank" rel="noopener noreferrer">Resumen</a>
            </li>
            <li @mouseover="handleMouseOver" @mouseout="handleMouseOut">
                <font-awesome-icon icon="fa-solid fa-sun" :flip="isHover" />
            </li>
        </ul>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core"
const { width: screenWidth } = useWindowSize();
const active = ref(false);

const isHover = ref(false);

const handleMouseOver = () => isHover.value = true;

const handleMouseOut = () => isHover.value = false;

const handleMenu = () => active.value = !active.value;

const scrollToSection = (str) => {
    document.getElementById(str)?.scrollIntoView({
        behavior: 'smooth'
    })
}

</script>

<style scoped>
header {
    align-items: center;
    background-color: transparent;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    padding: 10px 50px;
    position: fixed;
    top: 1em;
    width: 100%;
    z-index: 5;
}

ul {
    backdrop-filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
}

li {
    cursor: pointer;
    font-size: 18px;
    margin: 0;
    padding: 1em;
    text-align: center;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
    text-transform: uppercase;
    transition: all ease-in 100ms;
}

li:hover {
    transition: all ease-in 100ms;
    scale: 1.1;
}

a {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
    color: inherit;
}
</style>