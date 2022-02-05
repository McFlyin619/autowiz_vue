import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/auth/SignUp.vue';
import SignIn from '../views/auth/SignIn.vue';
import ProfilePage from '../views/user/ProfilePage.vue'
import PublicProfile from '@/components/user/PublicProfile.vue';
import NotFound from '../views/NotFound.vue';
import store from '../store/index.js';


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/signup',
		name: 'Sign Up',
		component: SignUp,
	},
	{
		path: '/signin',
		name: 'Sign In',
		component: SignIn,
	},
	{
		path: '/my-profile',
		name: 'Profile',
		component: ProfilePage,
		meta: { requiresAuth: true },
	},
	{
		path: '/pros/:uid',
		name: 'Public Profile',
		component: PublicProfile,
	},
	{ path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach(function (to, _, next) {
	if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
		next('/');
	} else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
		next('/my-profile');
	} else {
		next();
	}
});

export default router;
