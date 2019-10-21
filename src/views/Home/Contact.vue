<template>
    <section class="contact-wrapper" id="contact">
        <div class="container">
            <div class="contact">
                <div class="section-title section-title--variant1">
                    <div class="section-title__bg">
                        REACH US
                    </div>
                    <div class="section-title__sm">
                        Feel free to Ask
                    </div>
                    <div class="line-bottom line-bottom--white"></div>
                </div>

                <div class="contact-content">
                    <input type="text" placeholder="Full Name Here*">
                    <input type="text" placeholder="Last Name Here*">
                    <input type="text" placeholder="Email Address Here*">
                    <input class="contact-content__message" type="text" placeholder="Message Here*">
                    <button>Ask Now</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../../scss/style.scss";

.contact-wrapper {
    background-color: $secondary-color;
    padding: 100px 0px;
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
}
</style>
