<template>
    <section class="testimonials-wrapper">
        <!-- <div class="testimonials" :style="`background-image: url(${bg_image})`" data-rellax-speed="-7"> -->
        <div class="testimonials-bg" :style="`background-image: url(${bg_image})`">
            <div class="container">
                <div class="section-title">
                    <div class="section-title__bg">
                        TESTIMONIALS
                    </div>
                    <div class="section-title__sm">
                        Client Reviews & Comments
                    </div>
                    <div class="line-bottom"></div>
                </div>
                <div class="testimonials">
                    <div class="testimonial-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, ind) in testimonials" :key="ind">
                                <div class="card">
                                    <div class="card__body">
                                        <img class="img-fluid" width="50" src="../../assets/testimonials.svg" alt="">
                                        <p>{{ item.text }}</p>
                                    </div>
                                    <div class="card__footer">
                                        <div class="name">{{ item.clientName }}</div>
                                        <div class="label">Client</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Add Arrows -->
                        <div class="arrow-right">
                            <img class="img-fluid" width="20" src="../../assets/arrow-right.svg" alt="">
                        </div>
                        <div class="arrow-left">
                            <img class="img-fluid" width="20" src="../../assets/arrow-left.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import Rellax from "rellax"
import Swiper from "swiper"
import "../../../node_modules/swiper/css/swiper.min.css";

export default {
    data () {
        return {
            bg_image: require('../../assets/testimonial-bg.jpg'),
            testimonials: [
                {
                    text: 'I can assure that Trend MLM is a skillful company that can provide the best MLM systems together with your demands.',
                    clientName: 'Howard Doe'
                },
                {
                    text: 'Easy to contact and their support team are very responsible in providing help and answers for your queries and consultations.',
                    clientName: 'Analyn Belington'
                },
                {
                    text: 'They value their clients very much and give the best services. They didn’t just provide you and MLM system but they foresee the future of your business.',
                    clientName: 'Jessica Jones'
                },
                {
                    text: 'I have found not only an MLM system provider but good consultants as well. They give the best advice for your company and they displayed professionalism.',
                    clientName: 'Andy James'
                },
                {
                    text: 'I have found not only an MLM system provider but good consultants as well. They give the best advice for your company and they displayed professionalism and hardwork in giving you the best services they can offer.',
                    clientName: 'Rommel Cuneta'
                },
            ]
        }
    },
    methods: {
        myLlax() {
            // const rellax = new Rellax('.testimonials');
        },
    },
    mounted() {
        const swiper = new Swiper('.testimonial-swiper', {
            slidesPerView: 4,
            spaceBetween: 16,
            navigation: {
                nextEl: '.arrow-right',
                prevEl: '.arrow-left',
            },
            breakpoints: {
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 16
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                425: {
                    slidesPerView: 1,
                    spaceBetween: 5
                }
            }
        });
    }
}
</script>

<style lang="scss">
@import "../../scss/style.scss";

.testimonials-wrapper {
    overflow: hidden;

    .testimonials-bg {
        // height: 80vh;
        padding: 80px 0px;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;

        .testimonials {
            position: relative;

            .testimonial-swiper {
                overflow: hidden;

                .swiper-wrapper {
                    .swiper-slide {
                        height: 100%;

                        .card {
                            background-color: #fff;
                            height: 100%;

                            &__body {
                                padding: 1rem;

                                p {
                                    position: relative;
                                    font-family: $font-secondary;
                                    font-size: 0.8125rem;
                                    color: #888888;
                                    line-height: 1.5rem;
                                    margin-top: 10px;
                                    min-height: 150px;

                                    &::before, &::after {
                                        content: '"',
                                    }
                                }
                            }

                            &__footer {
                                padding: 1rem;
                                border-top: 1px solid #fee7e5;
                                background-color: #fff9f8;
                                font-family: $font-primary;

                                .name {
                                    color: $secondary-color;
                                    font-size: 14px;
                                    font-weight: 700;
                                }

                                .label {
                                    color: #888888;
                                    font-size: 13px;
                                    margin-top: 5px;
                                }
                            }
                        }
                    }
                }
            }

            .arrow-right, .arrow-left {
                padding: 8px;
                border-radius: 100%;
                background-color: #fff;
                width: 45px;
                height: 45px;
                position: absolute;
                box-shadow: 0 0 5px 3px rgba(#000, .12);
                display: flex;
                align-items: center;
                justify-content: center;
                outline: none;
                cursor: pointer;

                img {
                    object-fit: contain;
                }

                &.swiper-button-disabled {
                    opacity: .5;
                    cursor: not-allowed;
                }
            }

            .arrow-left {
                left: -25px;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
            }

            .arrow-right {
                right: -25px;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
            }
        }
    }
}
</style>
