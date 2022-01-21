<template>
	<div>
		<nav class="navbar navbar-expand-lg">
			<div class="container">
				<router-link to="/" class="navbar-brand" >AutoWiz</router-link>
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
					<a v-else @click="logout" role="button" class="nav-link">Logout</a>
					<div class="form-check form-switch">
						<input @change="changeTheme" class="form-check-input" type="checkbox" role="switch" id="theme" />
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
		};
	},
	computed: {
		isAuth() {
			return this.$store.getters['auth/isAuthenticated']
		}
	},
	methods: {
		changeTheme() {
			const theme = document.body.getAttribute('data-theme');
			if (theme === 'light') {
				document.body.setAttribute('data-theme', 'dark');
				this.darkmode = true
			} else {
				document.body.setAttribute('data-theme', 'light');
				this.darkmode = false
			}
		},
		logout() {
			this.$store.dispatch('auth/logout')
		}
	},
};
</script>
