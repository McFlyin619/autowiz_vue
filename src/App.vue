<template>
	<div>
		<the-header @help-tour="helpTour"></the-header>
			<router-view />
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
			help: false,
			steps: [
				{
					target: '#v-step-0',
					header: {
						title: 'Get Started',
					},
					content: `Create a profile to <strong>Find</strong> an AutoWiz Pro or <strong>Become</strong> a Pro!`,
				},
				{
					target: '#v-step-1',
					header: {
						title: 'Sign Up',
					},
					content: `Fill out the form and choose <strong>Find a pro</strong> or <strong> Become a pro</strong>`,
					params: {
						placement: 'bottom-start',
					},
					before: (type) =>
						new Promise((resolve) => {
							resolve(this.$router.push('/signup'))
						}),
				},
				{
					target: '#v-step-2',
					header: {
						title: 'Search',
					},
					content: 'Start searching for a pro!',
					params: {
						placement: 'bottom-start',
					},
					before: (type) =>
						new Promise(resolve => {
							resolve(this.$router.push('/'))
						}),
					after: (type) =>
						new Promise(resolve => {
							resolve(this.help = false)
						})
				},
			],
		};
	},
	created() {
		this.$store.dispatch('auth/tryLogin');
		this.$store.dispatch('pros/fetchPros')
	},
	methods: {
		helpTour() {
			this.help = true 
			this.$tours['myTour'].start();
		}
	}
};
</script>
