import { ref, set, onValue, update } from 'firebase/database';
import db from '@/firebase.js';
export default {
	addPro(context, payload) {
		const uid = payload.uid;
		set(ref(db, 'pros/' + uid), {
			firstName: payload.firstName,
			lastName: payload.lastName,
			email: payload.email,
			isPro: payload.isPro,
			isCustomer: payload.isCustomer,
			services: payload.services,
			businessName: payload.businessName,
			address1: payload.address1,
			address2: payload.address2,
			city: payload.city,
			state: payload.state,
			zip: payload.zip,
			about: payload.about,
			darkmode: false,
			uid: payload.uid,
		});
		context.dispatch('fetchPros');
	},
	fetchPros(context) {
		const dbRef = ref(db, 'pros');
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			context.commit('setPros', data);
		});
	},
	updatePro(context, payload) {
		localStorage.setItem('darkmode', payload.darkmode);
		const uid = payload.uid;
		update(ref(db, 'pros/' + uid), {
			darkmode: payload.darkmode,
		});
	},
	editProProfile(context, payload) {
		const uid = payload.uid;
		update(ref(db, 'pros/' + uid), {
			firstName: payload.firstName,
			lastName: payload.lastName,
			address1: payload.address1,
			address2: payload.address2,
			city: payload.city,
			state: payload.state,
			zip: payload.zip,
		});
		context.dispatch('fetchPros');
	},
	editProBusiness(context, payload) {
		const uid = payload.uid;
		update(ref(db, 'pros/' + uid), {
			businessName: payload.businessName,
			about: payload.about
		});
		context.dispatch('fetchPros');
	},
};
