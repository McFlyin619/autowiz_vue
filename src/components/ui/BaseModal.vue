<template>
	<teleport to="body">
		<div v-if="show" @click="tryClose" class="backdrop"></div>
		<dialog open v-if="show" class="text-center bmodal">
			<header v-if="title" >
				<slot name="header">
					<h2 class="d-inline">{{ title }}</h2>
					<button
						class="d-inline float-end btn-close"
						aria-label="Close"
						@click="tryClose"
					></button>
				</slot>
			</header>
			<section class="text-center">
				<slot></slot>
			</section>
			<menu v-if="!fixed" class="mb-2">
				<slot name="buttons"> </slot>
			</menu>
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
		}
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
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
}

dialog {
	position: fixed;
	top: 5vh;
	left: 5%;
	width: 90%;
	z-index: 100;
	border: none;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 0;
	margin: 0;
	overflow: hidden;
	border-radius: 5px;
	-webkit-animation: slide-in-top .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation: slide-in-top .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}


@-webkit-keyframes slide-in-top {
	0% {
		-webkit-transform: translateY(-1000px);
		transform: translateY(-1000px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-in-top {
	0% {
		-webkit-transform: translateY(-1000px);
		transform: translateY(-1000px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}

header {
	width: 100%;
	padding: 1rem;
}

header h2 {
	margin: 0;
}

section {
	padding: 1rem;
	max-height: calc(100vh - 210px);
	overflow-y: auto;
}

menu {
	padding: 1rem;
	margin: 0;
}

button {
	background-color: var(--btn-body);
	color: var(--color-main);
	border-color: var(--color-main);
}

button:hover {
	background-color: var(--color-main);
	color: var(--bg-color);
	border-color: var(--color-main);
}

button:focus {
	background-color: var(--color-main);
	color: var(--bg-color);
	border-color: var(--color-main);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px var(--color-main);
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
