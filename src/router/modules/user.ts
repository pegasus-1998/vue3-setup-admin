import user from '@/pages/user/index.vue'
import self from '@/pages/user/self/index.vue'
import common from '@/pages/user/common/index.vue'
import register from '@/pages/user/register/index.vue'

const userRoute = {
    path: '/user',
    component: user,
    redirect: '/user/self',
    children: [
        {
            path: 'self',
            component: self,
            meta: {
                bar: 'user/self',
                title: '个人账户'
            }
        },
        {
            path: 'common',
            component: common,
            meta: {
                bar: 'user/common',
                title: '所有账户'
            }
        },
        {
            path: 'register',
            component: register,
            meta: {
                bar: 'user/register',
                title: '注册用户'
            }
        }
    ]
}

export default userRoute