<template>
	<div>
		<the-header></the-header>
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
export default {
	components: {
		TheHeader
	}
}
</script>