<template>
	<div>
		<div class="text-center mb-3 profile-header">
			<h1 class="profile-header">My Profile</h1>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-3 profile-img align-self-start">
					<img src="/img/default.png" class="img-fluid" />
				</div>
				<div class="col-md-1 mb-2"></div>
				<div class="col-md-8 profile-name-container">
					<div class="profile-name d-flex flex-row justify-content-between">
						<h1 class="user-name">Hello {{ user.firstName }} {{ user.lastName }}!</h1>
						<button class="btn btn-sm align-self-center" @click="showEditProfile">Edit Profile</button>
					</div>
					<h4 v-if="user.businessName" class="mb-1">{{ user.businessName }}</h4>
					<p class="mb-0">{{ user.address1 }}</p>
					<p v-if="user.address2 !== ''" class="mb-0">{{ user.address2 }}</p>
					<p class="mb-0">{{ user.city }}, {{ user.state }} {{ user.zip }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['user'],
	emits: ['edit-profile'],
	methods: {
		showEditProfile() {
			this.$emit('edit-profile');
		},
	},
};
</script>
