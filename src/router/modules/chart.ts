import chart from '@/pages/chart/index.vue'
import base from '@/pages/chart/base/index.vue'
import watch from '@/pages/chart/watch/index.vue'
import theme from '@/pages/chart/theme/index.vue'

const chartRoute = {
    path: '/chart',
    component: chart,
    redirect: '/chart/base',
    children: [
        {
            path: 'base',
            component: base,
            meta: {
                bar: 'chart/base',
                title: '基础图表'
            },
        },
        {
            path: 'watch',
            component: watch,
            meta: {
                bar: 'chart/watch',
                title: '时钟图表'
            }
        },
        {
            path: 'theme',
            component: theme,
            meta: {
                bar: 'chart/theme',
                title: '主题效果'
            }
        }
    ]
}


export default chartRoute