<template>
	<teleport to="body">
		<div v-if="show" @click="tryClose" class="backdrop"></div>
		<dialog open v-if="show" class="text-center">
			<section class="text-center">
				<slot>
					<div class="spinner-grow page-spinner" role="status">
						<span>Loading...</span>
					</div>
				</slot>
			</section>
		</dialog>
	</teleport>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['close'],
	methods: {
		tryClose() {
			if (this.fixed) {
				return;
			}
			this.$emit('close');
		},
	},
};
</script>

<style scoped>

.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.808);
	z-index: 10;
}

dialog {
	position: fixed;
	top:25vh;
	left: 0;
	width: 90%;
	z-index: 100;
	border: none;
	/* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
	padding: 0;
	margin: 0;
	overflow: hidden;
	background-color: rgba(255, 255, 255, 0);
	border-radius: 5px;
}

section {
	padding: 1rem;
	/* max-height: calc(100vh - 210px); */
	overflow-y: auto;
}

menu {
	padding: 1rem;
	margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
	transform: scale(0.8);
}

.dialog-enter-active {
	transition: all 0.3s ease-out;
}

.dialog-leave-active {
	transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
	opacity: 1;
	transform: scale(1);
}

@media (min-width: 768px) {
	dialog {
		left: calc(50% - 40rem);
		width: 80rem;
	}
}
</style>
