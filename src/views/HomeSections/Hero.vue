<template>
    <div class="hero">

    </div>
</template>

<script>
export default {
    data () {
        return {
            bg_image: '../../assets/hero-bg.jpg'
        }
    }
}
</script>

<style lang="scss">
.hero {
    height: 100vh;
    position: relative;
    background-image: url('../../assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(#000, .5);
    }
}
</style>
