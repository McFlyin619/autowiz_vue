<template>
	<div>
		<button @click="show = true" class="btn">Show dialog</button>
		<base-modal :show="show" title="Test" @close="show = false">test</base-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		};
	},
};
</script>
