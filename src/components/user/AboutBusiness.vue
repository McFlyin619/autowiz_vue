<template>
	<div v-if="user">
		<div v-if="!$route.path.includes('pros')" class="d-flex flex-row justify-content-end mt-3">
			<button class="btn btn-sm align-self-center balt" @click="showEditBusiness">Edit Business</button>
		</div>
		<h5 v-if="user.about.hours !== ''" class="mt-3">
			<span class="tmain about-border">Business Hours</span>
		</h5>
		<div class="row">
			<div class="col-md bgalt ttext">
				<div>
					Monday:
					<span v-if="!user.about.hours.monday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.monday.time.open }} -
						{{ user.about.hours.monday.time.close }}
					</span>
				</div>
			</div>
			<div class="col-md bgalt ttext">
				<div>
					Tuesday:
					<span v-if="!user.about.hours.tuesday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.tuesday.time.open }} -
						{{ user.about.hours.tuesday.time.close }}
					</span>
				</div>
			</div>
			<div class="col-md bgalt ttext">
				<div>
					Wednesday:
					<span v-if="!user.about.hours.wednesday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.wednesday.time.open }} -
						{{ user.about.hours.wednesday.time.close }}
					</span>
				</div>
			</div>
			<div class="col-md bgalt ttext">
				<div>
					Thursday:
					<span v-if="!user.about.hours.thursday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.thursday.time.open }} -
						{{ user.about.hours.thursday.time.close }}
					</span>
				</div>
			</div>
			<div class="col-md bgalt ttext">
				<div>
					Friday:
					<span v-if="!user.about.hours.friday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.friday.time.open }} -
						{{ user.about.hours.friday.time.close }}
					</span>
				</div>
			</div>
			<div class="col-md bgalt ttext">
				<div>
					Saturday:
					<span v-if="!user.about.hours.saturday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.saturday.time.open }} -
						{{ user.about.hours.saturday.time.close }}
					</span>
				</div>
			</div>
			<div class="col-md bgalt ttext">
				<div>
					Sunday:
					<span v-if="!user.about.hours.sunday.open">Closed</span>
					<span v-else>
						{{ user.about.hours.sunday.time.open }} -
						{{ user.about.hours.sunday.time.close }}
					</span>
				</div>
			</div>
		</div>
		<h5 v-if="user.about.yearEst !== ''" class="mt-3 tmain"><span class="about-border">Established</span></h5>
		<p class="px-3">{{ user.about.yearEst }}</p>
		<h5 v-if="user.about.info !== ''" class="mt-3 tmain"><span class="about-border">About {{ user.businessName}}</span></h5>
		<p class="px-3">{{ user.about.info }}</p>
	</div>
</template>

<script>
export default {
	props: ['user'],
	emits: ['show-edit-business'],
	methods: {
		showEditBusiness() {
			this.$emit('show-edit-business');
		},
	},
};
</script>
