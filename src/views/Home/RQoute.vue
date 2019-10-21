<template>
    <div class="request-qoute">
        <div class="title">
            <div class="title-icon">
                <img class="img-fluid" width="50" src="../../assets/bubble.svg" alt="">
            </div>
            <div class="title-text">REQUEST A QOUTE</div>
        </div>
        <div class="form-group">
            <input class="form-input" placeholder="Full Name Here *" type="text">
            <input class="form-input" placeholder="Email Address Here *" type="text">
            <input class="form-input" placeholder="Contact Number *" type="text">
            <input class="form-input form-input-span-2" placeholder="Message Here *" type="text">
            <button class="form-btn">Request Now</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/style.scss";
.request-qoute {
    background-color: $primary-color;
    width: 100%;
    padding: 2rem;
    border-radius: 5px;

    @include for-size(phone-only) {
        border-radius: 0;
    }
    
    .title {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem;
        font-family: $font-primary;
        align-items: center;

        &-text {
            font-weight: 700;
            color: #fff;
            letter-spacing: 1px;
            font-size: 0.875rem;
        }
    }

    .form-group {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        margin-top: 1rem;

        input {
            color: #fff;
            background-color: transparent;
            border: 1px solid #fff;
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

        .form-input-span-2
        {
            grid-column: 1 / span 2;
        }

        ::placeholder {
            color: #fff;
        }

        .form-btn {
            outline: none;
            background-color: #fff;
            color: $secondary-color;
            font-family: $font-secondary;
            font-weight: 700;
            font-size: 0.875rem;
            padding: 1rem 0px;
            min-width: 250px;
            border:none;
            border-radius: 2px;
            cursor: pointer;
        }

        @include for-size(phone-only) {
            grid-template-columns: 1fr;

            input {
                grid-column: span 2;
            }

            .form-btn {
                grid-column: span 2;
            }
        }
    }
}
</style>