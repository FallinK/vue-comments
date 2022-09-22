import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import PageComments from "@/pages/PageComments";
import About from "@/pages/About";
import PageUser from "@/pages/PageUser";

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/comments',
		component: PageComments
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/comments/:id',
		component: PageUser
	}
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});

export default router;