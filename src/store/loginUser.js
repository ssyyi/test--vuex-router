import * as userApi from '@/api/user';
export default {
    namespaced: true,
    state: {
        loading: false, //是否在登陆
        user: null, //是否已登陆
    },
    getters: {
        status(state) {
            if (state.loading) {
                return 'loading'
            } else if (state.user) {
                return 'login'
            } else {
                return 'unlogin'
            }
        }
    },
    mutations: {
        setLoading(state, payload) { //设置登陆状态
            state.loading = payload;
        },
        setUser(state, payload) { //设置有无用户
            state.user = payload
        }
    },
    actions: {
        async login(ctx, payload) {
            ctx.commit('setLoading', true);
            const res = await userApi.login(payload.loginId, payload.loginPwd);
            ctx.commit('setUser', res);
            ctx.commit('setLoading', false);
            return res;
        },
        async loginOut(ctx) {
            ctx.commit('setLoading', true);
            await userApi.loginOut();
            ctx.commit('setUser', null);
            ctx.commit('setLoading', false);
        },
        async whoIAm(ctx) {
            ctx.commit('setLoading', true)
            const res = await userApi.whoIAm();
            ctx.commit('setUser', res);
            ctx.commit('setLoading', false)
        }
    }
}