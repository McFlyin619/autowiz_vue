import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDR-WKoNrwVG3_sxh_hhsGLcJhLDI7lQro',
	authDomain: 'autowiz-fd227.firebaseapp.com',
	projectId: 'autowiz-fd227',
	storageBucket: 'autowiz-fd227.appspot.com',
	messagingSenderId: '846220132701',
	appId: '1:846220132701:web:9d569faa5c29e86682a8b4',
	measurementId: 'G-FBEJB4PVPR',
};

firebase.initializeApp(config);

export default firebase.database();