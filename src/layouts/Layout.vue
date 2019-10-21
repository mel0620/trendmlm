<template>
    <div class="page-layout">
        <header class="header header--sticky" data-mob="header">
            <div class="container">
                <nav class="header__nav" data-mob="navigation">
                    <a class="header__nav-brand" href="javascript:">
                        <img class="img-fluid" width="200" src="@/assets/brand-colored.png" alt="trend mlm logo">
                    </a>
                    <div id="navlink" class="header__nav-links" data-mob="hide">
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
                    <span data-mob="nav-btn">
                        <a href="javascript:" class="mdi mdi-text mdi-flip-h"></a>
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
                                <ul>
                                    <li><a href="javascript:">HOME</a></li>
                                    <li><a href="javascript:">About</a></li>
                                    <li><a href="javascript:">Services</a></li>
                                    <li><a href="javascript:">works</a></li>
                                    <li><a href="javascript:">contact</a></li>
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
// import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
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
    },
    mounted() {
        // window.addEventListener("load", () => {
        //     this.loading = false;
        //     console.log(this.loading);
        //     setTimeout(() => {
        //         this.loading = false;
        //     }, 3000);
        // });

        this.myScrollspy();

        ScrollOut({
            targets: ".header--sticky",
            offset: 300
        });

        window.onload = () => {
            this.loading = false;
            console.log(this.loading);
        }

        // const timeline = new TimelineLite()

        // window.addEventListener("load", () => {
        //     timeline.from(".intro", 3, {opacity: 0})
        // });
    },
    created() {

    }
}
</script>

<style lang="scss">
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

                a {
                    color: #fff;
                    font-size: 1.5rem;
                }
            }
        }
    }

    .header--sticky[data-scroll="in"] {
        position: fixed;
        background-color: #fff;
        border-bottom: 1px solid rgba(#000, .12);

        .header__nav {
            .header__nav-brand {
                img {
                    filter: brightness(100%);
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

    .footer {
        &__top {
            background-color: $secondary-color;

           .info-wrapper {
                border-bottom: 1px solid rgba(#fff, .12);
                padding: 50px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

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
        }

        &__bottom {
            background-color: #004b66;

            .website-info {
                display: flex;
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

// MEDIA QUERIES
@include for-size(tablet-down) {
    .header__nav {
        padding: 14px 0;
    }

    [data-mob="navigation"] {
        display: flex !important;
        justify-content: space-between !important;

        .header__nav {
            &-brand {
                img {
                    object-fit: cover;
                    object-position: 0 100%;
                    width: 40px;
                    height: 30px;
                }
            }
        }
    }

    [data-mob="hide"] {
        display: none !important;
    }

    [data-mob="nav-btn"] {
        display: block !important;
    }

    .header--sticky[data-scroll="in"] {
        .header__nav {
            padding: 10px 0;
        }

        [data-mob="nav-btn"] {
            a {
                color: $primary-color;
            }
        }
    }
}

@include for-size(tablet-down) {
    .bottom-nav {
        grid-template-columns: 1fr!important;
        &__brand {
            text-align: center;
        }
        &__links {
            display: none;
        }
        &__social {
            display: flex !important;
            margin:auto;
        }
    }
    .info-item {
        grid-template-columns: 1fr !important;
    }
}

@include for-size(phone-only) {
    .bottom-nav {
        grid-template-columns: 1fr!important;
        &__brand {
            text-align: center;
        }
        &__links {
            display: none;
        }
        &__social {
            display: flex !important;
            margin:auto;
        }
    }
    .info-wrapper {
        flex-direction: column;
        align-items: flex-start !important;
        .info-item {
            margin-bottom: 1.5rem;
        }
        .info-item:last-child {
            margin-bottom: 0px;
        }
    }
}
</style>
