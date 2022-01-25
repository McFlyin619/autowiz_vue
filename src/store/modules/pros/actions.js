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
			uid: payload.uid,
		});
		// const userInfo = {
		// 	firstName: payload.firstName,
		// 	lastName: payload.lastName,
		// 	email: payload.email,
		// 	isPro: payload.isPro,
		// 	isCustomer: payload.isCustomer,
		// 	services: payload.services,
		// 	businessName: payload.businessName,
		// };
		// context.commit('pushPro', userInfo);
		// console.log('run');
	},
	fetchPros(context) {
		const dbRef = ref(db, 'pros');
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			context.commit('setPros', data);
		});
	},
};
