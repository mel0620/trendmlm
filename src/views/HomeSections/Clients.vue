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
						    <img src="../../assets/next.svg" alt="">
                        </div>
                        <div class="slider-prev">
                            <img src="../../assets/prev.svg" alt="">
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
                slidesPerView: 5,
                slidesPerColumn: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
<<<<<<< HEAD
                navigation: {
                    nextEl: '.slider-next',
                    prevEl: '.slider-prev',
                }
=======
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
>>>>>>> bd4848ab90cee09f1e37a23eb8fe1ce28b5ff8a8
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
                .clients-swiper {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    position: relative;
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
                    .slider-next
                    {
                        outline: 0;
                        text-align: right;
                        position: absolute;
                        top: 45%;
                        right: 0px;
                        z-index: 1;
                        cursor: pointer;
                        transition:500ms ease;
                        @media screen and (max-width: 768px)
                        {
                            display: block;
                        }
                        img
                        {
                            width: 25px;
                        }
                    }
                    .slider-prev
                    {
                        outline: 0;
                        position: absolute;
                        top: 45%;
                        left: 0px;
                        z-index: 1;
                        cursor: pointer;
                        transition:500ms ease;
                        @media screen and (max-width: 768px)
                        {
                            display: block;
                        }
                        img
                        {
                            width: 25px;
                        }
                    }
                }
            }
        }
    }
</style>
