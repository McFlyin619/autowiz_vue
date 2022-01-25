<template>
	<div>
		<the-header></the-header>
		<div class="container">
			<router-view />
		</div>
		<v-tour name="myTour" :steps="steps"></v-tour>
		<the-footer></the-footer>
	</div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
export default {
	components: {
		TheHeader,
		TheFooter,
	},
	data() {
		return {
			steps: [
				{
					target: '#v-step-0', // We're using document.querySelector() under the hood
					header: {
						title: 'Get Started',
					},
					content: `Create a profile to <strong>Find</strong> an AutoWiz Pro or <strong>Become</strong> a Pro!`,
				},
				{
					target: '#v-step-1',
					header: {
						title: 'Search',
					},
					content: 'Start searching for a pro!',
				},
				// {
				// 	target: '[data-v-step="2"]',
				// 	content:
				// 		"Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
				// 	params: {
				// 		placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				// 	},
				// },
			],
		};
	},
	mounted() {
		this.$tours['myTour'].start();
	},
	created() {
		this.$store.dispatch('auth/tryLogin');
	},
};
</script>
