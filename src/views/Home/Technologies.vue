<template>
    <section class="technologies-wrapper">
        <div class="container">
            <div class="tech">
                <div class="tech__label">
                    <div class="tech__label-icon">
                        <img width="80" class="img-fluid" src="../../assets/tools.svg" alt="">
                    </div>
                    <div class="tech__label-texts">
                        <div>TECHNOLOGIES WE USE</div>
                        <div>The Tools for Innovation</div>
                    </div>
                </div>
                <!-- Swiper -->
                <div class="tech-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, i) in techs" :key="i" :style="`background-image: url('${item.icon}')`">
                            <!-- <div class="tech-icon">
                                <img class="img-fluid" :src="item.icon" alt="">
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";

export default {
    data () {
        return {
            techs: [
                { icon: require('../../assets/tech/laravel1.svg') },
                { icon: require('../../assets/tech/vue.svg') },
                { icon: require('../../assets/tech/angular.svg') },
                { icon: require('../../assets/tech/sass.svg') },
                { icon: require('../../assets/tech/php.svg') },
                { icon: require('../../assets/tech/adobe.svg') },
                { icon: require('../../assets/tech/firebase.svg') },
                { icon: require('../../assets/tech/mysql.svg') },
            ]
        }
    },
    methods: {
        techSwiper() {
            const swiper = new Swiper('.tech-container', {
                slidesPerView: 7,
                spaceBetween: 20,
                breakpoints: {
                    1366: {
                        slidesPerView: 7,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    414: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                }
            });
        },
    },
    mounted() {
        this.techSwiper();
    }
}
</script>

<style lang="scss">
@import "../../scss/style.scss";

.technologies-wrapper {
    padding: 25px 0;

    .tech {
        display: grid;
        grid-template-columns: 40% 60%;
        grid-gap: 1rem;

        &__label {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
            align-items: center;

            &-texts {
                div:first-child {
                    color: $secondary-color;
                    font-family: $font-primary;
                    font-size: 1.2rem;
                    font-weight: 700;
                }

                div:last-child {
                    color: #888888;
                    font-family: $font-secondary;
                    font-size: 0.875rem;
                }
            }
        }

        .tech-container {
            overflow: hidden;
            padding: 1rem;

            .swiper-slide {
                box-shadow: 0 0 8px 2px rgba(#000, .05);
                border-radius: 5px;
                background-size: 50px;
                background-repeat: no-repeat;
                background-position: center;
                min-height: 80px;

                .tech-icon {
                    border-radius: 5px;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    background-color: #fff;
                    text-align: center;

                    img {
                        object-fit: contain;
                        object-position: center;
                    }
                }
            }
        }
    }

    @include for-size(phone-only) {
        .tech {
            grid-template-columns: 1fr;
        }
    }
}
</style>
