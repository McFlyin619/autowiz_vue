<template>
	<div>
		<form @submit.prevent="signIn">
			<div class="mb-3">
				<label for="email" class="form-label">Email address</label>
				<input v-model.trim="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
			</div>
			<div class="mb-3">
				<label for="password" class="form-label">Password</label>
				<input v-model.trim="password" type="password" class="form-control" id="password" />
			</div>
			<button class="btn balt mb-3 mt-2">Sign in</button>
		</form>
	</div>
</template>

<script>
export default {
	data () {
		return {
			email: null,
			password: null
		}
	},
	methods: {
		async signIn () {
			const payload = {
				email: this.email,
				password: this.password
			}
			try {
				await this.$store.dispatch('auth/signIn', payload);
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
		}
	}
}
</script>