<template>
    <div class="parallax_container">
        <header>
            <ul :style="global.inView ? 'color: #fff;' : 'color: #000;'">
                <li @click="() => scrollToSection('about')">About</li>
                <li @click="() => scrollToSection('projects')">Projects</li>
                <li @click="() => scrollToSection('skills')">Skills</li>
                <li @click="() => scrollToSection('contact')">Contact</li>
                <li @mouseover="handleMouseOver" @mouseout="handleMouseOut">
                    <font-awesome-icon icon="fa-solid fa-sun" :flip="isHover" />
                </li>
            </ul>
        </header>
        <main class="parallax_wrapper">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import { ref, provide } from "vue";

const global = ref({ darkmode: false, lang: false, inView: "" });

provide("global", global);

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
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
}

li {
    padding: 1em;
    cursor: pointer;
    transition: all ease-in 100ms;
}

li:hover {
    transition: all ease-in 100ms;
    scale: 1.1;
}
</style>