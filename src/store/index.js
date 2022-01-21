import { createStore } from 'vuex';
import prosModule from './modules/pros/index.js'
import authModule from './modules/auth/index.js'

export default createStore({
	modules: {
		pros: prosModule,
		auth: authModule
	},
});
