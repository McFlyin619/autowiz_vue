<template>
	<div>
		<form @submit.prevent="postReview">
			<div id="v-model-radiobutton">
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
			<button class="btn balt">Save</button>
		</form>
	</div>
</template>


<script>
export default {
	props: ['uid'],
	data () {
		return {
			reviewStars: "1"
		}
	},
	methods: {
		postReview() {
			const payload = {
				uid: this.uid,
				reviewStars: this.reviewStars
			} 
			this.$store.dispatch('reviews/addReview', payload)
		}
	}
}
</script>