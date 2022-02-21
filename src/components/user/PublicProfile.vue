<template>
	<div v-if="user" class="container">
		<base-modal :show="showPostReview" title=" " @close="showPostReview = false">
			<post-review :loggedInUser="loggedInUser" :business="user.businessName" :uid="user.uid" @close="showPostReview = false"></post-review>
		</base-modal>
		<h1 class="mt-5 text-center">{{ user.businessName }}</h1>
		<base-card>
			<about-business :user="user"></about-business>
			<button v-if=" loggedInUser && user.uid !== loggedInUser.uid && loggedInUser.isPro === false" @click="showPostReview = true" class="btn balt">Review {{ user.businessName }}</button>

			<div class="mt-3"><h3>{{ isNaN(rating) ? 0 : rating }} average based on {{reviewCount}} review{{reviewCount === 0 ? 's' : reviewCount > 1 ? 's' : ''}} </h3></div>
			<div v-if="reviews" v-for="r in reviews" :key="r" class="review-container mb-2">
				<h5 class="reviewed-by">{{ r.reviewedBy.firstName }} {{ r.reviewedBy.lastName.charAt(0)}}. rated {{user.businessName}} <span class="tmain">{{r.reviewStars}}</span> stars.</h5>
				<p class="ms-5 review-body"> {{r.reviewBody}} </p>
			</div>
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
		loggedInUser () {
			return this.$store.getters['auth/getUser']
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
		reviews () {
			if (this.user && this.user.reviews) {
				var reviews = this.user.reviews
				var sorted = Object.keys(reviews).map(key => {
					return reviews[key]
				}).sort((a,b) => {
					return Number(b.reviewStars) - Number(a.reviewStars)
				})
			}
			return sorted
		}
	},
	methods: {
		// starsCount () {
		// 	if(isNaN(this.rating)) this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		// 	if (this.rating === "1") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "1.3") this.stars = `<i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "2") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "2.3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "3.3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "4") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>`
		// 	if (this.rating >= "4.3") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>`
		// 	if (this.rating === "5") this.stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`
		// },
	
	}
}
</script>