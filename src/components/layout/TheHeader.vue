<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">AutoWiz</a>
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

				<form class="d-flex">
					<button class="btn bnav me-2" type="submit">Search</button>
					<input class="form-control" type="search" placeholder="Search" aria-label="Search" />
				</form>
				<div class="form-check form-switch ms-2">
					<input @change="changeTheme" class="form-check-input" type="checkbox" role="switch" id="theme" />
					<label v-if="darkmode" class="form-check-label" for="theme">Dark</label>
					<label v-else class="form-check-label" for="theme">Light</label>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			darkmode: false,
		};
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
	},
};
</script>
