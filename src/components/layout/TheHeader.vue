<template>
	<div>
		<base-modal :show="wrongUser">
				<h1>Please sign in with the correct user type.</h1>
				<h4> You will be logged out in {{ timer }} seconds</h4>
		</base-modal>
		<nav class="navbar navbar-expand-lg">
			<div class="container">
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
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><hr class="dropdown-divider" /></li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled">Disabled</a>
						</li>
					</ul>
					<router-link v-if="!isAuth" to="signin" class="nav-link btn balt">Sign In</router-link>
					<router-link v-if="!isAuth" to="signup" class="nav-link">Sign Up</router-link>
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
								<span v-if="user !== null">Hello {{ user.firstName }}! <i v-if="!arrow" class="bi bi-arrow-down-short"></i> <i v-if="arrow" class="bi bi-arrow-up-short"></i></span>
							</a>
							<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><hr class="dropdown-divider" /></li>
								<a @click="logout" role="button" class="dropdown-item">Logout</a>
							</ul>
						</li>
					</ul>
					<div class="form-check form-switch">
						<input
							@change="changeTheme"
							class="form-check-input"
							type="checkbox"
							role="switch"
							id="theme"
						/>
						<label v-if="darkmode" class="form-check-label" for="theme">Dark</label>
						<label v-else class="form-check-label" for="theme">Light</label>
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
			timer: 5
		};
	},
	watch: {
		isAuth(val) {
			if(val === true) this.wrongSignIn()
		}
	},
	computed: {
		isAuth() {
			return this.$store.getters['auth/isAuthenticated'];
		},
		user() {
			return this.$store.getters['auth/getUser']
		},
	},
	methods: {
		wrongSignIn() {
			if (this.user === null) this.wrongUser = true
			setTimeout(() => {
				if (this.timer > 0 && this.wrongUser === true) {
					this.timer--
					this.wrongSignIn()
				}	
			}, 1000)
			setTimeout(() => {
				this.logout()
				this.timer = 5
			},4000)
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
		},
		logout() {
			this.wrongUser = false
			setTimeout(() => {
				this.$store.dispatch('auth/logout');
			this.$router.push('/');
			}, 200)
		},
	},
};
</script>
