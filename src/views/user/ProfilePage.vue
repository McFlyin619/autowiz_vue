<template>
	<div v-if="isAuth && user">
		<base-modal :show="showEditProfile" @close="showEditProfile = false" title="Edit Profile"
			><edit-profile :user="user" @close="showEditProfile = false"></edit-profile
		></base-modal>
		<base-modal :show="showEditBusiness" @close="showEditBusiness = false" title="Edit Business"
			><edit-business :user="user" @close="showEditBusiness = false"></edit-business
		></base-modal>
		<base-loader :show="isLoading"></base-loader>
		<div>
			<profile-info :user="user" @edit-profile="showEditProfile = true"></profile-info>
		</div>
		<div v-if="user.isPro === true" class="container">
			<div class="row mt-5">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a role="button" @click="showTab('about')" :class="{ 'active': activeTab === 'about' }" class="nav-link ptab" aria-current="page">About</a>
					</li>
					<li class="nav-item">
						<a role="button" @click="showTab('services')" :class="{ 'active': activeTab === 'services' }" class="nav-link ptab" aria-current="page">Services</a>
					</li>
					<li class="nav-item">
						<a role="button" @click="showTab('reviews')" :class="{ 'active': activeTab === 'reviews' }" class="nav-link ptab">Reviews</a>
					</li>
				</ul>
				<div class="tab-content" v-if="activeTab === 'about'">
					<about-business :user="user" @show-edit-business="showEditBusiness = true"></about-business>
				</div>
				<div class="tab-content" v-if="activeTab === 'services'">
					<services-provided :user="user"></services-provided>
				</div>
				<div class="tab-content" v-if="activeTab === 'reviews'"> reviews </div>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileInfo from '@/components/user/ProfileInfo.vue';
import EditProfile from '@/components/user/EditProfile.vue';
import ServicesProvided from '@/components/user/ServicesProvided.vue';
import AboutBusiness from '@/components/user/AboutBusiness.vue';
import EditBusiness from '../../components/user/EditBusiness.vue';
export default {
	components: {
		ProfileInfo,
		EditProfile,
		ServicesProvided,
		AboutBusiness,
		EditBusiness
	},
	data() {
		return {
			isLoading: false,
			showEditProfile: false,
			showEditBusiness: false,
			activeTab: 'about',
		};
	},
	created() {
		this.loading();
	},
	computed: {
		isAuth() {
			return this.$store.getters['auth/isAuthenticated'];
		},
		user() {
			return this.$store.getters['auth/getUser'];
		},
	},
	methods: {
		showTab(tab) {
			this.activeTab = tab;
		},
		loading() {
			if (!this.user) {
				this.isLoading = true;
			}
			this.isLoading = true;
			setTimeout(() => {
				this.isLoading = false;
			}, 1000);
		},
	},
};
</script>
