<template>
    <section class="works-wrapper" id="works">
        <div class="container">
            <div class="works">
                <div class="section-title section-title--variant1" data-scroll>
                    <div class="section-title__bg">
                        WORKS
                    </div>
                    <div class="section-title__sm">
                        Our Recent and Newest Project
                    </div>
                    <div class="line-bottom line-bottom--white"></div>
                </div>
                <div class="works-content" data-scroll>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, i) in works" :key="i">
                                <img class="img-fluid" :src="item.image" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="works-button" data-scroll>
                    <button>View More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import ScrollOut from "scroll-out"
import Swiper from "swiper"
import "../../../node_modules/swiper/css/swiper.min.css"

export default {
    data () {
        return {
            works: [
                { image: require('../../assets/works-1.png') },
                { image: require('../../assets/works-2.png') },
                { image: require('../../assets/works-3.png') },
                { image: require('../../assets/works-4.png') },
                { image: require('../../assets/works-5.png') },
                { image: require('../../assets/works-6.png') },
            ]
        }
    },
    methods: {
        worksSwiper() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                slidesPerGroup: 3,
                // centeredSlides: true,
                // slidesPerColumn: 2,
                spaceBetween: 30,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 2,
                    },
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                        slidesPerGroup: 3,
                    },
                    414: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                        slidesPerGroup: 1,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                        slidesPerGroup: 1,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                        slidesPerGroup: 1,
                    },
                }
            });
        }
    },
    mounted() {
        this.worksSwiper();
        this.so = ScrollOut({
            scope: this.$el,
            once: true
        });
    },
    destroyed() {
        this.so.teardown();
    }
}
</script>

<style lang="scss">
.works-wrapper {
    background-color: #007eac;
    padding: 100px 0px !important;

    .section-title[data-scroll="in"] {
        transform: scale(1);
    }

    .section-title[data-scroll="out"] {
        transform: scale(.8);
    }

    [data-scroll] {
        transition: 1s all ease-in-out;
    }

    [data-scroll="in"] {
        opacity: 1;
        transform: translateY(0);
    }

    [data-scroll="out"] {
        opacity: 0;
        transform: translateY(-10px);
    }

    .works {
        .works-content {
            .swiper-container {
                width: 100%;
                height: 100%;
                position: relative;

                .swiper-wrapper {
                    padding-bottom: 2.5rem;
                }
            }

            .swiper-pagination-bullet {
                opacity: 1;
                background-color: #fff;
            }

            .swiper-pagination-bullet-active {
                background-color: $primary-color;
            }
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
                font-size: 1rem;
                padding: 1rem 0px;
                min-width: 250px;
                border:none;
                border-radius: 2px;
                cursor: pointer;
                box-shadow: 0 5px 10px 5px rgba(#000, .12);

            }

            @include for-size(phone-only) {
                button {
                    width: 100%;
                }
            }
        }
    }
}

</style>
