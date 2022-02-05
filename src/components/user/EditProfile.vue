<template>
	<form @submit.prevent="editForm">
		<div class="edit-name">
			<div class="mb-3">
				<label for="firstName" class="form-label">First name</label>
				<input :disabled="isLoading" v-model.trim="firstName" type="text" class="form-control" id="firstName" />
			</div>
			<div class="mb-3">
				<label for="lastName" class="form-label">Last Name</label>
				<input :disabled="isLoading" v-model.trim="lastName" type="text" class="form-control" id="lastName" />
			</div>
		</div>
		<div class="edit-address">
			<div class="mb-3">
				<label for="address1" class="form-label">Address 1</label>
				<input :disabled="isLoading" v-model.trim="address1" type="text" class="form-control" id="address1" />
			</div>
			<div class="mb-3">
				<label for="address2" class="form-label">Address 2</label>
				<input :disabled="isLoading" v-model.trim="address2" type="text" class="form-control" id="address2" />
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="mb-3">
						<label for="city" class="form-label">City</label>
						<input :disabled="isLoading" v-model.trim="city" type="text" class="form-control" id="city" />
					</div>
				</div>
				<div class="col-md-2">
					<div class="mb-3">
						<label for="state" class="form-label">State</label>
						<input :disabled="isLoading" v-model.trim="state" type="text" class="form-control" id="state" />
					</div>
				</div>
				<div class="col-md-5">
					<div class="mb-3">
						<label for="zip" class="form-label">Zip</label>
						<input :disabled="isLoading" v-model.trim="zip" type="text" class="form-control" id="zip" />
					</div>
				</div>
			</div>
		</div>
		<div class="d-grid gap-2 col-6 mx-auto">
			<button v-if="!isLoading" class="btn balt btn-lg">Save</button>
			<button v-else class="btn balt btn-lg" type="button" disabled>
				<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
				Saving...
			</button>
		</div>
	</form>
</template>

<script>
export default {
	props: ['user'],
	emits: ['close'],
	data() {
		return {
			isLoading: false,
			firstName: this.user.firstName,
			lastName: this.user.lastName,
			address1: this.user.address1,
			address2: this.user.address2,
			city: this.user.city,
			state: this.user.state,
			zip: this.user.zip,
		};
	},
	methods: {
		editForm() {
			const payload = {
				firstName: this.firstName,
				lastName: this.lastName,
				address1: this.address1,
				address2: this.address2,
				city: this.city,
				state: this.state,
				zip: this.zip,
				uid: this.user.uid,
			};
			if (this.user.isPro) this.$store.dispatch('pros/editProProfile', payload);
			if (this.user.isCustomer) this.$store.dispatch('customers/editCustomerProfile', payload);
			this.isLoading = true;
			setTimeout(() => {
				this.$emit('close');
				this.isLoading = false;
			}, 1200);
		},
	},
};
</script>
