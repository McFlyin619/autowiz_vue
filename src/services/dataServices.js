import firebase from '../firebase';

const db = firebase.ref('/pros');

class AutoWizDataService {
	getAll() {
		return db;
	}

	create(pro) {
		return db.push(pro);
	}

	update(key, value) {
		return db.child(key).update(value);
	}

	delete(key) {
		return db.child(key).remove();
	}

	deleteAll() {
		return db.remove();
	}
}

export default new AutoWizDataService();
