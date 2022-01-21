export default {
	addPro(state, payload) {
		state.pros.push(payload)
	},
	setPros(state, payload) {
		state.pros = payload
	}
};
