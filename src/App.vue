<script setup>
import { ref, provide } from "vue";
import Layout from './components/Layout.vue';
import Welcome from './pages/Welcome.vue';
import Skills from './pages/Skills.vue';
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue';
import Opening from './components/Opening.vue';


const global = ref({ darkmode: false, lang: false });

provide("global", global);

</script>

<template>
  <Layout>
    <Opening />
    <Welcome />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
</template>

<style scoped ></style>
