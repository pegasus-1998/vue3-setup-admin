import error from '@/pages/error/index.vue'
import error401 from '@/pages/error/error401/index.vue'
import error404 from '@/pages/error/error404/index.vue'
import happenError from '@/pages/error/happenError/index.vue'

const errorRoute = {
    path: '/error',
    component: error,
    redirect: '/error/401',
    children: [
        {
            path: '401',
            component: error401,
            meta: {
                bar: 'error/401',
                title: '权限不足'
            },
        },
        {
            path: '404',
            component: error404,
            meta: {
                bar: 'error/404',
                title: 'not fond'
            }
        },
        {
            path: 'happenError',
            component: happenError,
            meta: {
                bar: 'error/happenError',
                title: '程序发生错误'
            }
        }
    ]
}


export default errorRoute