<template>
  <div class="home-page">
	<hero></hero>
	<div data-visibility="hide">
		<RQoute></RQoute>
	</div>
	<GetToKnow></GetToKnow>
	<services></services>
	<works></works>
	<clients></clients>
	<plan></plan>
	<testimonials></testimonials>
	<contact></contact>
	<technologies></technologies>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import GetToKnow from "./GetToKnow.vue";
import RQoute from "./RQoute.vue";
import Services from "./Services.vue";
import Works from "./Works.vue";
import Clients from "./Clients.vue";
import Plan from "./Plan.vue";
import Testimonials from "./Testimonials.vue";
import Contact from "./Contact.vue";
import Technologies from "./Technologies.vue";

export default {
  name: "home",
  components: {
	Hero,
	RQoute,
	GetToKnow,
	Services,
	Works,
	Clients,
	Plan,
	Testimonials,
	Contact,
	Technologies
  }
};
</script>

<style lang="scss">
[data-visibility="hide"] {
  display: none;

  @include for-size(phone-only) {
	display: block;
  }
}
</style>