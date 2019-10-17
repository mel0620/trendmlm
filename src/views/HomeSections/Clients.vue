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
            clients: [
                {
                    image: require('../../assets/client-1.png')
                },
                {
                    image: require('../../assets/client-2.png')
                },
                {
                    image: require('../../assets/client-3.png')
                },
                {
                    image: require('../../assets/client-4.png')
                },
                {
                    image: require('../../assets/client-5.png')
                },
            ]
        }
    },
    methods: {
        clientsSwiper() {
            var swiper = new Swiper('.clients-swiper', {
                slidesPerView: 5,
                slidesPerColumn: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
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
                    .swiper-wrapper {
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 2px;
                            border: solid 1px #ebeaea;
                            padding: 30px 0px;
                            text-align: center;
                            img
                            {
                                margin: auto;
                                width: 120px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
