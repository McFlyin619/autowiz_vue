export default {
	setUser(state, payload) {
		state.user = payload;
	},
	setToken(state, payload) {
		state.token = payload;
	},
	setAutoLogout(state) {
		state.didAutoLogout = true;
	},
};
