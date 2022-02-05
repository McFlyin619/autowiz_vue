<template>
	<div v-if="user" class="container">
		<base-modal :show="showPostReview" title="Review" @close="showPostReview = false">
			<post-review :uid="user.uid"></post-review>
		</base-modal>
		<h1 class="mt-5 text-center">{{ user.businessName }}</h1>
		<base-card>
			<about-business :user="user"></about-business>
			<button @click="showPostReview = true" class="btn balt">Review {{ user.businessName }}</button>

			<div>{{ isNaN(rating) ? 0 : rating }} average based on {{reviewCount}} reviews</div>
		</base-card>
	</div>
</template>

<script>
import AboutBusiness from './AboutBusiness.vue'
import PostReview from '../reviews/PostReview.vue'
export default {
	components: {
		AboutBusiness,
		PostReview
	},
	data () {
		return {
			showPostReview: false,
			stars: ``,
			reviewCount: 0
		}
	},
	created() {
		this.starsCount()
	},
	watch: {
		rating() {
			this.starsCount()
		}
	},
	computed: {
		user() {
			const pros = this.$store.getters['pros/getPros']
			const prosArray = Object.keys(pros).map((key) => {
				return pros[key];
			});
			return prosArray.find(pro => pro.uid === this.$route.params.uid)
		},
		rating() {
			if(this.user) {
				const all = []
			for ( const i in this.user.reviews) {
				all.push(Number(this.user.reviews[i].reviewStars))
			}
			this.reviewCount = all.length
			return (all.reduce((part, a ) => part + a, 0)/all.length).toFixed(1)
			}
		},
	},
	methods: {
		starsCount () {
			if(isNaN(this.rating)) this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
			if (this.rating === "1") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
			if (this.rating >= "1.3") this.stars = `<i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
			if (this.rating >= "2") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
			if (this.rating >= "2.3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
			if (this.rating >= "3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
			if (this.rating >= "3.3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i>`
			if (this.rating >= "4") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`
			if (this.rating >= "4.3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>`
			if (this.rating === "5") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`
		}
	}
}
</script>