import { ref, onValue } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import db from '@/firebase.js'
let timer;
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
				uid: userCred.user.uid,
			};
			if (payload.isPro === true) {
				context.dispatch('pros/addPro', userInfo, { root: true });
			}
			if (payload.isCustomer === true) {
				context.dispatch('customers/addCustomer', userInfo, { root: true });
			}
		});
	},
	signIn(context, payload) {
		signInWithEmailAndPassword(getAuth(), payload.email, payload.password).then((user) => {
			const info = {
				uid: user.user.uid,
				token: user.user.accessToken,
			};
			localStorage.setItem('id', info.uid);
			localStorage.setItem('token', info.token);

			const expiresIn = +user._tokenResponse.expiresIn * 1000;
			const expirationDate = new Date().getTime() + expiresIn;

			localStorage.setItem('tokenExpiration', expirationDate);
			if (payload.isPro === true) {
				localStorage.setItem('user', 'Pro')
				context.dispatch('fetchProUser', info);
			}
			if (payload.isCustomer === true) {
				localStorage.setItem('user', 'Customer');
				context.dispatch('fetchCustUser', info);
			}
			timer = setTimeout(() => {
				context.dispatch('autoLogout');
			}, expiresIn);
		});
	},
	fetchCustUser(context, payload) {
		const uid = payload.uid;
		const dbRef = ref(db, 'customers/' + uid);
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			context.commit('setUser', data);
			context.commit('setToken', payload.token);
		});
	},
	fetchProUser(context, payload) {
		const uid = payload.uid;
		const dbRef = ref(db, 'pros/' + uid);
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			context.commit('setUser', data);
			context.commit('setToken', payload.token);
		});
	},
	// fetchPros(context) {
	// 	const dbRef = ref(db, 'pros');
	// 	onValue(dbRef, (snapshot) => {
	// 		const data = snapshot.val();
	// 		context.commit('setPros', data);
	// 	});
	// },
	tryLogin(context) {
		const tokenExpiration = localStorage.getItem('tokenExpiration');
		const uidLocal = localStorage.getItem('id')
		const tokenLocal = localStorage.getItem('token')
		const user = localStorage.getItem('user')

		const payload = {
			uid: uidLocal,
			token: tokenLocal
		};
		if (payload) {
			if (user === 'Pro') context.dispatch('fetchProUser', payload);
			if (user === 'Customer') context.dispatch('fetchCustUser', payload);
			context.commit('setToken', payload.token);
		}

		const expiresIn = +tokenExpiration - new Date().getTime();
		if (expiresIn > 0) {
			return;
		}
		timer = setTimeout(() => {
			context.dispatch('autoLogout');
		}, expiresIn);
	},
	logout(context) {
		signOut(getAuth());
		localStorage.removeItem('id');
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('tokenExpiration');
		context.commit('setUser', null);
		context.commit('setToken', null);
	},
	autoLogout(context) {
		context.dispatch('logout');
		context.commit('setAutoLogout');
	},
};
