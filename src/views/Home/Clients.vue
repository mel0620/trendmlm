<template>
	<section class="clients-wrapper">
		<div class="container">
			<div class="clients">
				<div class="clients-content" data-scroll>
					<div class="clients-swiper">
						<div class="swiper-wrapper">
							<div v-lazyload class="swiper-slide" v-for="(item, i) in clients" :key="i">
								<img :data-url="item.image" alt />
							</div>
						</div>
						<div v-lazyload class="slider-next">
							<img class="img-fluid" width="15" :data-url="arrow[0]" alt />
						</div>
						<div v-lazyload class="slider-prev">
							<img class="img-fluid" width="15" :data-url="arrow[1]" alt />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	/* eslint-disable */
	import ScrollOut from "scroll-out"
	import Swiper from "swiper";
	import "../../../node_modules/swiper/css/swiper.min.css";

	export default {
		data() {
			return {
				arrow: [
					require('../../assets/next.svg'),
					require('../../assets/prev.svg')
				],
				clients: [
					{ image: require("../../assets/client-1.png") },
					{ image: require("../../assets/client-2.png") },
					{ image: require("../../assets/client-3.png") },
					{ image: require("../../assets/client-4.png") },
					{ image: require("../../assets/client-5.png") },
					{ image: require("../../assets/client-4.png") },
					{ image: require("../../assets/client-5.png") }
				]
			};
		},
		methods: {
			clientsSwiper() {
				const swiper = new Swiper(".clients-swiper", {
					slidesPerColumn: 1,
					slidesPerView: 5,
					spaceBetween: 20,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false
					},
					navigation: {
						nextEl: ".slider-next",
						prevEl: ".slider-prev"
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
							spaceBetween: 5
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
			}
		},
		mounted() {
			this.clientsSwiper();
			this.so = ScrollOut({
				scope: this.$el,
				once: true
			});
		},
		destroyed() {
			this.so.teardown();
		}
	};
</script>

<style lang="scss">
.clients-wrapper {
	padding: 100px 0px !important;
	background-color: #fff9f8;

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
						box-shadow: 0 0 8px 2px rgba(#000, 0.05);

						img {
							margin: auto;
							width: 120px;
						}

						@include for-size(phone-only) {
							padding: 20px 0px;

							img {
								width: 100px;
							}
						}
					}
				}

				.slider-next,
				.slider-prev {
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
						opacity: 0.5;
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

				@include for-size(tablet-down) {
					.slider-prev {
						left: -10px;
					}

					.slider-next {
						right: -10px;
					}
				}
			}
		}
	}
}
</style>