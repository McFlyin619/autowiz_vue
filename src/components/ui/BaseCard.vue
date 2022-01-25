<template>
	<div class="card bcard">
		<div class="card-body">
			<h1 class="card-title text-center"><slot name="title"></slot></h1>
			<h5 class="card-subtitle mb-2 text-muted"><slot name="subtitle"></slot></h5>
			<p class="card-text text-center">
				<slot> </slot>
			</p>
		
			<div v-if="link1">
				<router-link :to="link1" class="card-link">
					<button class="btn bnav">
						<slot name="link1Text"></slot>
					</button>
				</router-link>
			</div>
			<div  v-if="link2">
				<router-link :to="link2" class="card-link">
					<button class="btn bnav">
						<slot name="link2Text"></slot>
					</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['link1', 'link2']
}
</script>