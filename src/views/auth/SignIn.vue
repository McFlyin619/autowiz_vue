<template>
	<div class="container">
		<base-card class="mt-5">
			<template v-slot:title>
				Sign In
			</template>
			<template v-slot:default><sign-in-form/></template>
		</base-card>
	</div>
</template>

<script>
import SignInForm from '@/components/auth/SignInForm.vue'
export default {
	components: {
		SignInForm
	}
}
</script>