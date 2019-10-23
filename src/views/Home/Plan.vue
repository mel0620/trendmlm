<template>
    <section class="plan-wrapper">
        <div class="container">
            <div class="plan">
                <div class="section-title" data-scroll>
                    <div class="section-title__bg">
                        MLM PLANS
                    </div>
                    <div class="section-title__sm">
                        Various Multi-Level Marketing Plans
                    </div>
                    <div class="line-bottom"></div>
                </div>
                <div class="plan-content">
                    <div data-scroll v-for="(item, i) in plans" :key="i" class="plan-item" :class="item.iconPos == 'left' ? 'plan-item--switch' : ''">
                        <div class="plan-item__texts">
                            <div class="plan-item__title">{{ item.title }}</div>
                            <div class="plan-item__desc">{{ item.desc }}</div>
                        </div>
                        <div class="plan-item__illustration">
                            <img class="img-fluid" :src="item.icon" alt="">
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
    name: 'plan',
    data () {
        return {
            plans: [
                {
                    icon: require('../../assets/plan/binary.svg'),
                    iconPos: 'right',
                    title: 'Binary Plan',
                    desc: 'A plan structure that consists of two legs in the front line, the left, and the right leg. It requires each member to recruit or sponsor two other members to join the plan that can potentially lead to a fast expansion of the network.'

                },
                {
                    icon: require('../../assets/plan/unilevel.svg'),
                    iconPos: 'left',
                    title: 'UNI-LEVEL SYSTEM MLM PLAN',
                    desc: 'It allows only one line of distribution. Every recruit you sponsor will fall on your first level of downlines and each member can recruit as many as they can in their own network downline.'

                },
                {
                    icon: require('../../assets/plan/passup.svg'),
                    iconPos: 'right',
                    title: 'PASS-UP MLM PLAN',
                    desc: 'Sponsors earned on the 3rd direct member of the network downline. If this 3rd member also recruits 3 new members, the sponsor will have a commission percentage on the amount of the availed plan of the first two recruit members while the sponsor’s 3rd member will earn on his 3rd direct member.'

                },
                {
                    icon: require('../../assets/plan/stairstep.svg'),
                    iconPos: 'left',
                    title: 'STAIR-STEP BREAKWAY MLM PLAN',
                    desc: 'Stairstep or “ladder concept” is allowing the distributors to separate from their upline when they reached a certain level. This allows them to run independently and may earn higher commission.'

                },
                {
                    icon: require('../../assets/plan/custom.svg'),
                    iconPos: 'right',
                    title: 'CUSTOM MLM PLAN',
                    desc: 'Trend MLM consider suggestions based on the demands of the client.'

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
@import "../../scss/style.scss";

.plan-wrapper {
    background-color: #fff;
    padding: 100px 0px !important;

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

    .plan-content {
        display: grid;
        grid-row-gap: 5rem;

        .plan-item {
            display: grid;
            grid-template-columns: 70% 30%;
            grid-gap: 1rem;
            grid-template-areas: "texts ill";

            &__texts {
                grid-area: texts;

                .plan-item__title {
                    font-family: $font-primary;
                    color: $secondary-color;
                    font-size: 1rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .plan-item__desc {
                    font-family: $font-secondary;
                    color: #888888;
                    line-height: 1.875rem;
                    font-size: 0.8125rem;
                    margin-top: 1rem;
                }
            }

            &__illustration {
                grid-area: ill;
            }
        }

        .plan-item--switch {
            grid-template-columns: 30% 70%;
            grid-template-areas: "ill texts";
        }
    }
}

@include for-size(phone-only) {
    .plan-content {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 1rem !important;

        .plan-item {
            display: inline !important;
            position: relative;
            border: 1px solid rgba(#000, .12);
            border-radius: 5px;
            padding: 2rem;

            &__texts {
                position: relative;
                z-index: 2;
            }

            &__illustration {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                overflow: hidden;
                display: flex;
                justify-content: flex-end;

                img {
                    align-self: flex-end;
                    opacity: .5;
                    width: 150px;
                    height: 150px;
                    object-fit: contain !important;
                }
            }
        }
    }
}

@include for-size(tablet-portrait-up) {
    .plan-content {
        grid-template-columns: 1fr 1fr;
    }
}

@include for-size(desktop-up) {
    .plan-content {
        grid-template-columns: 1fr;
    }
}

</style>
