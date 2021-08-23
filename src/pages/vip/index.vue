<template>
    <router-view v-slot="{ Component }">
        <transition name="fade2" mode="out-in" appear>
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const store = useStore()
const users = store.state.users
const token = sessionStorage.getItem('token')
let idx = 0

for (let i = 0; i < users.length; i++) {
    if (token === users[i].account) {
        idx = i
        break
    }
}
if (!users[idx].grade) {
    router.replace('/error/401')
    ElMessage({
        type: 'warning',
        message: '当前用户没有权限进入该页面！'
    })
}

</script>
 