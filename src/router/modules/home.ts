import home from '@/pages/home/index.vue'
import welcome from '@/pages/home/welcome/index.vue'
import happy from '@/pages/home/htppy/index.vue'

const homeRoute = {
    path: '/home',
    component: home,
    redirect: '/home/welcome',
    children: [
        {
            path: 'welcome',
            component: welcome,
            meta: {
                bar: 'home/welcome',
                title: 'welcome-欢迎，亲！'
            }
        },
        {
            path: 'happy',
            component: happy,
            meta: {
                bar: 'home/happy',
                title: 'happy-开心一下'
            }
        }
    ]
}

export default homeRoute