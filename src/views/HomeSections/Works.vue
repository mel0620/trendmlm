<template>
    <section class="works-wrapper">
        <div class="container">
            <div class="works">
                <div class="works-header">
                    <div class="works-header__1">
                        WORKS
                    </div>
                    <div class="works-header__2">
                        Our Recent and Newest Project
                    </div>
                    <div class="works-border"></div>
                </div>
            </div>
            <!-- Slider main container -->
            <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    ...
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from "swiper"
import "../../../node_modules/swiper/css/swiper.min.css"

export default {
    data () {
        return {

        }
    },
    methods: {
        worksSwiper() {
            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                // direction: 'vertical',
                loop: true,

                // If we need pagination
                pagination: {
                el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                // scrollbar: {
                // el: '.swiper-scrollbar',
                // },
            })
        }
    },
    mounted() {
        this.worksSwiper();
    }
}
</script>

<style lang="scss">

    .works-wrapper
    {
        background-color: #007eac;
        padding: 100px 0px;
    }

</style>
