<template>
    <section class="services-wrapper">
        <div class="container">
            <div class="services">
                <div class="services-offer">
                    <div class="services-offer__item" v-for="(item, i) in services" :key="i">
                        <div class="services-offer__item-icon" :style="`background-image: url(${item.image})`"></div>
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
export default {
    data () {
        return {
            lorem: 'lorem',
            services: [
                {
                    image: require('../../assets/brand.png'),
                    name: 'Software Competence',
                    desc: 'We provide modular MLM systems that are mobile responsive and accessible through tablets and desktops for your convenience.'
                },
                {
                    image: require('../../assets/logo.png'),
                    name: 'Website UI',
                    desc: 'We ensure a natural user-friendly interface on your website for your user’s comfort.'
                },
            ]
        }
    },
    methods: {
        // getData() {

        // }
    },
    mounted() {
        // getData();
    }
}
</script>

<style lang="scss">
.services {
    background-color: #1c1c1c;

    img {
        width: 50px;
    }

    .services-offer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;

        &__item {
            display: grid;
            grid-template-columns: 50px 1fr;

            &-icon {
                background-size: contain;
                background-repeat: no-repeat;
                padding: 1rem;
                width: 50px;
                height: 50px;
            }
        }
    }
}
</style>
