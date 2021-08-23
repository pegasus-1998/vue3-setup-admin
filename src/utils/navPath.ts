export default [
    {
        id: 0,
        path: '1',
        title: 'HOME',
        icon: 'el-icon-menu',
        sonArr: [
          {
            id: 0, 
            path: '/home/welcome',
            title: 'welcome'
          },
        {
            id: 1,
            path: '/home/happy',
            title: 'happy'
          }
        ]
    },
    {
        id: 1,
        path: '2',
        title: 'CHART',
        icon: 'el-icon-s-help',
        sonArr: [
            {
                id: 0,
                path: '/chart/base',
                title: 'base'
            },
            {
                id: 1,
                path: '/chart/watch',
                title: 'watch'
            },
            {
                id: 2,
                path: '/chart/theme',
                title: 'theme'
            }
        ]
    },
    {
        id: 2,
        path: '3',
        title: 'MESSAGE',
        icon: 'el-icon-s-comment',
        sonArr: [
            {
                id: 0,
                path: '/message/editor',
                title: 'editor'
            }
        ]
    },
    {
        id: 3,
        path: '4',
        title: 'USER',
        icon: 'el-icon-s-custom',
        sonArr: [
            {
                id: 0,
                path: '/user/self',
                title: 'self'
            },
            {
                id: 1,
                path: '/user/common',
                title: 'common'
            },
            {
                id: 2,
                path: '/user/register',
                title: 'register'
            }
        ]
    },
    {
        id: 4,
        path: '/vip',
        title: 'VIP',
        icon: 'el-icon-star-on',
        sonArr: [
            {
                id: 0,
                path: '/vip/imgs',
                title: 'imgs'
            },
            {
                id: 1,
                path: '/vip/videos',
                title: 'videos'
            }
        ]
    },
    {
        id: 5,
        path: '6',
        title: 'ERROR',
        icon: 'el-icon-warning',
        sonArr: [
            {
                id: 0,
                path: '/error/401',
                title: '401'
            },
            {
                id: 1,
                path: '/error/404',
                title: '404'
            },
            {
                id: 2,
                path: '/error/happenError',
                title: 'error'
            }
        ]
    }
]