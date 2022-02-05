<template>
	<div>
		<div class="d-flex flex-row justify-content-end mt-3">
			<button class="btn btn-sm align-self-center balt" @click="showEditServices">Add/Remove Services</button>
		</div>
		<div class="text-center">
			<ul class="list-group list-group-flush">
				<li v-for="serv in user.services" :key="serv" class="list-group-item service-items">{{ serv }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['user'],
};
</script>
