<template>
    <div class="page-layout">
        <header class="header header--sticky" data-mob="header">
            <div class="container">
                <nav class="header__nav" data-mob="navigation">
                    <a class="header__nav-brand" href="javascript:">
                        <img class="img-fluid logo" width="200" src="@/assets/brand-colored.png" alt="trendmlm logo">
                    </a>
                    <!-- <div id="navlink" class="header__nav-links" data-mob="hide"> -->
                    <div id="navlink" class="header__nav-links">
                        <a href="#home" title="Home" class="header__nav-link">Home</a>
                        <a href="#about" title="About" class="header__nav-link">About</a>
                        <a href="#services" title="Services" class="header__nav-link">Services</a>
                        <a href="#works" title="Works" class="header__nav-link">Works</a>
                        <a href="#contact" title="Contact" class="header__nav-link">Contact</a>
                    </div>
                    <div class="header__nav-contact" data-mob="hide">
                        <div class="header__nav-contact-icon">
                            <img width="25" class="img-fluid" src="@/assets/call-center.svg" alt="">
                        </div>
                        <div class="header__nav-contact-text">
                            <div>Make a call & let's talk.</div>
                            <div>000 - 000</div>
                        </div>
                    </div>
                    <span data-mob="nav-btn" class="burger-cta" id="burger-cta">
                        <span class="line-1 nav-line"></span>
                        <span class="line-2 nav-line"></span>
                        <span class="line-3 nav-line"></span>
                        <!-- <a href="javascript:" class="mdi mdi-text mdi-flip-h"></a> -->
                    </span>
                </nav>
            </div>
        </header>
        <router-view></router-view>
        <footer class="footer">
            <div class="footer__top">
                <div class="container">
                    <div class="info-wrapper">
                        <div class="info-item" v-for="(item, i) in infos" :key="i">
                            <div class="info-item__icon">
                                <img width="50" class="img-fluid" :src="item.icon" alt="">
                            </div>
                            <div class="info-item__text">
                                <div class="info-item__name">{{ item.name }}</div>
                                <div class="info-item__details">{{ item.details }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-nav-wrapper">
                        <div class="bottom-nav">
                            <div class="bottom-nav__brand">
                                <img width="250" class="img-fluid" src="../assets/brand-bottom.png" alt="">
                            </div>
                            <div class="bottom-nav__links">
                                <ul id="navlink">
                                    <li><a href="#home">HOME</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#works">works</a></li>
                                    <li><a href="#contact">contact</a></li>
                                </ul>
                            </div>
                            <div class="bottom-nav__social">
                                <a href="javascript:">
                                    <span class="mdi mdi-facebook-box"></span>
                                </a>
                                <a href="javascript:">
                                    <span class="mdi mdi-twitter-box"></span>
                                </a>
                                <a href="javascript:">
                                    <span class="mdi mdi-google-plus-box"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="container">
                    <div class="website-info">
                        <div>Trend &copy; 2019 All Rights reserved.</div>
                        <div>Powered By: DIGIMA WEB SOLUTIONS, Inc.</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import ScrollOut from "scroll-out"
import VanillaScrollspy from 'vanillajs-scrollspy'

export default {
    data () {
        return {
            infos: [
                {
                    icon: require('../assets/contact-1.svg'),
                    name: 'Contact us',
                    details: 'Details Coming Soon!'
                },
                {
                    icon: require('../assets/contact-2.svg'),
                    name: 'Email us',
                    details: 'Details Coming Soon!'
                },
                {
                    icon: require('../assets/contact-3.svg'),
                    name: 'located at',
                    details: 'Details Coming Soon!'
                },
            ]
        }
    },
    methods: {
        myScrollspy() {
            const navbar = document.querySelector('#navlink');
            const scrollspy = new VanillaScrollspy(navbar, 1000, 'easeInOutQuint');
            scrollspy.init();
        },
        onNavmobile() {
            const burger = document.querySelector('#burger-cta');
            const tl = new TimelineLite({paused: true, reversed: true});

            tl.to('.line-2', .2, { opacity: 0, })
                .to('.line-3', .2, { width: 25 })
                .to('.line-2', .2, { height: 0 })
                .to('.line-1', .2, {
                    rotation: -45,
                    y: 3
                }).to('.line-3', .2, {
                    rotation: 45,
                    y: -3
                }, "-=.2")
                .to('.nav-line', .3, { backgroundColor: "#ff6e60" }, "-=.2")
                .to('.header', .2, { backgroundColor: '#fff' }, "-=.2")
                .to('.logo', .2, { filter: 'brightness(1)' })
                .to('.header', .2, { minHeight: '100%' })

            burger.addEventListener("click", () => {
				this.toggleTween(tl)
			})
        },
        toggleTween(tween) {
			tween.reversed() ? tween.play() : tween.reverse();
		},
    },
    mounted() {
        this.onNavmobile();
        this.myScrollspy();

        this.so = ScrollOut({
            targets: ".header--sticky",
            offset: 300,
            scope: this.$el
        });
    },
    destroyed() {
        this.so.teardown();
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.page-layout {
    position: relative;

    .intro {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 9999;

        .intro-welcome {
            font-family: $font-primary;
            font-size: 3rem;
            text-align: center;
            color: $primary-color;
            position: relative;
            z-index: 9999;
        }
    }

    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        z-index: 99;
        transition: .3s all ease-in-out;

        &__nav {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            justify-content: center;

            &-brand {
                img {
                    filter: brightness(0) invert(1);
                }
            }

            &-links {
                padding: 2rem 1rem;
                justify-self: center;

                .header__nav-link {
                    text-decoration: none;
                    color: #dadada;
                    padding: 2rem 1.5rem;
                    font-family: $font-secondary;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    position: relative;
                    box-sizing: border-box;
                    transition: .3s all ease-in-out;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -1px;
                        background-color: #fff;
                        height: 2px;
                        transition: .3s all ease-in-out;
                        margin: auto;
                        width: 0;
                    }

                    &:hover {
                        color: #fff;
                        &::after {
                            width: 100%;
                        }
                    }

                    &.active {
                        color: #fff;
                        &::after {
                            width: 100%;
                        }
                    }
                }
            }

            &-contact {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 14px;
                align-items: center;

                &-icon {
                    img {
                        filter: invert(1);
                    }
                }

                &-text {
                    div {
                        color: #fff;
                        font-family: $font-secondary;
                        font-size: 0.875rem;
                        text-transform: uppercase;
                    }

                    div:last-child {
                        font-weight: 900;
                    }
                }
            }

            [data-mob="nav-btn"] {
                display: none;
                border-radius: 100%;
                grid-column-start: 3;

                [class^="line-"] {
                    height: 3px;
                    background-color: #fff;
                    border-radius: 1rem;
                    margin: 3px 0;
                    display: block;
                    margin-left: auto;
                }

                .line-1 { width: 25px; }
                .line-2 { width: 22px; }
                .line-3 { width: 15px; }

                a {
                    border-radius: 100%;
                    color: #fff;
                    font-size: 1.5rem;
                    outline: none;
                }
            }
        }
    }

    .header--sticky[data-scroll="in"] {
        position: fixed;
        background-color: #fff !important;
        border-bottom: 1px solid rgba(#000, .12);

        .header__nav {
            .header__nav-brand {
                img {
                    filter: brightness(100%) !important;
                }
            }

            .header__nav-links {
                padding: 1.5rem;
                .header__nav-link {
                    color: #1c1c1c;
                    padding: 1.5rem;

                    &:hover {
                        color: $secondary-color;
                        &::after {
                            background-color: $secondary-color;
                        }
                    }

                    &.active {
                        color: $primary-color;
                        &::after {
                            background-color: $primary-color;
                        }
                    }
                }
            }

            .header__nav-contact {
                &-icon {
                    img {
                        filter: invert(0);
                    }
                }
                &-text {
                    > div {
                        font-weight: 600;
                        color: #1c1c1c;
                    }

                    div:last-child {
                        font-weight: 900;
                    }
                }
            }
        }
    }

    @include for-size(tablet-down) {
        .header {
            --header-bg: transparent;
            background-color: var(--header-bg);
            overflow: hidden;
            height: 54px;

            .header__nav {
                padding: 10px 0;

                &-links {
                    .header__nav-link {
                        color: #1c1c1c;

                        &:hover {
                            color: $secondary-color;
                            &::after {
                                background-color: $secondary-color;
                            }
                        }

                        &.active {
                            color: $primary-color;
                            &::after {
                                background-color: $primary-color;
                            }
                        }
                    }
                }
            }

            [data-mob="navigation"] {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;

                .header__nav {
                    overflow: hidden;

                    &-brand {
                        grid-column-start: 1;

                        img {
                            object-fit: cover;
                            object-position: 0 100%;
                            width: 40px;
                            height: 30px;
                        }
                    }

                    &-links {
                        display: grid;
                        grid-row-start: 2;
                        grid-column: span 3;
                        text-align: center;
                        padding: 5px !important;
                        overflow: hidden;
                        width: 100%;
                        
                        .header__nav-link {
                            padding: 1rem !important;
                        }
                    }

                    .burger-cta {
                        grid-column-start: 3;

                        .nav-line {
                            background-color: #fff !important;
                        }
                    }
                }
            }

            [data-mob="hide"] {
                display: none;
            }

            [data-mob="nav-btn"] {
                display: block;
            }
        }

        .header--sticky[data-scroll="in"] {
            overflow: hidden;
    
            [data-mob="nav-btn"] {
                [class^="line-"] {
                    background-color: $primary-color !important;
                }
                a {
                    color: $primary-color;
                }
            }
        }
    }

    .footer {
        &__top {
            background-color: $secondary-color;

           .info-wrapper {
                border-bottom: 1px solid rgba(#fff, .12);
                padding: 50px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;

                .info-item {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 1rem;
                    padding: 0 2rem;

                    &__text {
                        color: #fff;

                        .info-item__name {
                            font-family: $font-primary;
                            text-transform: uppercase;
                            font-weight: 600;
                        }

                        .info-item__details {
                            font-family: $font-secondary;
                            font-size: 13px;
                            opacity: .6;
                            margin-top: 10px;
                        }
                    }
                }
            }

            .bottom-nav-wrapper {
                .bottom-nav {
                    padding: 50px 0;
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    grid-gap: 1rem;
                    align-items: center;

                    &__links {
                        justify-self: center;

                        ul {
                            list-style-type: none;
                            display: flex;
                            align-items: center;

                            li {
                                padding: 0 1rem;

                                a {
                                    text-decoration: none;
                                    color: #fff;
                                    font-family: $font-secondary;
                                    text-transform: uppercase;
                                    font-size: 0.8125rem;
                                }
                            }
                        }
                    }

                    &__social {
                        display: grid;
                        grid-template-columns: auto auto auto;
                        grid-gap: 5px;

                        a {
                            color: #fff;
                            text-decoration: none;
                            font-size: 2rem;
                        }
                    }
                }
            }

            @include for-size(tablet-down) { 
                .info-wrapper {
                    justify-content: center;

                    .info-item {
                        margin: 1rem auto;
                        text-align: center;
                    }
                }

                .bottom-nav-wrapper {
                    .bottom-nav {
                        text-align: center;
                        grid-template-columns: 1fr;
                        justify-content: center;

                        &__links {
                            display: none;
                        }

                        &__social {
                            display: flex;
                            justify-content: center;
                        }
                    }
                }
            }
        }

        &__bottom {
            background-color: #004b66;

            .website-info {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 1.2rem 0;

                > div {
                    font-family: $font-secondary;
                    color: #fff;
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
