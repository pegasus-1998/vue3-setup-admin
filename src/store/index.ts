import { createStore } from 'vuex'
import leftNav from './modules/leftNav'
import createPersistedState from "vuex-persistedstate" 

export default createStore({
  state: {
    users: [  //保存每个用户  grade: 是否具有高级权限
      {
        id: 0,
        account: 'admin',
        password: 123456,
        grade: false,
        con: '生活不仅眼前的苟且，还有诗和远方。',
        ava: require('@/images/ava/ava01.png')
      },
      {
        id: 1,
        account: 'mains',
        password: 888888,
        grade: false,
        con: '太阳照亮人生的路，月亮照亮心灵的路。',
        ava: require('@/images/ava/ava03.png')
      },
      {
        id: 2,
        account: 'paegs',
        password: 666666,
        grade: false,
        con: '举头望明月，低头思故乡。',
        ava: require('@/images/ava/ava07.png')
      }
    ]    
  },
  mutations: {
    DELETE_USER_MESSAGE(state, id) {    // 删除用户
      let idx = 0
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === id) {
          idx = i
          break
        }
      }
      state.users.splice(idx, 1)
    },
    ADD_USER_MESSAGE(state, userObj) {  // 添加用户
      state.users.push({
        id: userObj.id,
        account: userObj.account,
        password: userObj.password,
        grade: false,
        con: userObj.con,
        ava: userObj.ava
      })
    }
  },
  modules: {
      leftNav
  },
  plugins: [createPersistedState()],
})
