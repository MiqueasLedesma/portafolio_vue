<template>
    <div class="parallax_container">
        <div class="parallax_wrapper">
            <div class="parallax_section">
                <div class="parallax_bg" style="background-image: url(public/wave.svg);"></div>
                <h2 v-motion-roll-visible-top>CSS3 <br> Parallax Effect</h2>
            </div>
        </div>

    </div>
</template>

<script setup></script>

<style  scoped>
.parallax_container {
    height: 100vh;
    overflow: hidden;
}

.parallax_wrapper {
    height: 100%;
    overflow-x: hidden;
    perspective: 1px;
}

.parallax_section {
    display: grid;
    min-height: 100vh;
    padding: 50px;
    place-content: center;
    position: relative;
    width: 100vw;
    overflow: hidden;
    transform-style: preserve-3d;
}

.parallax_bg {
    background-position: center center;
    background-size: cover;
    bottom: 0;
    left: 0;
    min-height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    transform: translate3d(0, 0, -1px) scale(2);

}

.parallax_section h2 {
    color: #fff;
    margin: 0;
    font-size: 120px;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
    text-align: center;
    text-transform: uppercase;
}
</style>