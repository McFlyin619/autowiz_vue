<template>
	<div>
		<the-header></the-header>
		<div class="container">
			<router-view />
		</div>
		<the-footer></the-footer>
	</div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
export default {
	components: {
		TheHeader,
		TheFooter
	},
	created() {
		this.$store.dispatch('auth/tryLogin');
	},
}
</script>