import Home from '@/views/Home';
import Blog from '@/views/Blog';
import Login from '@/views/Login';
import News from '@/views/News';
import Loading from '@/views/Loading';
import User from '@/views/User'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/blog',
        component: Blog,
        meta: { //需要鉴权
            auth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/news',
        component: News,
        meta: {
            auth: true
        }
    },
    {
        path: '/loading',
        component: Loading
    },
    {
        path: '/user',
        component: User,
        meta: {
            auth: true
        }
    }
]

export default routes;