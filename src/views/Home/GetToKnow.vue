<template>
<section class="get-to-know" id="about">
	<div class="request-a-qoute" data-rellax-speed="4">
		<div class="container">
			<RQoute></RQoute>
		</div>
	</div>
	<div class="container">
		<div class="section-title section-title--variant2" data-scroll>
			<div class="section-title__bg">
				TREND MLM
			</div>
			<div class="section-title__sm">
				Get to know us
			</div>
			<div class="line-bottom line-bottom--white"></div>
		</div>

		<div class="get-to-know-content">
			<div v-lazyload class="illustration" data-scroll>
				<img class="img-fluid" :data-url="illustration" alt="">
			</div>
			<div class="texts" data-scroll>
				<label for="">“We drifts your business towards success.”</label>
				<p>Trend MLM is one of the leading Multi-level Marketing solutions software in the Philippines. We provide automated sales, review, easy and faster tracking of downlines, inventory, invoices and others. Overall, our MLM software maintains effective monitoring from top management down to the lowest member.</p>
			</div>
		</div>
	</div>

	<!-- ANIMATING OBEJECTS -->
	<div>
		<img
			:src="objects[0]" alt=""
			class="square-dots lax"
			data-lax-preset="rightToLeft spin"
		>
		<img
			:src="objects[1]"
			class="bubble-warp-bg lax"
			data-rellax-speed="1"
			data-lax-preset="spin"
		>
		<img
			:src="objects[2]"
			class="stripe-circ"
			style="transform: rotate(-45deg)"
			data-rellax-speed="-3"
		>
		<img
			:src="objects[3]"
			class="circle-outline1 lax"
			data-lax-preset="leftToRight"
		>
		<img
			:src="objects[3]"
			class="circle-outline2 lax"
			data-lax-preset="linger"
			data-rellax-speed="5"
		>
	</div>
</section>
</template>

<script>
/* eslint-disable */
import ScrollOut from "scroll-out"
import Rellax from "rellax"
import lax from 'lax.js'
const RQoute = () => import(/*webpackChunkname: "rqoute"*/'./RQoute');

export default {
	name: 'about',
	components: {
		RQoute
	},
	data () {
		return {
			illustration: require('../../assets/devices.png'),
			objects: [
				require('../../assets/animated-objects/square-dots.svg'),
				require('../../assets/animated-objects/bubble-warp.svg'),
				require('../../assets/animated-objects/stripe-circ.svg'),
				require('../../assets/animated-objects/circle-outline.svg'),
			]
		}
	},
	mounted() {
		const rellax = new Rellax('.request-a-qoute');
		const bubble = new Rellax('.bubble-warp-bg');
		const circleOutline2 = new Rellax('.circle-outline2');
		const stripeCircle = new Rellax('.stripe-circ');

		this.so = ScrollOut({
            scope: this.$el,
			once: true
        });

		// OLD CODE;
		// window.onload = function() {
		// 	lax.setup() // init
		// 	const updateLax = () => {
		// 		lax.update(window.scrollY)
		// 		window.requestAnimationFrame(updateLax)
		// 	}
		// 	window.requestAnimationFrame(updateLax)
		// }

		lax.setup({
			breakpoints: { small: 0, large: 992 }
		})

		const updateLax = () => {
			lax.update(window.scrollY)
			window.requestAnimationFrame(updateLax)
		}

		window.requestAnimationFrame(updateLax)
	},
	destroyed() {
        this.so.teardown();
    },
}
</script>

<style lang="scss">
.get-to-know {
	padding: 100px 0 !important;
	background-color: $secondary-color;
	position: relative;

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
    }

    [data-scroll="out"] {
        opacity: 0;
    }

	.request-a-qoute {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}

	.get-to-know-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		grid-gap: 2rem;
		position: relative;
		z-index: 11;

		@include for-size(phone-only) {
			grid-template-columns: 1fr;
		}

		.texts {
			font-family: $font-secondary;
			font-size: 0.875rem;
			color: #fff;

			label {
				font-weight: 900;
			}

			p {
				margin-top: 1rem;
				line-height: 2rem;
			}
		}
	}

	@include for-size(phone-only) {
		overflow: hidden;
		.request-a-qoute {
			display: none;
		}
	}

	// OBJECTS
	.square-dots {
		position: absolute;
		top: 30px;
		right: 0;
		transform: rotate(45deg);
		opacity: .4;
		z-index: 1;
		width: 6.5%;
	}

	.bubble-warp-bg {
		position: absolute;
		bottom: -20px;
		left: -10px;
		opacity: .4;
		z-index: 1;
		width: 15%;
	}

	.bubble-warp-sm {
		position: absolute;
		bottom: 100px;
		right: 30%;
		opacity: .4;
		z-index: 1;
		width: 2%;
		transform: rotate(25deg);
	}

	.stripe-circ {
		position: absolute;
		bottom: 250px;
		right: 0;
		opacity: .2;
		z-index: 1;
		// transform: rotate(-45deg);
		width: 14%;
	}

	.circle-outline1 {
		position: absolute;
		top: 80px;
		left: 10px;
		opacity: .2;
		z-index: 1;
		filter: brightness(0) invert(1);
		width: 8%;
	}

	.circle-outline2 {
		position: absolute;
		bottom: 5%;
		left: 10%;
		opacity: .2;
		z-index: 1;
		filter: brightness(0) invert(1);
		width: 7%;
	}
}
</style>
