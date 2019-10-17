<template>
    <div class="hero-container">
        <div class="hero" :style="`background-image: url(${bg_image})`" data-rellax-speed="-7">
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
                    <div class="line-bottom line-bottom--pure-white"></div>
                    <div class="hero-content__button">
                        <button>INQUIRE NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rellax from "rellax"

export default {
    data () {
        return {
            bg_image: require('../../assets/hero-bg.jpg'),
        }
    },
    methods: {
        myLlax() {
            const rellax = new Rellax('.hero');
        }
    },
    mounted() {
        this.myLlax();
    }
}
</script>

<style lang="scss">
@import "../../scss/style.scss";

.hero-container {
    overflow: hidden;
    .hero {
        height: 100vh;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        .hero-content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: auto;
            height: 100vh;

            .hero-content__text {
                color: #fff;
                font-family: $font-primary;
                text-align: center;
                // line-height: 4.0rem;

                .hero-content__text-1 {
                    font-weight: 700;
                    font-size: 30px;
                }
                .hero-content__text-2 {
                    font-weight: 300;
                    font-size: 15px;
                }
            }

            .hero-content__border {
                background-color: #fff;
                width: 30px;
                height: 3px;
                position: relative;
                margin: 20px 0px;
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
                button
                {
                    outline: none;
                    color: #fff;
                    background-color: transparent;
                    font-family: 'Montserrat';
                    font-size: 15px;
                    font-weight: 600;
                    border: solid 1px #fff;
                    padding: 15px 0px;
                    width: 200px;
                    border-radius: 2px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
