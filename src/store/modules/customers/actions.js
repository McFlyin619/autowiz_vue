import { ref, set, onValue, update } from 'firebase/database';
import db from '@/firebase.js'
export default {
	addCustomer(context, payload) {
		const uid = payload.uid;
		set(ref(db, 'customers/' + uid), {
			firstName: payload.firstName,
			lastName: payload.lastName,
			email: payload.email,
			isPro: payload.isPro,
			isCustomer: payload.isCustomer,
			address1: payload.address1,
			address2: payload.address2,
			city: payload.city,
			state: payload.state,
			zip: payload.zip,
			darkmode: false,
			uid: payload.uid,
		});
		context.dispatch('fetchCustomers');
	},
	fetchCustomers(context) {
		const dbRef = ref(db, 'customers');
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			context.commit('setCustomers', data);
		});
	},
	updateCustomer(context, payload) {
		localStorage.setItem('darkmode', payload.darkmode);
		const uid = payload.uid;
		update(ref(db, 'customers/' + uid), {
			darkmode: payload.darkmode,
		});
	},
	editCustomerProfile(context, payload) {
		const uid = payload.uid;
		update(ref(db, 'customers/' + uid), {
			firstName: payload.firstName,
			lastName: payload.lastName,
			address1: payload.address1,
			address2: payload.address2,
			city: payload.city,
			state: payload.state,
			zip: payload.zip,
		});
		context.dispatch('fetchCustomers');
	},
};
