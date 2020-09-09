import Vue from "vue";
import VueRouter from "vue-router";
import shouye from "./shouye/shouye.js"

Vue.use(VueRouter);

const routes = [
	shouye,
	{
		path: '/denglu',
		name:'denglu',
		component: () => import('@/views/denglu/denglu')
	},
	{
		path: '/*',
		redirect: '/denglu'
	}
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});


// 全局前置守卫
// 在Router实例上进行守卫
router.beforeEach((to, from, next) => {
	let wen = sessionStorage.getItem("user")
	// to和from都是路由实例
	// to：即将跳转到的路由
	// from：现在的要离开的路由
	// next：函数
	// 如果未登录，就跳到登录页，如果登录了，选择哪个页面跳到哪个页面；如果登录了还去了login页面，就跳到首页。
	if (to.name !== 'denglu') {
		if(wen !==null){
			next()
		}else{
			next({
				name: 'denglu'
			})
		}
	} else {
		if(wen !==null){
			console.log(wen)
			next({
				name: 'shouye'
			})
		}else{
			next()
		}
	}
})

export default router;
