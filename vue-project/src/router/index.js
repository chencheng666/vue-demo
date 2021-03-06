import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 第一个路由组件
import FirstDemo from '@/components/firstDemo'
// 第二个路由组件
import SecondDemo from '@/components/secondDemo'

// 学习js、css的检验demo
import studyDemo from '@/components/studyDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias: '/ccc'  // 别名
    },
    {
      name: 'FirstDemo',
      path: '/firstDemo/:param1', // 动态路由
      component: resolve => require(['@/components/firstDemo'], resolve),//懒加载,
      meta: {
        keepAlive: true
      }
    },
    // {
    //   name: '',
    //   path: '/firstDemo/', // 动态路由
    //   redirect: '/firstDemo'
    // },
    {
      name: 'secondDemo',
      path: '/secondDemo',
      component: SecondDemo,
      // redirect: '/multiDemo' // 重定向
    },
    { // 命名视图
      name: 'multiDemo',
      path: '/multiDemo',
      components: {
        default: FirstDemo,
        sss: SecondDemo
      }
	},
	{
		name: 'studyDemo',
		path: '/studyDemo',
		component: studyDemo
	}
  ]
})
