<template>
  <div class="register">
    <el-input v-model="obj.account" placeholder="请输入账号" :minlength="3" :maxlength="6" focus />
    <el-input v-model="obj.password" placeholder="请输入密码" :minlength="3" :maxlength="6" />
    <el-input v-model="obj.con" placeholder="请输入个性签名" :minlength="3" :maxlength="50"></el-input>
    <img :src="obj.ava" class="ava" />
    <el-button type="primary" @click="register">注册</el-button>
    <div class="avas">
      <h3>头像：</h3>
      <img
        :src="require(`@/images/ava/ava0${item}.png`)"
        v-for="item in 21"
        :key="item"
        @click="selectAva(item)"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, markRaw, onMounted } from 'vue'
import { useStore } from 'vuex'
import { nanoid } from 'nanoid'
import { ElMessage } from 'element-plus'

const obj = reactive({
  account: '',
  password: '',
  con: '',
  ava: require('@/images/ava/ava01.png')
})
const store = useStore()

function selectAva(idx: number) {
  obj.ava = require(`@/images/ava/ava0${idx}.png`)
}
function register() {
  if (obj.account.length == 0) {
    ElMessage({
      type: 'warning',
      message: '账号不能为空！'
    })
    return
  }
  const flag = store.state.users.some((item: any) => {
    if (obj.account === item.account) {
      ElMessage({
        type: 'warning',
        message: '账号已经被注册！'
      })
      return false
    } else {
      return true
    }
  })
  if (!flag) {
    return
  }
  ElMessage({
    type: 'success',
    message: '注册成功'
  })
  store.commit('ADD_USER_MESSAGE', {
    id: nanoid(),
    account: obj.account,
    password: obj.password,
    con: obj.con,
    ava: obj.ava
  })
  obj.account = ''
  obj.password = ''
  obj.con = ''
}
</script>

<style lang="scss" scoped>
.register {
  padding-left: 50px;
  .el-input {
    display: block;
    width: 260px;
    margin: 25px 0;
  }
  .el-button {
    margin: 0 25px;
  }
  .ava {
    border: 1px solid #ccc;
  }
  .avas {
    margin-top: 25px;
    img {
      cursor: pointer;
      width: 60px;
      margin: 15px;
      transition: all 0.5s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
}
</style>

 