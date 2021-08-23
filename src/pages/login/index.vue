<template>
    <div class="login">
        <div class="container">
            <h3>登录</h3>
            <el-input placeholder="请输入账号" v-model="loginObj.account">
                <template #prepend>
                    <i class="el-icon-user-solid"></i>
                </template>
            </el-input>
            <el-input placeholder="请输入密码" show-password v-model="loginObj.password">
                <template #prepend>
                    <i class="el-icon-s-cooperation"></i>
                </template>
            </el-input>
            <el-button type="primary" @click="login">LOGIN</el-button>
            <div class="account" @click="changeAccount(index)" v-for="(item, index) in users" :key='item.id'>
                <i class="el-icon-user-solid"></i>
                <span>账号：{{item.account}}</span>
                <span>密码：{{item.password}}</span>
                <i class="el-icon-folder-opened"></i>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'


const router = useRouter()
const store = useStore()
let users = computed(() =>  store.state.users)
const loginObj = reactive({
    account: users.value[0].account,
    password: users.value[0].password
})

function login() {
   const flag = users.value.some((item: any) => loginObj.account == item.account && loginObj.password == item.password)
    if (flag) {
        ElMessage({
            type: 'success',
            message: '登录成功'
        })
        sessionStorage.setItem('token', loginObj.account)
        router.replace('/home')
    } else {
        ElMessage({
            type: 'error',
            message: '账号密码错误!'
        })
    }
}

function changeAccount(index: any) {
    loginObj.account = users.value[index].account
    loginObj.password = users.value[index].password
}
</script>

<style lang="scss" scoped>
.login {
    @include hvCenter();
    width: 100vw;
    height: 100vh;
    background: #2d3a4b;
    min-height: 100vh;
    &:deep(.container) {
        margin: 50px;
        width: 450px;
        color: #ccc;
        h3 {
            text-align: center;
            margin-bottom: 25px;
            font-size: 21px;
            font-weight: 700;
            letter-spacing: 15px;
        }
        .el-input {
            border: 1px solid rgb(148, 143, 143);
            margin-bottom: 25px;
            border-radius: 5px;
            overflow: hidden;
        }
        .el-input__inner {
            background: #2d3a4b;
            border: none;
            height: 50px;
            color: #fff;
        }
        .el-input-group__prepend {
            background: #2d3a4b;
            border: none;
            font-size: 25px;
        }
        .el-button {
            display: block;
            color: #fff;
            letter-spacing: 5px;
            width: 100%;
            margin: 0 auto;
        }
        .account {
            cursor: pointer;
            width: max-content;
            margin: 15px 0;
            i {
                margin-right: 15px;
                font-size: 25px;
            }
            span {
                margin-right: 15px;
            }
            &:hover {
                color: #eee;
            }
        }
    }
}
</style>