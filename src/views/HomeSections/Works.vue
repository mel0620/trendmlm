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
                    <div class="line-bottom line-bottom--white"></div>
                </div>
                <div class="works-content">
                    <div class="works-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, i) in works" :key="i">
                                <img class="img-fluid" :src="item.image" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="works-button">
                        <button>View More</button>
                    </div>
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
            works: [
                {
                    image: require('../../assets/works-1.png')
                },
                {
                    image: require('../../assets/works-2.png')
                },
                {
                    image: require('../../assets/works-3.png')
                },
                {
                    image: require('../../assets/works-4.png')
                },
                {
                    image: require('../../assets/works-5.png')
                },
                {
                    image: require('../../assets/works-6.png')
                },
            ]
        }
    },
    methods: {
        worksSwiper() {
            var swiper = new Swiper('.works-swiper', {
                slidesPerView: 3,
                slidesPerColumn: 1,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    },
    mounted() {
        this.worksSwiper();
    }
}
</script>

<style lang="scss">
@import "../../scss/style";

    .works-wrapper {
        background-color: #007eac;
        padding: 100px 0px;
        .works {
            .works-content {
                .works-swiper {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    position: relative;

                    .swiper-wrapper {

                        .swiper-slide {

                        }
                    }
                }

                .swiper-pagination-bullet {
                    opacity: 1;
                    background-color: #fff;
                }

                .swiper-pagination-bullet-active {
                    background-color: $primary-color;
                }

                .works-button {
                    text-align: center;
                    margin-top: 30px;
                    button
                    {
                        outline: none;
                        background-color: $primary-color;
                        color: #fff;
                        font-family: $font-secondary;
                        font-weight: 600;
                        font-size: 15px;
                        padding: 15px 0px;
                        width: 250px;
                        border:none;
                        border-radius: 2px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

</style>
