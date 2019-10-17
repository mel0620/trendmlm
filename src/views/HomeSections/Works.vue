<template>
    <section class="works-wrapper">
        <div class="container">
            <div class="works">
                <div class="section-title section-title--variant1">
                    <div class="section-title__bg">
                        WORKS
                    </div>
                    <div class="section-title__sm">
                        Our Recent and Newest Project
                    </div>
                    <div class="section-title__border"></div>
                </div>
                <div class="works-content">

                </div>
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
@import "../../scss/style";

    .works-wrapper
    {
        background-color: #007eac;
        padding: 100px 0px;
        .works-header {
            margin-bottom: 50px;
            text-align: center;
            line-height: 2rem;
            .works-header__1 {
                font-family: $font-primary;
                font-size: 18px;
                font-weight: 700;
                color: $primary-color;
            }
            .works-header__2 {
                font-family: $font-primary;
                font-size: 13px;
                font-weight: 400;
                color: #fff;
            }
            .works-border {
                background-color: $primary-color;
                width: 30px;
                height: 3px;
                position: relative;
                margin: 15px auto;
                &:before {
                    content: '';
                    background-color: #fff;
                    width: 25px;
                    height: 1px;
                    position: absolute;
                    left: -25px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:after {
                    content: '';
                    background-color: #fff;
                    width: 25px;
                    height: 1px;
                    position: absolute;
                    left: 30px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }

</style>
