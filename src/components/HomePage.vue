<template>
	<div>
		<div class="mt-5 mb-5">
			<h1 class="text-center mb-5">Search for an AutoWiz Pro</h1>
			<form @submit.prevent="filteredList">
				<div class="d-block">
					<input
						id="v-step-2"
						v-model="search"
						class="form-control"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
				</div>
				<div class="mt-2 text-center">
					<button class="btn b-fill" style="width: 25%">Search</button>
				</div>
			</form>
		</div>
		<div class="row row-cols-1 row-cols-md-4 g-4">
			<div class="col" v-for="pro in filteredPros" :key="pro">
				<base-card class="mb-3 h-100">
					<template v-slot:title>
						{{ pro.businessName }}
					</template>
					<template v-slot:default>
						<router-link class="btn balt btn-sm" :to="{name: 'Public Profile', params:{uid: pro.uid}}">View</router-link>
						<h6 class="mt-5">Services:</h6>
						<span v-for="ser in pro.services" :key="ser" class="badge bpill me-1"> {{ ser }}</span>
						
					</template>
				</base-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			filteredPros: [],
		};
	},
	created() {
		this.loadPros();
	},
	// watch: {
	// 	search() {
	// 		this.filteredList();
	// 	},
	// },
	computed: {
		getPros() {
			return this.$store.getters['pros/getPros'];
		},
	},
	methods: {
		filteredList() {
			const pros = Object.keys(this.getPros).map((key) => {
				return this.getPros[key];
			});
			const filteredPro = pros.map((pro) => {
				return {
					...pro,
					services: pro.services,
				};
			});
			const filtered = [];
			for (const i in filteredPro) {
				for (const j in filteredPro[i].services) {
					if (filteredPro[i].services[j].toLowerCase().includes(this.search.toLowerCase())) {
						filtered.push(filteredPro[i]);
					}
				}
			}
			this.filteredPros = [...new Set(filtered)];
			this.search = '';
		},
		async loadPros() {
			try {
				await this.$store.dispatch('pros/fetchPros');
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
		},
	},
};
</script>
