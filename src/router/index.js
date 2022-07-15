import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth) { //需要要鉴权
        const status = store.getters['loginUser/status'];
        if (status === 'loading') { //登陆中
            next({
                path: '/loading',
                query: {
                    returnurl: to.fullPath,
                },
            });
        } else if (status === 'login') { //已登陆
            next();
        } else { //未登陆
            alert('请登录');
            next({
                path: '/login',
                query: {
                    returnurl: to.fullPath, //（from，to）
                }
            })
        }
    } else { //不需要鉴权
        next();
    }
})

export default router;