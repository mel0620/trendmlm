<template>
	<div class="main-loader">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
            <path class="st0" d="M361.4,182.7c-4.7,10.5-9.5,20.9-14.6,31.2c-3.5,7.3-10.4,10.5-17,8.5c-7.2-2.3-11.2-8.8-9.2-17.1
                c1.5-6.4-1.5-5-4.8-3.6c-11.9,5.1-17.8,14.8-20,27.1c-0.7,3.9-0.7,8-1.3,11.9c-1,8-6.8,12.9-14.7,13c-8,0-13.7-4.8-14.8-12.8
                c-0.7-4.8-0.7-9.6-1.6-14.3c-3.3-16.3-17.1-27.9-31.3-26.5c-14.9,1.4-27,15.8-27.6,33.5c-0.4,13.9-0.1,27.8-0.2,41.7
                c-0.1,10.7-6.3,17.9-15.2,17.9c-9,0-14.9-7.2-15.2-18c-0.4-12,0.9-24-1.3-35.9c-4.3-23.4-16.4-35.7-39.8-37.7
                c-7.5-0.6-16.4-4.5-18.7-12.3c-1.5-5.2,0.4-10.6,3.9-14.5c4.2-4.7,10.4-6.3,16.6-5.8c17.9,1.4,33.8,7.2,46.9,19.6
                c4,3.9,6.2,1.4,9.1-1.6c17.6-18.4,42.9-24.2,66-15.1c6.8,2.7,12.9,6.5,17.9,11.8c3.8,4.1,7,3.8,10.7-0.1c5.8-6.1,13-10.2,21.8-13.2
                c-4.5-4.4-7.2-9.2-6.7-15.4c0.7-9.7,12.2-15.1,20.6-11.6c5.1,2.1,9.9,4.7,14.8,7.1c5.5,2.6,11,5.3,16.5,8
                C363.3,163.8,366.3,171.7,361.4,182.7z"/>
            <path class="st1" d="M189.6,357.7L189.6,357.7c-8.7,0-15.8-7.1-15.8-15.8v-13.8c0-8.7,7.1-15.8,15.8-15.8h0
                c8.7,0,15.8,7.1,15.8,15.8v13.8C205.5,350.6,198.3,357.7,189.6,357.7z"/>
            <path class="st1" d="M279.9,357.7L279.9,357.7c-8.7,0-15.8-7.1-15.8-15.8v-52c0-8.7,7.1-15.8,15.8-15.8h0c8.7,0,15.8,7.1,15.8,15.8
                v52C295.7,350.6,288.6,357.7,279.9,357.7z"/>
            <path class="st1" d="M370.4,357.7L370.4,357.7c-8.7,0-15.8-7.1-15.8-15.8V258c0-8.7,7.1-15.8,15.8-15.8h0c8.7,0,15.8,7.1,15.8,15.8
                v83.8C386.2,350.6,379.1,357.7,370.4,357.7z"/>
        </svg>
	</div>
</template>

<script>
	export default {
		name: "loader"
	};
</script>

<style lang="scss">
	@import "../scss/style.scss";
	.main-loader {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			width: 150px;

            .st0{fill:none;stroke:$primary-color;stroke-width:8;stroke-miterlimit:10;}
            .st1{fill:none;stroke:$secondary-color;stroke-width:8;stroke-miterlimit:10;}
		}

		.st0 {
			transition: .3s all ease-in-out;
			// color: $primary-color;
			stroke-dasharray: 1000;
			stroke-dashoffset: 1000;
			animation: dash 3s linear alternate infinite;
			fill: currentColor
		}
		
		.st1 {
			transition: .3s all ease-in-out;
			// color: $secondary-color;
			stroke-dasharray: 1000;
			stroke-dashoffset: 1000;
			animation: dash 3s linear alternate infinite;
			fill: currentColor;
		}

		@keyframes dash {
			from {
				stroke-dashoffset: 1000;
				// fill: none;
			}
			to {
				stroke-dashoffset: 0;
				// fill: currentColor;
			}
		}
	}
</style>