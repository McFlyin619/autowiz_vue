import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/auth/SignUp.vue';
import SignIn from '../views/auth/SignIn.vue';

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
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
