<template>
    <section class="clients-wrapper">
        <div class="container">
            <div class="clients">
                <div class="clients-content">
                    <div class="clients-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, i) in clients" :key="i">
                                <img :src="item.image" alt="">
                            </div>
                        </div>
                        <div class="slider-next">
                            <img class="img-fluid" width="15" src="../../assets/next.svg" alt="">
                        </div>
                        <div class="slider-prev">
                            <img class="img-fluid" width="15" src="../../assets/prev.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import Swiper from "swiper"
import "../../../node_modules/swiper/css/swiper.min.css"

export default {
    data () {
        return {
            clients: [
                { image: require('../../assets/client-1.png') },
                { image: require('../../assets/client-2.png') },
                { image: require('../../assets/client-3.png') },
                { image: require('../../assets/client-4.png') },
                { image: require('../../assets/client-5.png') },
                { image: require('../../assets/client-4.png') },
                { image: require('../../assets/client-5.png') },
            ]
        }
    },
    methods: {
        clientsSwiper() {
            const swiper = new Swiper('.clients-swiper', {
                slidesPerColumn: 1,
                slidesPerView: 5,
                spaceBetween: 20,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev',
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            });
        }
    },
    mounted() {
        this.clientsSwiper();
    }
}
</script>

<style lang="scss">
@import "../../scss/style";
.clients-wrapper {
    padding: 100px 0px;
    background-color: #fff9f8;

    .clients {
        .clients-content {
            position: relative;
            .clients-swiper {
                width: 100%;
                height: 100%;
                overflow: hidden;
                padding: 10px 0px;

                .swiper-wrapper {
                    .swiper-slide {
                        background-color: #fff;
                        border-radius: 2px;
                        border: solid 1px #ebeaea;
                        padding: 30px 0px;
                        text-align: center;
                        box-shadow: 0 0 8px 2px rgba(#000, .05);
                        img
                        {
                            margin: auto;
                            width: 120px;
                        }
                    }
                }

                .slider-next, .slider-prev {
                    padding: 8px;
                    border-radius: 100%;
                    // background-color: #fff;
                    width: 45px;
                    height: 45px;
                    position: absolute;
                    // box-shadow: 0 0 5px 3px rgba(#000, .12);
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

                .slider-prev {
                    left: -50px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                }

                .slider-next {
                    right: -50px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                }
            }
        }
    }
}

@include for-size(phone-only) {
    .clients-wrapper {
        .swiper-slide {
            padding: 20px 0px;

            img {
                width: 100px !important;
            }
        }
    }
}

</style>
