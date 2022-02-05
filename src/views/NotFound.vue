<template>
	<div class="container">
		<section class="mt-5">
			<h1>{{randomMessages.title}}</h1>
			<h4>
				{{ randomMessages.message }}
				<router-link to="/">{{ randomMessages.linkText}}</router-link>.
			</h4>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			errorMessages : [
				{
					title: 'You zigged, we zagged',
					message: "Lets try this again",
					linkText: 'home'
				},
			]
		}
	},
	computed: {
		randomMessages() {
			const random = this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)]
			return random
		}
	}
}
</script>