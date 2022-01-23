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
			services: payload.services,
			businessName: payload.businessName,
			uid: payload.uid
		})
		const userInfo = {
			firstName: payload.firstName,
			lastName: payload.lastName,
			email: payload.email,
			isPro: payload.isPro,
			isCustomer: payload.isCustomer,
			services: payload.services,
			businessName: payload.businessName,
		};
		context.commit('addCustomer', userInfo);
	},
	fetchCustomers(context) {
		const dbRef = ref(db, 'customers');
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val()
			context.commit('setCustomers', data);
		})
	}
};
