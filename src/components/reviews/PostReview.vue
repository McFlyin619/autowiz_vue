<template>
	<div>
		<h3 class="text-center mb-5">Review {{business}}</h3>
		<form @submit.prevent="postReview">
			<div class="row">
				<div class="col-3">
					<div id="v-model-radiobutton">
						<h4>Rate This Pro</h4>
						<div class="form-check">
							<input v-model="reviewStars" class="form-check-input" type="radio" value="1" id="oneStar" />
							<label class="form-check-label" for="oneStar"> <i class="bi bi-star-fill"></i> </label>
						</div>
						<div class="form-check">
							<input v-model="reviewStars" class="form-check-input" type="radio" value="2" id="twoStar" />
							<label class="form-check-label" for="twoStar"> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> </label>
						</div>
						<div class="form-check">
							<input v-model="reviewStars" class="form-check-input" type="radio" value="3" id="threeStar" />
							<label class="form-check-label" for="threeStar"> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> </label>
						</div>
						<div class="form-check">
							<input v-model="reviewStars" class="form-check-input" type="radio" value="4" id="fourStar" />
							<label class="form-check-label" for="fourStar"> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> </label>
						</div>
						<div class="form-check">
							<input v-model="reviewStars" class="form-check-input" type="radio" value="5" id="fiveStar" />
							<label class="form-check-label" for="fiveStar"> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> </label>
						</div>
					</div>
				</div>
				<div class="col-1">
				</div>
				<div class="col-8 review-text">
					<h4>Describe Your Experience With This Pro</h4>
					<textarea
						type="text"
						v-model.trim="reviewBody"
						class="form-control"
						id="about"
						rows="5"
					/>
				</div>
			</div>
			<div class="row mt-5 d-flex justify-content-center">
				<button class="btn balt w-50">Save</button>
			</div>
		</form>
	</div>
</template>


<script>
export default {
	props: ['uid', 'business', 'loggedInUser'],
	emits: ['close'],
	data () {
		return {
			reviewStars: "1",
			reviewBody: '',
			reviewedBy: this.loggedInUser
		}
	},
	methods: {
		postReview() {
			const payload = {
				uid: this.uid,
				reviewStars: this.reviewStars,
				reviewBody: this.reviewBody,
				reviewedBy: this.reviewedBy
			} 
			this.$store.dispatch('reviews/addReview', payload)
			this.$emit('close')
		}
	}
}
</script>