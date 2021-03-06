import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import VueRouter from "vue-router";

import find from "./views/find.vue";
import newMusic from "./views/newMusic.vue";
import NewMv from "./views/newMv.vue";
import audioPlay from "./views/audioPlay";
import mvPlay from "./views/mvPlay";

import axios from "axios";

Vue.use(ElementUI);
Vue.use(VueRouter);

const base = axios.create({
	baseURL: "https://autumnfish.cn",
});
Vue.prototype.$axios = base;

const router = new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/find",
		},
		{
			path: "/find",
			component: find,
		},
		{
			path: "/newMusic",
			component: newMusic,
		},
		{
			path: "/NewMv",
			component: NewMv,
		},
		{
			path: "*",
			redirect: "/find",
		},
		{
			path: "/audioPlay",
			component: audioPlay,
		},
		{
			path: "/mvPlay",
			component: mvPlay,
		},
	],
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
