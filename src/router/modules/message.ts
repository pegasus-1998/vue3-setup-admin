import message from '@/pages/message/index.vue'
import editor from '@/pages/message/editor/index.vue'

const messageRoute = {
    path: '/message',
    component: message,
    redirect: '/message/mes1',
    children: [
        {
            path: 'editor',
            component: editor,
            meta: {
                bar: 'message/mes1',
                title: '文本编辑器'
            }
        }
    ]
}

export default messageRoute