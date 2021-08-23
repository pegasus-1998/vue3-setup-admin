import vip from '@/pages/vip/index.vue'
import imgs from '@/pages/vip/imgs/index.vue'
import videos from '@/pages/vip/videos/index.vue'

const vipRoute = {
    path: '/vip',
    component: vip,
    redirect: '/vip/imgs',
    children: [
        {
            path: 'imgs',
            component: imgs,
            meta: {
                bar: 'vip/imgs',
                title: '精彩图片浏览'
            }
        },
        {
            path: 'videos',
            component: videos,
            meta: {
                bar: 'vip/videos',
                title: '高清在线电影'
            }
        }
    ]
}

export default vipRoute