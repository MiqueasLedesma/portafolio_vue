<template>
    <div style="background-color: #d4ecf7; animation-duration: 4s;" class="cover" />
    <div style="background-color: #859ffb; animation-duration: 3.2s;" class="cover" />
    <div style="background-color: #495f9c; animation-duration: 2.4s;" class="cover" />
    <div style="background-color: #182642; animation-duration: 1.5s;" class="cover" />
    <div style="background-color: #140f07; animation-duration: 1s;" class="cover" />
</template>

<style>
.cover {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    animation-name: slideOut;
    height: 100vh;
    position: fixed;
    width: 0;
    z-index: 100;
}

.cover>div {
    height: 100vh;
}

@keyframes slideOut {
    from {
        transform: translateX(0vw);
        width: 100vw;
    }

    to {
        transform: translateX(-100vw);
        width: 0;
    }
}
</style>