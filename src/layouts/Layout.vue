<template>
    <div class="page-layout">
        <header class="header header--sticky">
            <div class="container">
                <nav class="header__nav">
                    <a class="header__nav-brand" href="javascript:">
                        <img class="img-fluid" width="200" src="@/assets/brand-colored.png" alt="trend mlm logo">
                    </a>
                    <div class="header__nav-links">
                        <a href="javascript:" class="header__nav-link active">Home</a>
                        <a href="javascript:" class="header__nav-link">About</a>
                        <a href="javascript:" class="header__nav-link">Services</a>
                        <a href="javascript:" class="header__nav-link">Works</a>
                        <a href="javascript:" class="header__nav-link">Contact</a>
                    </div>
                    <div class="header__nav-contact">
                        <div class="header__nav-contact-icon">
                            <img width="25" class="img-fluid" src="@/assets/call-center.svg" alt="">
                        </div>
                        <div class="header__nav-contact-text">
                            <div>Make a call & let's talk.</div>
                            <div>000 - 000</div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <router-view></router-view>
        <footer class="footer">
            <div class="container">
                <h1>Footer</h1>
            </div>
        </footer>
    </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
    data () {
        return {

        }
    },
    methods: {
        stickyHeader() {
            ScrollOut({
                targets: ".header--sticky",
                offset: 300
            });
        }
    },
    mounted() {
        this.stickyHeader();
    }
}
</script>

<style lang="scss">
@import "../scss/style.scss";

.page-layout {
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
}
</style>
