<template>
	<div>
		<form @submit.prevent="editForm">
			<div class="edit-business">
				<div class="mb-3">
					<label for="businessName" class="form-label">Business Name</label>
					<input
						:disabled="isLoading"
						v-model.trim="businessName"
						type="text"
						class="form-control"
						id="businessName"
					/>
				</div>
				<div class="mb-3">
					<label for="yearEst" class="form-label">Year Established</label>
					<input
						:disabled="isLoading"
						v-model.trim="about.yearEst"
						type="text"
						class="form-control"
						id="yearEst"
					/>
				</div>
				<div class="mb-3">
					<label for="about" class="form-label">About</label>
					<textarea
						:disabled="isLoading"
						v-model.trim="about.info"
						type="text"
						class="form-control"
						id="about"
						rows="4"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.monday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="monday"
					/>
					<label class="form-check-label" for="monday"
						>Monday - <span v-if="!about.hours.monday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.monday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.monday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.monday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.monday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.monday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.tuesday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="tuesday"
					/>
					<label class="form-check-label" for="tuesday"
						>Tuesday - <span v-if="!about.hours.tuesday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.tuesday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.tuesday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.tuesday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.tuesday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.tuesday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.wednesday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="wednesday"
					/>
					<label class="form-check-label" for="wednesday"
						>Wednesday - <span v-if="!about.hours.wednesday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.wednesday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.wednesday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.wednesday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.wednesday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.wednesday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.thursday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="thursday"
					/>
					<label class="form-check-label" for="thursday"
						>Thursday - <span v-if="!about.hours.thursday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.thursday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.thursday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.thursday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.thursday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.thursday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.friday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="friday"
					/>
					<label class="form-check-label" for="friday"
						>Friday - <span v-if="!about.hours.friday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.friday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.friday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.friday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.friday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.friday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.saturday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="saturday"
					/>
					<label class="form-check-label" for="saturday"
						>Saturday - <span v-if="!about.hours.saturday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.saturday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.saturday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.saturday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.saturday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.saturday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-flex flex-row justify-content-start align-items-center">
				<div class="form-check form-switch">
					<input
						v-model="about.hours.sunday.open"
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="sunday"
					/>
					<label class="form-check-label" for="sunday"
						>Sunday - <span v-if="!about.hours.sunday.open">Closed</span> <span v-else>Open</span>
					</label>
				</div>
				<div class="ms-2" v-if="about.hours.sunday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.sunday.time.open"
						type="tel"
						maxlength="4"
						class="form-control form-control-sm"
						placeholder="Open time"
					/>
				</div>
				<div v-if="about.hours.sunday.open" class="mx-2">
					<h3>-</h3>
				</div>
				<div v-if="about.hours.sunday.open">
					<input
						:disabled="isLoading"
						v-model.trim="about.hours.sunday.time.close"
						type="tel"
						maxlength="4"
						placeholder="Close time"
						class="form-control form-control-sm"
					/>
				</div>
			</div>
			<div class="d-grid gap-2 col-6 mx-auto">
			<button v-if="!isLoading" class="btn balt">Save</button>
			<button v-else class="btn balt " type="button" disabled>
				<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
				Saving...
			</button>
		</div>
		</form>
	</div>
</template>

<script>
export default {
	props: ['user', 'isLoading'],
	emits:['close'],
	data () {
		return {
			businessName: this.user.businessName,
			about: {
				info: this.user.about.info,
				yearEst: this.user.about.yearEst,
				hours: {
					monday: {
						open: this.user.about.hours.monday.open,
						time: {
							open: this.user.about.hours.monday.time.open,
							close: this.user.about.hours.monday.time.close
						},
					},
					tuesday: {
						open: this.user.about.hours.tuesday.open,
						time: {
							open: this.user.about.hours.tuesday.time.open,
							close: this.user.about.hours.tuesday.time.close
						},
					},
					wednesday: {
						open: this.user.about.hours.wednesday.open,
						time: {
							open: this.user.about.hours.wednesday.time.open,
							close: this.user.about.hours.wednesday.time.close
						},
					},
					thursday: {
						open: this.user.about.hours.thursday.open,
						time: {
							open: this.user.about.hours.thursday.time.open,
							close: this.user.about.hours.thursday.time.close
						},
					},
					friday: {
						open: this.user.about.hours.friday.open,
						time: {
							open: this.user.about.hours.friday.time.open,
							close: this.user.about.hours.friday.time.close
						},
					},
					saturday: {
						open: this.user.about.hours.saturday.open,
						time: {
							open: this.user.about.hours.saturday.time.open,
							close: this.user.about.hours.saturday.time.close
						},
					},
					sunday: {
						open: this.user.about.hours.sunday.open,
						time: {
							open: this.user.about.hours.sunday.time.open,
							close: this.user.about.hours.sunday.time.close
						},
					},
				},
			},
		}
	},
	methods: {
		editForm() {
			const payload = {
				uid: this.user.uid,
				businessName: this.businessName,
				about: this.about
			}
			this.$store.dispatch('pros/editProBusiness', payload)
			this.$emit('close')
		}
	}
};
</script>
