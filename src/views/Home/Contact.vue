<template>
    <section class="contact-wrapper" id="contact">
        <div class="container">
            <div class="contact">
                <div class="section-title section-title--variant1" data-scroll>
                    <div class="section-title__bg">
                        REACH US
                    </div>
                    <div class="section-title__sm">
                        Feel free to Ask
                    </div>
                    <div class="line-bottom line-bottom--white"></div>
                </div>

                <div class="contact-content" data-scroll>
                    <input type="text" placeholder="Full Name Here*">
                    <input type="text" placeholder="Last Name Here*">
                    <input type="text" placeholder="Email Address Here*">
                    <input class="contact-content__message" type="text" placeholder="Message Here*">
                    <button>Ask Now</button>
                </div>
            </div>
        </div>

        <!-- ANIMATING OBJECTS -->
        <img
            src="../../assets/animated-objects/stripe-circ.svg" alt=""
            class="stripe-circle lax"
            data-lax-preset="linger-10"
            style="transform: rotate(45deg)"
	    >
        <img
            src="../../assets/animated-objects/multiple-circle.svg" alt=""
            class="multiple-circ lax"
            data-lax-preset="lazy"
	    >
        <img
            src="../../assets/animated-objects/same-circle-sizes.svg" alt=""
            class="same-circ lax"
            data-lax-preset="linger"
	    >
        <img
            src="../../assets/animated-objects/circle-outline.svg"
            class="circle-outline2 lax"
            data-lax-preset="linger"
	    >
        <img
            src="../../assets/animated-objects/different-circle-sizes.svg"
            class="different-circ lax"
            data-lax-preset="linger"
	    >
        <img
            src="../../assets/animated-objects/single-circle.svg"
            class="single-circ lax"
            data-lax-preset="linger"
	    >
    </section>
</template>

<script>
import ScrollOut from "scroll-out"
export default {
	data () {
		return {

		}
	},
	mounted() {
        this.so = ScrollOut({
            scope: this.$el
        });
	},
    destroyed() {
        this.so.teardown();
    }
}

</script>

<style lang="scss">
@import "../../scss/style.scss";

.contact-wrapper {
    background-color: $secondary-color;
    padding: 100px 0px !important;
    position: relative;
    overflow: hidden;

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
        transform: translateY(0);
    }

    [data-scroll="out"] {
        opacity: 0;
        transform: translateY(-10px);
    }

    .contact {
        .contact-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;

            input {
                color: #fff;
                background-color: $secondary-color;
                border: solid 1px #fff;
                width: 100%;
                padding: 15px;
                border-radius: 2px;
                font-family: $font-secondary;
                font-weight: 300;
                outline: none;
                transition: .3s all ease-in-out;

                &:focus {
                    box-shadow: 0 0 0 1px #fff;
                }
            }

            .contact-content__message
            {
                grid-column: 1 / span 2;
            }

            ::placeholder {
                color: #fff;
            }

            button {
                outline: none;
                background-color: #fff;
                color: $secondary-color;
                font-family: $font-secondary;
                font-weight: 600;
                font-size: 1rem;
                padding: 1rem 0px;
                min-width: 250px;
                border:none;
                border-radius: 2px;
                cursor: pointer;
            }

            @include for-size(phone-only) {
                grid-template-columns: 1fr;

                .contact-content__message {
                    grid-column: 1 / span 1;
                }

                button {
                    width: 100%;
                }
            }
        }
    }

    .stripe-circle {
		position: absolute;
        top: -80px;
        left: 0px;
        opacity: .2;
        z-index: 1;
        width: 14%;
	}
    .multiple-circ {
		position: absolute;
        top: -20px;
        left: 200px;
        opacity: .2;
        z-index: 1;
        width: 6%;
	}
    .same-circ {
		position: absolute;
        bottom: 68px;
        left: 8px;
        opacity: .2;
        z-index: 1;
        width: 10%;
	}
    .circle-outline2{
        position: absolute;
        bottom: 30%;
        right: 40%;
        opacity: .2;
        z-index: 1;
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
        width: 4%;
    }
    .different-circ
    {
        position: absolute;
        top: -125px;
        right: -38px;
        opacity: .2;
        z-index: 1;
        width: 12%;
    }
    .single-circ
    {
        position: absolute;
        bottom: 25%;
        right: 3%;
        opacity: .2;
        z-index: 1;
        width: 4%;
    }
}
</style>
