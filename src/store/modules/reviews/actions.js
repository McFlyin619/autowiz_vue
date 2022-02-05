import { ref, set, push, onValue, update } from 'firebase/database';
import db from '@/firebase.js';
export default {
	addReview(context, payload) {
		const uid = payload.uid;
		push(ref(db, 'pros/' + uid + '/reviews'), {
			reviewStars: payload.reviewStars,
			// reviewBody: payload.reviewBody,
			// reviewedBy: payload.reviewedBy
		});
	},
};
