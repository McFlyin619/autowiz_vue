<template>
	<div class="container">
		<base-card class="mt-5" :textCenterTitle="true">
			<template v-slot:title>
				Sign Up
			</template>
			<template v-slot:default><sign-up-form/></template>
		</base-card>
	</div>
</template>

<script>
import SignUpForm from '@/components/auth/SignUpForm.vue'
export default {
	components: {
		SignUpForm
	}
}
</script>