export default {
	addCustomer(state, payload) {
		state.customers.push(payload)
	},
	setCustomers(state, payload) {
		state.customers = payload
	}
};
