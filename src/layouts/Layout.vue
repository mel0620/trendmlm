<template>
    <div class="page-layout">
        <header class="header">
            <div class="container">
                <nav class="header__nav">
                    <a class="header__nav-brand" href="javascript:">
                        <img class="img-fluid" width="200" src="@/assets/brand.png" alt="trend mlm logo">
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

<style lang="scss">
@import "../scss/style.scss";

.page-layout {
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        z-index: 99;
        // border-bottom: 1px solid rgba(#fff, .4);

        &__nav {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            justify-content: center;

            &-links {
                padding: 2rem 1rem;
                justify-self: center;

                .header__nav-link {
                    text-decoration: none;
                    color: #fff;
                    padding: 2rem 1.5rem;
                    font-family: $font-secondary;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    position: relative;
                    box-sizing: border-box;
                    transition: .3s all ease-in-out;

                    &::after {
                        transition: .3s all ease-in-out;
                    }

                    &:hover {
                        &::after {
                            content: '';
                            background-color: rgba(#fff, .5);
                            height: 2px;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        }
                    }

                    &.active {
                        &::after {
                            content: '';
                            background-color: #fff;
                            height: 1px;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
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
}
</style>
