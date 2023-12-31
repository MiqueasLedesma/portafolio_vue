<template>
    <div>
        <header>
            <ul>
                <li @click="() => scrollToSection('about')">Inicio</li>
                <li @click="() => scrollToSection('projects')">Proyectos</li>
                <li @click="() => scrollToSection('skills')">Habilidades</li>
                <li @click="() => scrollToSection('contact')">Contacto</li>
                <li @click="() => console.log('resume')">
                    <a href="/public/Miqueas_Ledesma.pdf" target="_blank" rel="noopener noreferrer">Resumen</a>
                </li>
                <li @mouseover="handleMouseOver" @mouseout="handleMouseOut">
                    <font-awesome-icon icon="fa-solid fa-sun" :flip="isHover" />
                </li>
            </ul>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isHover = ref(false);

const handleMouseOver = () => {
    isHover.value = true;
}

const handleMouseOut = () => {
    isHover.value = false;
}

const scrollToSection = (str) => {
    document.getElementById(str)?.scrollIntoView({
        behavior: 'smooth'
    })
}

</script>

<style  scoped>
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
    padding: 1em;
    cursor: pointer;
    transition: all ease-in 100ms;
    /* color: #fff; */
    margin: 0;
    font-size: 18px;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
    text-align: center;
    text-transform: uppercase;
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

@media (max-width: 768px) {
    
}
</style>