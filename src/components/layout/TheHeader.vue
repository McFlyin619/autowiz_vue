<template>
	<div>
		<base-modal :show="wrongUser">
			<h1>Please sign in with the correct user type.</h1>
			<h4>page will refresh in {{ timer }} seconds</h4>
		</base-modal>
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand">AutoWiz</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item nav-menu">
							<router-link class="nav-link" aria-current="page" to="/">Home</router-link>
						</li>
					</ul>
					<router-link v-if="!isAuth" :to="{ name: 'Sign In'}" class="nav-link navbtn">Sign In</router-link>
					<router-link id="v-step-0" v-if="!isAuth" :to="{ name: 'Sign Up'}" class="nav-link navbtn">Sign Up</router-link>
					<ul v-else class="navbar-nav">
						<li class="nav-item dropdown">
							<a
								class="nav-link nav-name"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								@click="arrow = !arrow"
							>
								<span v-if="user !== null"
									>Hello {{ user.firstName }}! <i v-if="!arrow" class="bi bi-arrow-down-short"></i>
									<i v-if="arrow" class="bi bi-arrow-up-short"></i
								></span>
							</a>
							<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
								<li><router-link class="dropdown-item" to="/my-profile">My Profile</router-link></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><hr class="dropdown-divider" /></li>
								<a @click="logout" role="button" class="dropdown-item">Logout</a>
							</ul>
						</li>
					</ul>
					<div class="info-center d-flex">
						<div class="form-check form-switch d-inline">
							<input
								@change="changeTheme"
								v-model="darkmode"
								class="form-check-input"
								type="checkbox"
								role="switch"
								id="theme"
							/>
							<label v-if="darkmode" class="form-check-label" for="theme">Dark Mode</label>
							<label v-else class="form-check-label" for="theme">Light Mode</label>
						</div>
						<div v-if="!isAuth" class="ms-2 align-self-center info-button">
							<a
								role="button"
								@click="helpTour"
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								title="Need help? Take the tour!"
								><i class="bi bi-question-square"></i
							></a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			darkmode: false,
			arrow: false,
			wrongUser: false,
			timer: 5,
		};
	},
	watch: {
		isAuth(val) {
			if (val === true && this.user === null) this.wrongSignIn();
			if (val === true && this.user !== null) this.setTheme();
		},
		user() {
			this.setTheme();
		},
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
		wrongSignIn() {
			if (this.user === null) this.wrongUser = true;
			setTimeout(() => {
				if (this.timer > 0 && this.wrongUser === true) {
					this.timer--;
					this.wrongSignIn();
				}
			}, 1000);
			setTimeout(() => {
				this.logout();
				this.timer = 5;
			}, 4000);
		},
		changeTheme() {
			const theme = document.body.getAttribute('data-theme');
			if (theme === 'light') {
				document.body.setAttribute('data-theme', 'dark');
				this.darkmode = true;
			} else {
				document.body.setAttribute('data-theme', 'light');
				this.darkmode = false;
			}
			if (this.isAuth) {
				if (this.user.isPro === true) {
					const payload = {
						uid: this.user.uid,
						darkmode: this.darkmode,
					};
					this.$store.dispatch('pros/updatePro', payload);
				}
				if (this.user.isCustomer === true) {
					const payload = {
						uid: this.user.uid,
						darkmode: this.darkmode,
					};
					this.$store.dispatch('customers/updateCustomer', payload);
				}
			}
		},
		setTheme() {
			this.darkmode = this.user.darkmode;
			if (this.darkmode === true) {
				document.body.setAttribute('data-theme', 'dark');
			} else {
				document.body.setAttribute('data-theme', 'light');
			}
		},
		logout() {
			this.wrongUser = false;
			this.$store.dispatch('auth/logout');
			this.$router.go('/');
		},
		helpTour() {
			this.$emit('help-tour');
		},
	},
};
</script>
