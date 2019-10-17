<template>
    <section class="get-to-know">
        <div class="request-a-qoute" data-rellax-speed="4">
            <RQoute></RQoute>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import Rellax from "rellax"
import RQoute from "./RQoute";

export default {
    components: {
        RQoute
    },
    data () {
        return {

        }
    },
    mounted() {
        const rellax = new Rellax('.request-a-qoute');
    }
}
</script>

<style lang="scss">
@import "../../scss/style.scss";

.get-to-know {
    height: 100vh;
    background-color: $secondary-color;
}
</style>