<template>
    <section class="plan-wrapper">
        <div class="container">
            <div class="plan">
                <div class="section-title">
                    <div class="section-title__bg">
                        MLM PLANS
                    </div>
                    <div class="section-title__sm">
                        Various Multi-Level Marketing Plans
                    </div>
                    <div class="line-bottom"></div>
                </div>
                <div class="plan-content">
                    <div v-for="(item, i) in plans" :key="i" class="plan-item" :class="item.iconPos == 'left' ? 'plan-item--switch' : ''">
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
export default {
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
    }
}
</script>

<style lang="scss">
@import "../../scss/style.scss";

.plan-wrapper {
    background-color: #fff;
    padding: 100px 0px;

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
                    font-weight: 700;
                }
                .plan-item__desc {
                    font-family: $font-secondary;
                    color: #888888;
                    line-height: 1.875rem;
                    font-size: 0.875rem;
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
</style>
