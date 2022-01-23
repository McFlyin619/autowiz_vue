export default {
	isAuthenticated(state) {
		return !!state.token
	},
	getUser(state) {
		return state.user
	}
};
