<template>
	<div>
		<form @submit.prevent="signUp">
			<div class="mb-3">
				<label for="email" class="form-label">Email address</label>
				<input v-model.trim="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
				<div id="emailHelp" class="form-text text-black">We'll never share your email with anyone else.</div>
			</div>
			<div class="mb-3">
				<label for="password" class="form-label">Password</label>
				<input v-model.trim="password" type="password" class="form-control" id="password" />
			</div>
			<div class="mb-3">
				<label for="firstName" class="form-label">First name</label>
				<input v-model.trim="firstName" type="text" class="form-control" id="firstName" />
			</div>
			<div class="mb-3">
				<label for="lastName" class="form-label">Last Name</label>
				<input v-model.trim="lastName" type="text" class="form-control" id="lastName" />
			</div>
			<div class="row">
				<div class="col-md-3">
					<div class="mb-3 form-check">
						<input v-model.trim="isCustomer" type="checkbox" class="form-check-input" id="customer" />
						<label class="form-check-label" for="customer">I am looking for a pro</label>
					</div>
				</div>
				<div class="col-md-3">
					<div class="mb-3 form-check">
						<input v-model.trim="isPro" type="checkbox" class="form-check-input" id="pro" />
						<label class="form-check-label" for="pro">I am a pro</label>
					</div>
				</div>
			</div>
			<hr>
			<div v-show="isPro">
				<div class="mb-3">
				<label for="businessName" class="form-label">Business Name</label>
				<input v-model.trim="businessName" type="text" class="form-control" id="businessName" />
			</div>
				<h6>Select services you provide</h6>
				<div class="row row-cols-1 row-cols-md-5 container">
					<input v-model="services" value="Alarm/Security"  type="checkbox" class="btn-check" id="1" />
					<label class="btn btn-pro me-1 mt-1" :class="{ 'btn-pro-checked': services.includes('Alarm/Security')}" for="1">Alarm/Security</label>

					<input v-model="services" value="Auto Body" type="checkbox" class="btn-check" id="2" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Body')}" for="2">Auto Body</label>

					<input v-model="services" value="Auto Detailing" type="checkbox" class="btn-check" id="3" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Detailing')}" for="3">Auto Detailing</label>

					<input v-model="services" value="Auto Glass Tinting" type="checkbox" class="btn-check" id="4" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Glass Tinting')}" for="4">Auto Glass Tinting</label>

					<input v-model="services" value="Auto Glass Repair" type="checkbox" class="btn-check" id="5" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Glass Repair')}" for="5">Auto Glass Repair</label>

					<input v-model="services" value="Auto Parts" type="checkbox" class="btn-check" id="6" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Parts')}" for="6">Auto Parts</label>

					<input v-model="services" value="Auto Repair" type="checkbox" class="btn-check" id="7" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Repair')}" for="7">Auto Repair</label>

					<input v-model="services" value="Auto Salvage Yards" type="checkbox" class="btn-check" id="8" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Salvage Yards')}" for="8">Auto Salvage Yards</label>

					<input v-model="services" value="Auto Wrap" type="checkbox" class="btn-check" id="10" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Auto Wrap')}" for="10">Auto Wrap</label>

					<input v-model="services" value="Brake Repair" type="checkbox" class="btn-check" id="11" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Brake Repair')}" for="11">Brake Repair</label>

					<input v-model="services" value="Car Wash" type="checkbox" class="btn-check" id="12" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Car Wash')}" for="12">Car Wash</label>

					<input v-model="services" value="Oil Change" type="checkbox" class="btn-check" id="13" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Oil Change')}" for="13">Oil Change</label>

					<input
						v-model="services"
						value="Smog/Emissions Testing"
						type="checkbox"
						class="btn-check"
						id="14"
					/>
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Smog/Emissions Testing')}" for="14">Smog/Emissions Testing</label>

					<input v-model="services" value="Tires/Wheels" type="checkbox" class="btn-check" id="15" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Tires/Wheels')}" for="15">Tires/Wheels</label>

					<input v-model="services" value="Towing Services" type="checkbox" class="btn-check" id="16" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Towing Services')}" for="16">Towing Services</label>

					<input v-model="services" value="Transmission Repair" type="checkbox" class="btn-check" id="17" />
					<label class="btn me-1 btn-pro mt-1" :class="{ 'btn-pro-checked': services.includes('Transmission Repair')}" for="17">Transmission Repair</label>
				</div>
				<hr>
			</div>
			<button class="btn balt mb-3 mt-2">Create Account</button>
		</form>
		<small
			>Have an account? Sign in <router-link class="text-decoration-none clink" to="/signin">here</router-link>
		</small>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: null,
			password: null,
			firstName: null,
			lastName: null,
			isPro: false,
			isCustomer: true,
			error: null,
			businessName: null,
			services: [],
		};
	},
	watch: {
		isPro() {
			if (this.isPro === true) {
				this.isCustomer = false;
			} else {
				this.isCustomer = true;
			}
		},
		isCustomer() {
			if (this.isCustomer === true) {
				this.isPro = false;
			} else {
				this.isPro = true;
			}
		},
	},
	methods: {
		async signUp() {
			const payload = {
				email: this.email,
				password: this.password,
				firstName: this.firstName,
				lastName: this.lastName,
				isPro: this.isPro,
				isCustomer: this.isCustomer,
				services: this.services,
				businessName: this.businessName
			};
			try {
				await this.$store.dispatch('auth/signUp', payload);
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
			this.email = ''
			this.password = ''
			this.firstName = ''
			this.lastName = ''
			this.isPro = ''
			this.isCustomer = ''
			this.services = ''
			this.businessName = ''
		},
	},
};
</script>
