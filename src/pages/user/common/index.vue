<template>
    <div>
        <el-table  :data="users" style="width: 100%;" border>
            <el-table-column label="id" prop="id"></el-table-column>
            <el-table-column label="账号" prop="account"></el-table-column>
            <el-table-column label="密码" prop="password"></el-table-column>
            <el-table-column label="头像" prop="ava">
                <template #default='scope'>
                    <img :src="scope.row.ava" alt="">
                </template>
            </el-table-column>
            <el-table-column label="权限">
                <template #default='scope'>
                    <el-switch v-model="scope.row.grade" @change="change"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="编辑" prop="grade">
                <template  #default="scope">
                    <el-button type="primary" @click="removeUser(scope.row.id, scope.row.account)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang='ts' setup>
import { computed, reactive } from 'vue'
import { useStore, mapState, mapMutations } from 'vuex'
import { ElMessage, ElMessageBox  } from 'element-plus'

const store = useStore()
const users = computed(() => store.state.users)


function change(state: boolean) {
    if(state) {
        ElMessage({
            type: 'success',
            message: '权限已开启！'
        })
    }else {
        ElMessage({
            type: 'warning',
            message: '权限已关闭！'
        }) 
    }
}
function removeUser(id: number, token: string) {
    if(token === sessionStorage.getItem('token')) {
        ElMessage.error('当前登陆的用户无法删除！');
        return
    }
    ElMessageBox.confirm('您确定要删除此用户吗？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            store.commit('DELETE_USER_MESSAGE', id)
            ElMessage({
              type: 'success',
              message: '删除成功!',
            });
          })
          .catch(() => {});

}
</script>

<style lang="scss" scoped>
    button {
        margin-left: 25px;
    }
</style>