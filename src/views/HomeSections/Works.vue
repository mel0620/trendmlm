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
                    <div class="works-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="works-image">
                                    <div class="image-holder">
                                        <img src="../../assets/works-1.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="works-image">
                                    <div class="image-holder">
                                        <img src="../../assets/works-2.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="works-image">
                                    <div class="image-holder">
                                        <img src="../../assets/works-3.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="works-image">
                                    <div class="image-holder">
                                        <img src="../../assets/works-4.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="works-image">
                                    <div class="image-holder">
                                        <img src="../../assets/works-5.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="works-image">
                                    <div class="image-holder">
                                        <img src="../../assets/works-6.png" alt="">
                                    </div>
                                </div>
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

        }
    },
    methods: {
        worksSwiper() {
            var swiper = new Swiper('.works-swiper', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                        768: {
                            slidesPerView: 3,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        375: {
                            slidesPerView: 2,
                },
                320: {
                            slidesPerView: 1,
                        }
                    }
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

        .works-content {

            .works-swiper {
				width: 100%;
				height: 100%;
                overflow: hidden;

				.swiper-wrapper {

					.swiper-slide {

						.works-image {

							position: relative;
							width: 100%;
							background-color: #fff;
                            cursor: pointer;

							.image-holder {
								text-align: center;
								width: 100%;
								overflow: hidden;
								@media screen and (max-width: 425px)
								{
									padding: 10px;
								}
								img {
									width: 100%;
									margin: auto;
									object-fit: cover;
									object-position: center;
									height: 250px;
									@media screen and (max-width: 425px)
									{
										width: 200px;
									}
									@media screen and (max-width: 320px)
									{
										width: 250px;
									}
								}
							}
						}
					}
				}
			}
        }
    }

</style>
