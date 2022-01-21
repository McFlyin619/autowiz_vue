import { ref, onValue } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import db from '@/firebase.js'
export default {
	signUp(context, payload) {
		createUserWithEmailAndPassword(getAuth(), payload.email, payload.password).then((userCred) => {
			const userInfo = {
				email: payload.email,
				firstName: payload.firstName,
				lastName: payload.lastName,
				isPro: payload.isPro,
				isCustomer: payload.isCustomer,
				services: payload.services,
				businessName: payload.businessName,
				uid: userCred.user.uid
			};
			if (payload.isPro === true) {
				console.log(userInfo)
				context.dispatch('pros/addPro', userInfo, { root: true });
			}
		})
	},
	signIn(context, payload) {
		signInWithEmailAndPassword(getAuth(), payload.email, payload.password).then((user) => {
			const payload = {
				uid: user.user.uid,
				token: user.user.accessToken
			}
			context.dispatch('fetchUser', payload)
		})
	},
	fetchUser(context, payload) {
		const uid = payload.uid
		const dbRef = ref(db, 'pros/' + uid);
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			context.commit('setUser', data);
			context.commit('setToken', payload.token)
		});
	},
	fetchPros(context) {
		const dbRef = ref(db, 'pros');
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val()
			context.commit('setPros', data);
		})
	},
	logout(context) {
		signOut(getAuth())
		context.commit('setUser', null)
		context.commit('setToken', null);
	}
};
