<template>
    <div class="hero-container" id="home">
        <!-- <div class="hero" :style="`background-image: url(${bg_image})`" data-rellax-speed="-7"> -->
        <div class="hero">
            <video class="video" autoplay muted loop data-rellax-speed="-7">
                <source :src="video" type="video/mp4">  
            </video>
            <div class="bg-overlay"></div>
            <div class="container">
                <div class="hero-content">
                    <div class="hero-content__text">
                        <div class="hero-content__text-1">
                        Seamless Network Marketing App
                        </div>
                        <div class="hero-content__text-2">
                            We can help you make it to the top. Let’s all grow together.
                        </div>
                    </div>
                    <div class="line-bottom animate line-bottom--pure-white"></div>
                    <div class="hero-content__button">
                        <button class="btn">
                            <div class="btn-text">INQUIRE NOW</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { TimelineLite } from "gsap/TweenMax"
import Rellax from "rellax"

export default {
    data () {
        return {
            video: require('../../assets/bg-video.mp4'),
            bg_image: require('../../assets/hero-bg.jpg'),
        }
    },
    methods: {
        myLlax() {
            const rellax = new Rellax('.video');
        }
    },
    mounted() {
        this.myLlax();

        const timeline = new TimelineLite()

        timeline.to(".hero-content__text-1", 2, {y: 0, opacity: 1, ease: Power4.easeOut})
                .to(".hero-content__text-2", 1, {y: 0, opacity: 1}, "-=1")
                .from(".animate", 2, {width: 0, ease: Elastic.easeOut.config(1, 0.3)}, "-=.2")
                .to(".btn", .2, {opacity: 1}, "-=1")
                .to(".hero-content", .2, {scale: 1.1})
                .to(".hero-content", .2, {scale: 1})
    }
}
</script>

<style lang="scss">
.hero-container {
    overflow: hidden;
    position: relative;
    z-index: 10;

    .hero {
        height: 100vh;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        .video {
            position: absolute;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            z-index: 1;
        }

        .bg-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background: linear-gradient(45deg, rgba($secondary-color, .8), rgba($primary-color, .5));
            z-index: 2;
        }

        .hero-content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: auto;
            height: 100vh;
            position: relative;
            z-index: 5;

            .hero-content__text {
                color: #fff;
                font-family: $font-primary;
                text-align: center;
                line-height: 3.0rem;

                .hero-content__text-1 {
                    font-weight: 700;
                    font-size: 30px;
                    transform: translateY(-50px);
                    opacity: 0;
                }

                .hero-content__text-2 {
                    font-weight: 300;
                    font-size: 1rem;
                    line-height: 2rem;
                    transform: translateY(50px);
                    opacity: 0;
                }
            }

            .hero-content__border {
                background-color: #fff;
                width: 30px;
                height: 3px;
                position: relative;
                
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

            .hero-content__button
            {
                margin-top: 20px;
                
                .btn
                {
                    outline: none;
                    color: #fff;
                    background-color: $primary-color;
                    font-family: 'Montserrat';
                    font-size: 15px;
                    font-weight: 600;
                    border: solid 1px $primary-color;
                    padding: 15px 0px;
                    width: 200px;
                    border-radius: 2px;
                    cursor: pointer;
                    transition: .3s all ease-in-out;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    opacity: 0;

                    &:hover {
                        letter-spacing: 1px;
                        background-color: transparent;
                        border-color: #fff;
                    }
                }
            }
        }
    }
}
</style>
