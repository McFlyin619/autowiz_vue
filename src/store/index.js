import { createStore } from 'vuex';
import prosModule from './modules/pros/index.js'
import customersModule from './modules/customers/index.js';
import authModule from './modules/auth/index.js'
import reviewsModule from './modules/reviews/index.js'

export default createStore({
	modules: {
		pros: prosModule,
		auth: authModule,
		customers: customersModule,
		reviews: reviewsModule
	},
});
