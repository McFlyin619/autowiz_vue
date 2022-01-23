<template>
	<div>
		<div v-if="!userType" class="text-center mt-5">
			<button @click="user('Pro')" class="btn balt me-5">I am a Pro</button>
			<button @click="user('Customer')" class="btn balt">I am a Customer</button>
		</div>
		<form v-if="userType === true" @submit.prevent="signIn">
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
			userType: false,
			email: null,
			password: null,
			isPro: false,
			isCustomer: false
		}
	},
	methods: {
		user(userType) {
			if(userType === 'Pro') {
				this.userType = true
				this.isPro = true
			} else {
				this.userType = true
				this.isCustomer = true
			}
		},
		async signIn () {
			const payload = {
				email: this.email,
				password: this.password,
				isPro: this.isPro,
				isCustomer: this.isCustomer
			}
			try {
				await this.$store.dispatch('auth/signIn', payload);
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
			this.$router.push('/')
		}
	}
}
</script>