<template>
    <section class="services-wrapper" id="services">
        <div class="container">
            <div class="services">
                <div class="section-title" data-scroll>
                    <div class="section-title__bg">
                        SERVICES
                    </div>
                    <div class="section-title__sm">
                        We Provide Services for your Business Needs
                    </div>
                    <div class="line-bottom"></div>
                </div>
                <div class="services-offer">
                    <div class="services-offer__item" data-scroll v-for="(item, i) in services" :key="i">
                        <div v-lazyload class="services-offer__item-icon">
                            <img class="img-fluid" width="50" :data-url="item.image" alt="">
                        </div>
                        <div class="services-offer__item-info">
                            <div class="services-offer__name">{{ item.name }}</div>
                            <div class="services-offer__desc">{{ item.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
    name: 'services',
    data () {
        return {
            services: [
                {
                    image: require('../../assets/service-1.svg'),
                    name: 'Software Competence',
                    desc: 'We provide modular MLM systems that are mobile responsive and accessible through tablets and desktops for your convenience.'
                },
                {
                    image: require('../../assets/service-4.svg'),
                    name: 'Website UI',
                    desc: 'We ensure a natural user-friendly interface on your website for your user’s comfort.'
                },
                {
                    image: require('../../assets/service-2.svg'),
                    name: 'Security',
                    desc: 'We make sure that your business is safe and secure; our system provides a powerful security for data and codes.'
                },
                {
                    image: require('../../assets/service-5.svg'),
                    name: 'ComPlan Commission Calculation',
                    desc: 'Get ultimate flexibility with our compensation plan. Calculate commissions for your network the way you want to.'
                },
                {
                    image: require('../../assets/service-3.svg'),
                    name: 'All that Matters',
                    desc: 'We provide consultations on project scopes to your business needs and what really matters most to you and your members.'
                },
                {
                    image: require('../../assets/service-6.svg'),
                    name: 'Payment Gateway',
                    desc: 'We integrate all major payment gateways for your payment choices including credit/debit cards.'
                },
            ]
        }
    },
    mounted() {
        this.so = ScrollOut({
            scope: this.$el,
            once: true
        });
    },
    destroyed() {
        this.so.teardown();
    }
}
</script>

<style lang="scss">
.services-wrapper {
    background-color: #fff;
    padding: 100px 0px !important;
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

    .services {
        .services-offer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 3rem;

            .services-offer__item {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 30px;
                align-items: center;

                &-info {
                    .services-offer__name {
                        font-family: $font-primary;
                        font-size: 1rem;
                        font-weight: 700;
                        color: $primary-color;
                        margin-bottom: 10px;
                    }
                    .services-offer__desc {
                        font-family: $font-secondary;
                        font-size: 13px;
                        font-weight: 400;
                        color: $secondary-color;
                        line-height: 1.5rem;
                    }
                }
            }

            @include for-size(phone-only) { 
                grid-template-columns: 1fr;

                .services-offer__item {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
            }
        }
    }
}
</style>
